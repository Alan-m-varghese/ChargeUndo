// server/dev-adapter.ts
// Connects Node/Vite development server middleware directly to the Cloudflare Worker fetch handler

import type { IncomingMessage, ServerResponse } from 'node:http';
import * as fs from 'node:fs';
import * as path from 'node:path';
import worker from './index.ts';
import { LocalD1Database } from './local-d1.ts';
import { LocalR2Bucket } from './local-r2.ts';
import type { Env } from './types.ts';

let localDb: LocalD1Database | null = null;
let localR2: LocalR2Bucket | null = null;
let schemaInitialized = false;

export function getLocalEnv(): Env {
  if (!localDb) {
    const dbPath = path.resolve(process.cwd(), '.wrangler/state/local-d1.sqlite');
    localDb = new LocalD1Database(dbPath);
  }
  if (!localR2) {
    const r2Path = path.resolve(process.cwd(), '.wrangler/state/local-r2');
    localR2 = new LocalR2Bucket(r2Path);
  }

  // Ensure migrations are applied
  if (!schemaInitialized) {
    const migration1 = path.resolve(process.cwd(), 'migrations/0001_initial_schema.sql');
    if (fs.existsSync(migration1)) {
      localDb.exec(fs.readFileSync(migration1, 'utf-8'));
    }
    const migration2 = path.resolve(process.cwd(), 'migrations/0002_multi_source_traceability.sql');
    if (fs.existsSync(migration2)) {
      try {
        localDb.exec(fs.readFileSync(migration2, 'utf-8'));
      } catch {
        // columns already exist
      }
    }
    schemaInitialized = true;
  }

  return {
    DB: localDb as unknown as D1Database,
    IMAGES: localR2 as unknown as R2Bucket,
    ENVIRONMENT: 'development',
    ADMIN_API_KEY: 'chargeundo-admin-dev-secret',
  };
}

export async function handleDevApiRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const env = getLocalEnv();
  const protocol = 'http';
  const host = req.headers.host || '127.0.0.1:5173';
  const fullUrl = `${protocol}://${host}${req.url}`;

  // Read request body if present
  let bodyBuffer: Buffer | null = null;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    bodyBuffer = Buffer.concat(chunks);
  }

  // Convert Node IncomingHttpHeaders to standard Web Headers
  const webHeaders = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (Array.isArray(val)) {
      val.forEach((v) => webHeaders.append(key, v));
    } else if (val !== undefined) {
      webHeaders.set(key, val);
    }
  }

  const webRequest = new Request(fullUrl, {
    method: req.method,
    headers: webHeaders,
    body: bodyBuffer && bodyBuffer.length > 0 ? new Uint8Array(bodyBuffer) : null,
  });

  const webResponse = await worker.fetch(webRequest, env);

  // Send status
  res.statusCode = webResponse.status;

  // Send headers
  webResponse.headers.forEach((val, key) => {
    res.setHeader(key, val);
  });

  // Send body
  const responseBuffer = Buffer.from(await webResponse.arrayBuffer());
  res.end(responseBuffer);
}
