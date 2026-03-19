# 🏭 KolNord

**Nordic-inspired design system for Kolene applications and websites.**

A living design documentation site with interactive component showcase, dual-theme support, and a shared component library used across Kolene internal tools.

🔗 **[Live Demo](https://goatxyz.github.io/KolNord/)**

---

## ✨ Features

### 🎨 Design Language

- 🌗 **Dual theme** — KolNord Light and KolNord Dark
- 🌈 **Color palette** — Restrained, semantic color system with explorer
- 🔤 **Typography** — Space Grotesk (display) + Instrument Sans (body)
- 📐 **Spacing & layout** — Consistent utility system

### 🧩 Component Library

15+ UI primitives built on Radix UI:

- Avatar, Badge, Button, Card, Dialog, Dropdown Menu
- Input, Label, Progress, Separator, Switch
- Tabs, Tooltip, and more

### 📖 Documentation Sections

- 🚀 **Getting Started** — Installation and usage guide
- 🎨 **Colors** — Interactive palette explorer
- 🔤 **Typography** — Type scale showcase
- 🧩 **Components** — Live component demos
- 🎯 **Icons** — Icon library reference
- 📐 **Layout** — Grid and spacing utilities
- ♿ **Accessibility** — Guidelines and best practices
- 🗺️ **Roadmap** — Planned features
- 🍳 **Recipes** — Common UI patterns

---

## 🏗️ Architecture

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── sections/                # 12 documentation sections
│   │   ├── ColorsSection.tsx
│   │   ├── TypographySection.tsx
│   │   ├── ComponentsSection.tsx
│   │   ├── IconsSection.tsx
│   │   ├── LayoutSection.tsx
│   │   ├── AccessibilitySection.tsx
│   │   └── ...
│   └── ui/                      # 15+ Radix-based primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...
├── lib/
│   └── utils.ts                 # clsx + tailwind-merge helpers
└── styles/
    └── globals.css              # Design tokens + theme variables

apps/
└── api/
    └── src/server.ts            # SQLite baseline API

packages/
└── data-sqlite/
    └── src/
        ├── client.ts
        ├── projects.ts
        └── schema.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 24+
- **pnpm** 10+

### Install & Dev

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

Static output goes to `docs/` (configured for GitHub Pages).

### Preview

```bash
pnpm preview
```

---

## 📦 Tech Stack

| Layer            | Technology                 |
| ---------------- | -------------------------- |
| ⚛️ Framework     | React 19                   |
| 🔷 Language      | TypeScript ~5.9            |
| ⚡ Build         | Vite 7                     |
| 🎨 Styling       | Tailwind CSS v4            |
| 🧩 Components    | Radix UI primitives        |
| 🗄️ Database      | SQLite (better-sqlite3)    |
| ⚙️ Backend       | Express 5 + Drizzle ORM   |
| 🏗️ Monorepo     | Turborepo 2                |
| 📦 Package Mgr   | pnpm 10                    |

---

## 🚢 Deployment

GitHub Pages via GitHub Actions:

```bash
pnpm build
# Output: docs/ → GitHub Pages
# Base path: /KolNord/
```

Enable in repo Settings → Pages → GitHub Actions.

---

## 📄 License

Proprietary — [Kolene Corporation](https://kolene.com). Internal use only.

---

<p align="center">
  🏭 <a href="https://kolene.com">Kolene Corporation</a> — Internal Tool
</p>
