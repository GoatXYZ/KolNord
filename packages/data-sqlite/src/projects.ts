import { desc, eq } from 'drizzle-orm'

import type { KolnordDatabase } from './client.js'
import { projects } from './schema.js'

export type CreateProjectInput = {
  name: string
  slug: string
  description?: string | null
}

export function createProjectRepository(db: KolnordDatabase) {
  return {
    list() {
      return db.select().from(projects).orderBy(desc(projects.id)).all()
    },

    getById(id: number) {
      return db.select().from(projects).where(eq(projects.id, id)).get() ?? null
    },

    create(input: CreateProjectInput) {
      const created = db
        .insert(projects)
        .values({
          name: input.name,
          slug: input.slug,
          description: input.description ?? null,
        })
        .returning()
        .get()

      return created ?? null
    },
  }
}
