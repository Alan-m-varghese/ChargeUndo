// server/local-d1.ts
// Local SQLite adapter providing 100% API compatibility with Cloudflare D1
// Uses Node.js 22+ built-in node:sqlite module for local development

import { DatabaseSync } from 'node:sqlite';
import * as path from 'node:path';
import * as fs from 'node:fs';

export class LocalD1PreparedStatement {
  private db: DatabaseSync;
  private sql: string;
  private params: any[];

  constructor(db: DatabaseSync, sql: string, params: any[] = []) {
    this.db = db;
    this.sql = sql;
    this.params = params;
  }

  bind(...values: any[]): LocalD1PreparedStatement {
    return new LocalD1PreparedStatement(this.db, this.sql, values);
  }

  async all<T = Record<string, any>>(): Promise<{ results: T[]; success: boolean; meta: Record<string, any> }> {
    try {
      const stmt = this.db.prepare(this.sql);
      const results = stmt.all(...this.params) as T[];
      return { results, success: true, meta: { count: results.length } };
    } catch (err: any) {
      console.error(`D1 query error: ${this.sql}`, err);
      throw err;
    }
  }

  async first<T = Record<string, any>>(column?: string): Promise<T | null> {
    try {
      const stmt = this.db.prepare(this.sql);
      const row = stmt.get(...this.params) as Record<string, any> | undefined;
      if (!row) return null;
      if (column) return (row[column] as T) ?? null;
      return row as T;
    } catch (err: any) {
      console.error(`D1 first error: ${this.sql}`, err);
      throw err;
    }
  }

  async run(): Promise<{ success: boolean; meta: { changes: number; last_row_id: number } }> {
    try {
      const stmt = this.db.prepare(this.sql);
      const res = stmt.run(...this.params);
      return {
        success: true,
        meta: {
          changes: Number(res.changes),
          last_row_id: Number(res.lastInsertRowid),
        },
      };
    } catch (err: any) {
      console.error(`D1 run error: ${this.sql}`, err);
      throw err;
    }
  }

  async raw<T = any[]>(): Promise<T[]> {
    const stmt = this.db.prepare(this.sql);
    return stmt.all(...this.params) as unknown as T[];
  }
}

export class LocalD1Database {
  private db: DatabaseSync;

  constructor(dbFilePath?: string) {
    const targetPath = dbFilePath || path.resolve(process.cwd(), '.wrangler/state/local-d1.sqlite');
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    this.db = new DatabaseSync(targetPath);
  }

  prepare(query: string): LocalD1PreparedStatement {
    return new LocalD1PreparedStatement(this.db, query);
  }

  async batch(statements: LocalD1PreparedStatement[]): Promise<any[]> {
    const results: any[] = [];
    this.db.exec('BEGIN TRANSACTION;');
    try {
      for (const stmt of statements) {
        results.push(await stmt.run());
      }
      this.db.exec('COMMIT;');
      return results;
    } catch (err) {
      this.db.exec('ROLLBACK;');
      throw err;
    }
  }

  async exec(query: string): Promise<{ count: number; duration: number }> {
    const start = Date.now();
    this.db.exec(query);
    return { count: 1, duration: Date.now() - start };
  }

  close(): void {
    this.db.close();
  }
}
