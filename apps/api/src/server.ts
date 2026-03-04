import path from 'node:path'

import cors from 'cors'
import express from 'express'
import { z } from 'zod'

import { createProjectRepository, createSqliteClient } from '@kolnord/data-sqlite'

const app = express()

const port = Number(process.env.PORT ?? 4000)
const dbPath = process.env.KOLNORD_DB_PATH ?? path.resolve(process.cwd(), 'data/kolnord.sqlite')

const { sqlite, db } = createSqliteClient(dbPath)
const projects = createProjectRepository(db)

const createProjectSchema = z.object({
  name: z.string().trim().min(1),
  slug: z.string().trim().min(1).regex(/^[a-z0-9-]+$/),
  description: z.string().trim().optional(),
})

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true, dbPath })
})

app.get('/projects', (_req, res) => {
  res.json({ items: projects.list() })
})

app.get('/projects/:id', (req, res) => {
  const id = Number(req.params.id)
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid project id' })
  }

  const item = projects.getById(id)
  if (!item) {
    return res.status(404).json({ error: 'Project not found' })
  }

  return res.json({ item })
})

app.post('/projects', (req, res) => {
  const parsed = createProjectSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() })
  }

  try {
    const created = projects.create({
      name: parsed.data.name,
      slug: parsed.data.slug,
      description: parsed.data.description,
    })

    if (!created) {
      return res.status(500).json({ error: 'Failed to create project' })
    }

    return res.status(201).json({ item: created })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    if (message.includes('UNIQUE constraint failed')) {
      return res.status(409).json({ error: 'Slug already exists' })
    }

    return res.status(500).json({ error: message })
  }
})

const server = app.listen(port, () => {
  console.log(`[api] running on http://localhost:${port}`)
  console.log(`[api] sqlite db: ${dbPath}`)
})

function shutdown() {
  server.close(() => {
    sqlite.close()
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
