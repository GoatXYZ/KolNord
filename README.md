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

# Production build
pnpm build

# Preview production build locally
pnpm preview
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
