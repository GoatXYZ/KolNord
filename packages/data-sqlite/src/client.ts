import fs from 'node:fs'
import path from 'node:path'

import Database from 'better-sqlite3'
import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import * as schema from './schema.js'

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`

export type KolnordDatabase = BetterSQLite3Database<typeof schema>

export type SqliteClient = {
  sqlite: Database.Database
  db: KolnordDatabase
}

export function createSqliteClient(filePath: string): SqliteClient {
  const absolutePath = path.resolve(filePath)
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true })

  const sqlite = new Database(absolutePath)
  sqlite.pragma('journal_mode = WAL')
  sqlite.exec(SCHEMA_SQL)

  const db = drizzle(sqlite, { schema })

  return { sqlite, db }
}
