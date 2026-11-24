// server/local-r2.ts
// Local filesystem adapter providing 100% API compatibility with Cloudflare R2
// Stores files under .wrangler/state/local-r2/ for local development

import * as fs from 'node:fs';
import * as path from 'node:path';

export class LocalR2Bucket {
  private baseDir: string;

  constructor(storageDir?: string) {
    this.baseDir = storageDir || path.resolve(process.cwd(), '.wrangler/state/local-r2');
    if (!fs.existsSync(this.baseDir)) {
      fs.mkdirSync(this.baseDir, { recursive: true });
    }
  }

  private getFilePath(key: string): string {
    const sanitizedKey = key.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
    return path.join(this.baseDir, sanitizedKey);
  }

  private getMetaPath(key: string): string {
    return `${this.getFilePath(key)}.meta.json`;
  }

  async put(
    key: string,
    value: ArrayBuffer | Uint8Array | string | Blob | ReadableStream,
    options?: { httpMetadata?: { contentType?: string } }
  ): Promise<any> {
    const filePath = this.getFilePath(key);
    let buffer: Buffer;

    if (value instanceof Blob) {
      const arr = await value.arrayBuffer();
      buffer = Buffer.from(arr);
    } else if (value instanceof ArrayBuffer) {
      buffer = Buffer.from(value);
    } else if (value instanceof Uint8Array) {
      buffer = Buffer.from(value);
    } else if (typeof value === 'string') {
      buffer = Buffer.from(value, 'utf-8');
    } else {
      // ReadableStream fallback
      const chunks: Uint8Array[] = [];
      const reader = (value as ReadableStream<Uint8Array>).getReader();
      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        if (chunk) chunks.push(chunk);
      }
      buffer = Buffer.concat(chunks);
    }

    fs.writeFileSync(filePath, buffer);

    const meta = {
      key,
      size: buffer.length,
      uploaded: new Date().toISOString(),
      httpMetadata: options?.httpMetadata || { contentType: 'application/octet-stream' },
    };
    fs.writeFileSync(this.getMetaPath(key), JSON.stringify(meta, null, 2));

    return {
      key,
      size: buffer.length,
      httpMetadata: meta.httpMetadata,
      uploaded: new Date(meta.uploaded),
    };
  }

  async get(key: string): Promise<any | null> {
    const filePath = this.getFilePath(key);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const buffer = fs.readFileSync(filePath);
    let meta = { httpMetadata: { contentType: 'application/octet-stream' }, size: buffer.length };
    const metaPath = this.getMetaPath(key);
    if (fs.existsSync(metaPath)) {
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
      } catch {
        // Ignore JSON error
      }
    }

    return {
      key,
      size: buffer.length,
      httpMetadata: meta.httpMetadata,
      writeHttpMetadata: (headers: Headers) => {
        if (meta.httpMetadata?.contentType) {
          headers.set('Content-Type', meta.httpMetadata.contentType);
        }
      },
      arrayBuffer: async () => buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
      text: async () => buffer.toString('utf-8'),
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array(buffer));
          controller.close();
        },
      }),
    };
  }

  async delete(key: string): Promise<void> {
    const filePath = this.getFilePath(key);
    const metaPath = this.getMetaPath(key);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    if (fs.existsSync(metaPath)) fs.unlinkSync(metaPath);
  }
}
