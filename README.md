# KolNord Design System

A Nordic-inspired, minimal design system built for precision and restraint.
Two modes: **KolNord** (light) and **KolNord Dark**. Shared structure, typography, spacing, and component patterns — differentiated by color palette, shadow intensity, and surface treatment.

## Stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | ~5.9 |
| Vite | 7 |
| Tailwind CSS | v4 |
| Radix UI primitives | latest |
| lucide-react | latest |
| class-variance-authority | latest |
| Turborepo | 2 |
| Express | 5 |
| Drizzle ORM | latest |
| better-sqlite3 | latest |
| pnpm | 10 |
| Node (via fnm) | 24 LTS |

## Getting Started

```bash
# Install Node via fnm
fnm install 24
fnm use 24

# Install dependencies
pnpm install

# Dev server
pnpm dev

# Run site + API together (Turbo)
pnpm dev:all

# API only
pnpm dev:api

# Production build
pnpm build

# Build all workspace packages
pnpm build:all

# Preview production build locally
pnpm preview
```

## SQLite API Baseline

`apps/api` provides a reusable REST baseline backed by SQLite (`better-sqlite3`) with `drizzle-orm`.

```bash
# Start API (default: http://localhost:4000)
pnpm dev:api

# Health check
curl http://localhost:4000/health
```

## GitHub Pages Deployment

If the published site shows a blank page, GitHub is usually serving the repository source (`index.html` with `/src/main.tsx`) instead of the Vite build output.

Configure the repo once in **Settings -> Pages**:

1. Set **Source** to **GitHub Actions**
2. Keep the included workflow at `.github/workflows/deploy.yml`
3. Push to `main` and wait for the deploy workflow to finish

For local verification, use `pnpm build && pnpm preview` (or open `dist/index.html` directly; relative asset paths are enabled).

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── sections/
│   │   ├── ColorsSection.tsx
│   │   ├── TypographySection.tsx
│   │   ├── ComponentsSection.tsx
│   │   └── TokensSection.tsx
│   └── ui/
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── progress.tsx
│       ├── separator.tsx
│       ├── stat-card.tsx
│       ├── switch.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css     ← KolNord tokens + Tailwind @theme

apps/
└── api/
    └── src/
        └── server.ts   ← Express API with SQLite baseline

packages/
└── data-sqlite/
    └── src/
        ├── client.ts
        ├── projects.ts
        └── schema.ts   ← shared SQLite + data access layer
```

## Design Principles

- **Restrained color.** One blue primary. Semantic colors only where meaning demands it.
- **Precision over decoration.** 4px radii, 1px borders, exact font sizes.
- **Quiet surfaces.** White or near-black backgrounds. Cards distinguished by border, not shadow.
- **Typography carries hierarchy.** Space Grotesk (display) + Instrument Sans (body).
- **Consistent interactive feedback.** 150ms transitions, shared focus ring, shared hover escalation.

## Themes

Theme is persisted in `localStorage` and respects `prefers-color-scheme` on first visit.

Toggle via the sun/moon button in the navbar.

---

> Origin: Selected from 10 design explorations. Codenames: **Nordic Clean** (light) and **Nordic Night** (dark).
