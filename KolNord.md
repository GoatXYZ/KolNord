# KolNord Design System

A Nordic-inspired, minimal design system built for precision and restraint. Two modes: **KolNord** (light) and **KolNord Dark**. Shared structure, typography, spacing, and component patterns — differentiated by color palette, shadow intensity, and surface treatment.

> Origin: Selected as the production design from 10 design explorations (Breathe, Soft Industrial, Editorial, Nordic Clean, Dark Ops, Editorial Redesign, Industrial Redesign, Organic Minimal, Swiss Grid, and Dashboard Brutal). Codenames: **Nordic Clean** (light) and **Nordic Night** (dark). Now implemented as a React + Vite application.

---

## 1. Design Principles

- **Restrained color.** One blue primary. Semantic colors only where meaning demands it.
- **Precision over decoration.** 4px radii, 1px borders, exact font sizes — no rounding, no softness for its own sake.
- **Quiet surfaces.** White or near-black backgrounds. Cards and panels distinguished by border, not shadow.
- **Typography carries hierarchy.** Two fonts, strict weight/size ladder. No gradients, no color-based hierarchy except for status/action.
- **Consistent interactive feedback.** Shared transition timing (`150ms`), shared focus ring pattern, shared hover escalation model.

---

## 2. Typography

### Font Stacks

| Role | Family | Fallbacks |
|------|--------|-----------|
| **Display** (headings, stat values, card titles, brand) | `Space Grotesk` | `Instrument Sans`, `sans-serif` |
| **Body** (text, labels, form controls, buttons) | `Instrument Sans` | `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif` |

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap
```

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Body base | Body | `0.875rem` (14px) | 400 | `1.7` | `-0.003em` |
| Page title | Display | `clamp(1.5rem, 2.5vw, 1.75rem)` | 600 | `1.2` | `-0.025em` |
| Card title | Display | `1rem` (16px) | 600 | `1.3` | `-0.015em` |
| Section heading | Display | `1.125rem` (18px) | 600 | — | `-0.015em` |
| Page subtitle | Body | `0.9375rem` (15px) | 400 | `1.6` | — |
| Nav link | Body | `0.8125rem` (13px) | 500 | — | — |
| Button (default) | Body | `0.8125rem` (13px) | 500 | — | — |
| Button (sm) | Body | `0.75rem` (12px) | 500 | — | — |
| Button (lg) | Body | `0.875rem` (14px) | 600 | — | — |
| Badge | Body | `0.6875rem` (11px) | 600 | `1.6` | `0.02em` |
| Label / form label | Body | `0.8125rem` (13px) | 500 | `1` | — |
| Uppercase label | Body | `0.75rem` (12px) | 500 | `1` | `0.03em` |
| Stat value | Display | `2.75rem` (44px) | 600 | `1.1` | `-0.03em` |
| Stat value (dense) | Display | `2.25rem` (36px) | 600 | `1.1` | `-0.03em` |
| Hint text | Body | `0.75rem` (12px) | 400 | `1.5` | — |
| Description text | Body | `0.8125rem` (13px) | 400 | `1.6` | — |

### Base Styles

```css
html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
  line-height: 1.2;
}
```

---

## 3. Color Tokens

### Dual Palette

| Token | KolNord (Light) | KolNord Dark | Notes |
|-------|----------------|--------------|-------|
| `--primary` | `#0078B9` | `#58a6ff` | Shifted brighter for dark-bg contrast |
| `--primary-hover` | `#006aa5` | `#79c0ff` | |
| `--primary-50` | `#eef6fb` | `#0d2137` | Tint → deep shade |
| `--primary-100` | `#d4eaf5` | `#142d44` | |
| `--primary-200` | `#a8d5eb` | — | Production-only (extended scale) |
| `--primary-300` | `#6bb8dc` | — | Production-only |
| `--primary-400` | `#339bcc` | — | Production-only |
| `--primary-500` | `#0078b9` | `#58a6ff` | Production alias for `--primary` |
| `--primary-600` | `#006aa5` | `#79c0ff` | Production alias for `--primary-hover` |
| `--primary-700` | `#004f7a` | — | Production-only |
| `--primary-800` | `#003552` | — | Production-only |
| `--primary-900` | `#001a29` | — | Production-only |
| `--ink` | `#1e293b` | `#e6edf3` | Primary text color |
| `--ink-light` | `#334155` | `#c9d1d9` | Secondary text color |
| `--muted` | `#8993a4` | `#8b949e` | Tertiary text / labels |
| `--muted-light` | `#a3adb8` | `#6e7681` | Placeholder text, disabled icons |
| `--surface` | `#ffffff` | `#161b22` | Card / panel / nav background |
| `--surface-soft` | `#f7f8fa` | `#161b22` | Soft fills, secondary button hover bg |
| `--background` | `#f7f8fa` | `#0d1117` | Page background |
| `--border` | `#e2e6ed` | `#30363d` | Primary border |
| `--border-light` | `#eef0f4` | `#21262d` | Dividers, inner separators |
| `--success` | `#1a7a3a` | `#3fb950` | Brighter in dark for readability |
| `--success-bg` | `#edf7f0` | `#0d2818` | Tint → deep shade |
| `--danger` | `#c4200a` | `#f85149` | Brighter in dark |
| `--danger-bg` | `#fef2f0` | `#3d1214` | |
| `--warning` | `#d4a017` | `#d29922` | Nearly identical |
| `--warning-bg` | `#fefce8` | `#2e2412` | |
| `--info` | `#2563eb` | — | Production-only |

### Extended Production Scale

The production Tailwind `@theme` provides a full 10-step primary scale (`primary-50` through `primary-900`). These map to the prototype `--primary` and `--primary-50`/`--primary-100` tokens and extend them with intermediate shades for utility classes like `bg-primary-50`, `text-primary-600`, etc.

---

## 4. Shadows

| Token | KolNord (Light) | KolNord Dark |
|-------|----------------|--------------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | `0 1px 3px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 2px 8px rgba(0,0,0,0.06)` | `0 2px 8px rgba(0,0,0,0.4)` |
| `--shadow-hover` | `0 2px 12px rgba(0,0,0,0.08)` | `0 2px 12px rgba(0,0,0,0.5)` |
| `--shadow-lg` | `0 4px 16px rgba(0,0,0,0.08)` | `0 4px 16px rgba(0,0,0,0.5)` |

Dark mode uses 6–12x higher alpha values because dark surfaces need stronger shadows to register visually.

---

## 5. Radius & Spacing

### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Dropdown items, inner elements |
| `--radius-md` | `4px` | Cards, buttons, inputs, nav links |
| `--radius-lg` | `6px` | Dialog panels |
| `--radius-xl` | `8px` | — Reserved |

Badge radius is a fixed `10px` (pill shape), not part of the scale.

### Content Widths

| Element | Width |
|---------|-------|
| Page max-width | `1400px` |
| Page padding | `16px` mobile, `32px` desktop (`px-4 sm:px-8`) |
| Sidebar column | `360px` |
| Main grid gap | `32px` |
| Dialog max-width | `448px` (`max-w-md`) |
| Dropdown min-width | `176px` (`min-w-44`) |

### Stat Card Grid

`grid-template-columns: repeat(4, 1fr)` at desktop, `repeat(2, 1fr)` below `800px`.

---

## 6. Theme-Specific Behaviors

These are the structural differences between light and dark that go beyond simple color token swaps.

> **Dark mode mechanism**: The production site uses a `.dark` CSS class on the root element, toggled by JavaScript. The quick-start blocks in Section 14 offer a `prefers-color-scheme` media query as an alternative approach.

### Navigation Bar

| Property | KolNord | KolNord Dark |
|----------|---------|--------------|
| Background | `var(--surface)` (solid white) | `rgba(22, 27, 34, 0.85)` with `backdrop-filter: blur(12px)` |
| Effect | Clean solid border-bottom | Glassmorphism: translucent with blur |

### Card Hover

| Property | KolNord | KolNord Dark |
|----------|---------|--------------|
| Hover shadow | `var(--shadow-sm)` | `0 0 0 1px var(--border), 0 4px 16px rgba(88,166,255,0.04)` |
| Effect | Simple lift shadow | Double-ring with subtle primary glow |

### Focus Ring

| Context | KolNord | KolNord Dark |
|---------|---------|--------------|
| Input/select/textarea focus | `0 0 0 3px rgba(0,120,185,0.08)` | `0 0 0 3px rgba(88,166,255,0.15)` |
| Error input focus | `0 0 0 3px rgba(196,32,10,0.06)` | `0 0 0 3px rgba(248,81,73,0.15)` |
| Keyboard focus-visible | `ring-2 ring-primary-300 ring-offset-2` | Same pattern, offset adapts to bg |

### Button Text Color Inversion

| Button | KolNord text | KolNord Dark text |
|--------|-------------|-------------------|
| Primary | `white` | `#0d1117` (background color) |
| Success | `white` | `#0d1117` |
| Success hover bg | `#15682f` | `#2ea043` |

### Surface Usage

| Element | KolNord | KolNord Dark |
|---------|---------|--------------|
| Form input bg | `var(--surface)` (white) | `var(--background)` (deepest dark) |
| Filter/search input bg | `var(--surface)` | `var(--background)` |
| Secondary button hover bg | `var(--surface-soft)` | `var(--surface-soft)` |
| Ghost button hover bg | `var(--surface-soft)` | `var(--surface-soft)` |
| Badge muted bg | `var(--surface-soft)` | `var(--surface-soft)` |

### Select Chevron

The SVG-encoded chevron uses the muted color as its stroke. Update the encoded `stroke` attribute:

| Theme | Chevron stroke hex (URL-encoded) |
|-------|----------------------------------|
| KolNord | `%238993a4` |
| KolNord Dark | `%238b949e` |

### Scrollbar (Dark Only)

```css
/* KolNord Dark only */
html { color-scheme: dark; }

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: var(--background); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--muted-light); }
```

---

## 7. Components

### 7.1 Button

6 variants, 4 sizes. Uses `class-variance-authority` (`cva`) in production.

**Sizes**

| Size | Height | Horizontal Padding | Font Size | Font Weight |
|------|--------|-------------------|-----------|-------------|
| `sm` | `34px` | `14px` | `0.75rem` | 500 |
| `default` | `40px` | `20px` | `0.8125rem` | 500 |
| `lg` | `46px` | `28px` | `0.875rem` | 600 |
| `icon` | `40px` x `40px` | — | — | — |

**Variants**

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| `default` (primary) | `--primary-500` | white / `#0d1117`* | `--primary-500` | `--primary-600` bg/border, `--shadow-md` |
| `secondary` | `--surface` | `--ink` | `--border` | `--muted-light` border, `--surface-soft` bg |
| `ghost` | transparent | `--muted` | transparent | `--ink` text, `--surface-soft` bg |
| `outline` | transparent | `--primary-600` | `--primary-500` | `--primary-50` bg |
| `destructive` | `--surface` | `--danger` | `--border` | `--danger-bg` bg, `--danger` border |
| `success` | `--success` | white / `#0d1117`* | `--success` | `#15682f` / `#2ea043`* bg, `--shadow-md` |

*Values after `/` are KolNord Dark overrides.

**Shared Properties** — All buttons: `border-radius: var(--radius-md)`, `transition: 150ms`, `gap: 6px`, disabled at `opacity: 0.45` + `pointer-events: none`. Focus: `ring-2 ring-primary-300 ring-offset-2`. Pill CTA variant for nav uses `border-radius: 9999px`.

**Production cva**

```ts
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-[var(--radius-md)] text-[0.8125rem] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-300)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-primary-500)] text-white border border-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] hover:border-[var(--color-primary-600)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
        secondary:
          'bg-[var(--color-surface)] text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-muted-light)] hover:bg-[var(--color-surface-soft)]',
        ghost:
          'bg-transparent text-[var(--color-muted)] border border-transparent hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)]',
        outline:
          'bg-transparent text-[var(--color-primary-600)] border border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)]',
        destructive:
          'bg-[var(--color-surface)] text-[var(--color-danger)] border border-[var(--color-border)] hover:bg-[var(--color-danger-bg)] hover:border-[var(--color-danger)]',
        success:
          'bg-[var(--color-success)] text-white border border-[var(--color-success)] hover:bg-[#15682f] hover:shadow-[var(--shadow-md)] dark:text-[#0d1117] dark:hover:bg-[#2ea043]',
      },
      size: {
        sm:      'h-[34px] px-3.5 text-xs',
        default: 'h-10 px-5',
        lg:      'h-[46px] px-7 text-sm font-semibold',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)
```

### 7.2 Badge

Pill-shaped status indicators. 5 variants.

**Shared Properties** — `border-radius: 10px`, `padding: 2px 8px`, `font-size: 0.6875rem`, `font-weight: 600`, `letter-spacing: 0.02em`, `line-height: 1.6`.

| Variant | Background | Text |
|---------|-----------|------|
| `secondary` / muted | `--surface-soft` | `--muted` |
| `default` | `--primary-50` | `--primary-600` |
| `success` | `--success-bg` | `--success` |
| `destructive` / danger | `--danger-bg` | `--danger` |
| `warning` | `--warning-bg` | `--warning` |

**Production cva**

```ts
const badgeVariants = cva(
  'inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-semibold rounded-[10px] tracking-[0.02em] whitespace-nowrap leading-relaxed',
  {
    variants: {
      variant: {
        secondary:   'bg-[var(--color-surface-soft)] text-[var(--color-muted)]',
        default:     'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]',
        success:     'bg-[var(--color-success-bg)] text-[var(--color-success)]',
        destructive: 'bg-[var(--color-danger-bg)] text-[var(--color-danger)]',
        warning:     'bg-[var(--color-warning-bg)] text-[var(--color-warning)]',
      },
    },
    defaultVariants: { variant: 'secondary' },
  },
)
```

### 7.3 Card

Compound component with 6 subcomponents. Uses `nordic-panel` utility for hover behavior.

| Subcomponent | Styles |
|-------------|--------|
| `Card` | `nordic-panel`, `bg-surface`, `border 1px --border`, `rounded-[--radius-md]`, `transition-shadow duration-150`, hover `--shadow-sm` (light) or primary glow (dark) |
| `CardHeader` | `padding: 24px 24px 0` (`px-6 pt-6 pb-0`) |
| `CardTitle` | `font-display`, `1rem`, `font-semibold`, `text-ink`, `tracking: -0.015em`, `leading: 1.3` |
| `CardDescription` | `mt-1`, `0.8125rem`, `text-muted`, `leading: 1.6` |
| `CardContent` | `padding: 20px 24px` (`px-6 py-5`) |
| `CardFooter` | `border-t --border`, `padding: 16px 24px` (`px-6 py-4`) |

### 7.4 Stat Card

A specialized card with a left accent stripe and large display number.

```
+-------------------------+
|> STAT LABEL             |   <- 0.75rem, uppercase, --muted
|> 42                     |   <- 2.75rem, font-display, --ink
|> Detail text here       |   <- 0.8125rem, --muted
+-------------------------+
 ^ 3px accent stripe
```

- **Padding**: `24px` default (`p-6 pl-[27px]`), `20px` dense (`p-5 pl-6`).
- **Accent stripe**: `position: absolute`, `left: 0`, `width: 3px`, `border-radius: 0 2px 2px 0`.
- **Accent colors**: `--primary-500`, `--success`, `--warning`, `--danger`.
- **Hover**: `--shadow-hover`, `translateY(-1px)`.
- **Dense mode**: `dense` prop reduces padding and stat value font size to `2.25rem`.

### 7.5 Input

```css
height: 44px;              /* h-11 */
padding: 0 14px;           /* px-3.5 */
font-size: 0.875rem;       /* text-sm */
background: white;         /* light: --surface, dark: --background */
border: 1px solid var(--border);
border-radius: var(--radius-md);
transition: border-color 150ms, box-shadow 150ms;

/* Placeholder */
color: var(--muted-light);

/* Focus */
border-color: var(--primary);
box-shadow: 0 0 0 3px rgba(0,120,185,0.08);     /* light */
box-shadow: 0 0 0 3px rgba(88,166,255,0.15);     /* dark */

/* Error */
border-color: var(--danger);
box-shadow: 0 0 0 3px rgba(196,32,10,0.06);      /* light */
box-shadow: 0 0 0 3px rgba(248,81,73,0.15);      /* dark */
```

### 7.6 Select

CSS styling pattern for native `<select>` elements. Same dimensions and focus pattern as Input, plus:

```css
appearance: none;
padding-right: 36px;

/* Custom chevron (URL-encoded SVG) */
background-image: url("data:image/svg+xml,...chevron-down...");
background-repeat: no-repeat;
background-position: right 12px center;
background-size: 16px;
```

> **Note**: The `@radix-ui/react-select` dependency is available for building an accessible Select component, but no React component has been scaffolded yet.

### 7.7 Textarea

Same border/focus pattern as Input, plus:

```css
min-height: 100px;
padding: 12px 14px;
line-height: 1.6;
resize: vertical;
```

### 7.8 Dialog

Modal overlay built on `@radix-ui/react-dialog`. Compound component with 10 exports.

| Subcomponent | Styles |
|-------------|--------|
| `Dialog` | Root primitive (no styles) |
| `DialogTrigger` | Trigger primitive (no styles) |
| `DialogOverlay` | `fixed inset-0 z-50`, `bg-black/40`, animate-in/out fade |
| `DialogContent` | `fixed` centered, `max-w-[448px]`, `bg-surface`, `border --border`, `rounded --radius-lg`, `p-6`, `shadow --shadow-lg`, animate-in/out fade + zoom (95%) |
| `DialogClose` | `absolute right-4 top-4`, X icon (`h-4 w-4`), `opacity-70 hover:opacity-100`, `focus:ring-2 ring-primary-300` |
| `DialogHeader` | `flex flex-col gap-1.5` |
| `DialogFooter` | `mt-6 flex justify-end gap-2` |
| `DialogTitle` | `font-display`, `text-lg`, `font-semibold`, `text-ink` |
| `DialogDescription` | `mt-2`, `text-sm`, `text-muted`, `leading-[1.6]` |
| `DialogPortal` | Portal primitive (no styles) |

**Behavior**: Radix handles focus trapping, Escape to close, and focus return automatically. Overlay and content use `data-[state=open/closed]` for entrance/exit animations.

### 7.9 Label

```css
font-size: 0.8125rem;
font-weight: 500;
color: var(--ink);
line-height: 1;
/* Peer disabled state */
peer-disabled: cursor-not-allowed, opacity-70;
```

Implemented with `@radix-ui/react-label` in production.

### 7.10 Dropdown Menu

Built on `@radix-ui/react-dropdown-menu`. Compound component with 15 exports.

| Subcomponent | Styles |
|-------------|--------|
| `DropdownMenu` | Root primitive |
| `DropdownMenuTrigger` | Trigger primitive (user-styled) |
| `DropdownMenuContent` | `z-50 min-w-44`, `rounded --radius-md`, `border --border`, `bg-surface`, `p-1`, `shadow --shadow-md`, animate-in/out fade + zoom (95%), `sideOffset: 4` |
| `DropdownMenuItem` | `px-3 py-1.5`, `text-[0.8125rem]`, `rounded --radius-sm`, `text-ink`, `focus:bg-primary-50 focus:text-primary-600`, disabled at `opacity-50` |
| `DropdownMenuCheckboxItem` | Same as Item with `pl-8` for indicator. Check icon via `ItemIndicator` |
| `DropdownMenuRadioItem` | Same as CheckboxItem. Circle icon via `ItemIndicator` |
| `DropdownMenuLabel` | `px-3 py-1.5`, `text-xs`, `font-semibold`, `uppercase`, `tracking-wide`, `text-muted` |
| `DropdownMenuSeparator` | `h-px`, `bg-border-light`, `-mx-1 my-1` |
| `DropdownMenuShortcut` | `ml-auto`, `text-xs`, `tracking-widest`, `text-muted-light` |
| `DropdownMenuSubTrigger` | Same as Item, ChevronRight icon (`h-3.5 w-3.5`) |
| `DropdownMenuSubContent` | Same as Content |
| `DropdownMenuGroup` | Group primitive |
| `DropdownMenuPortal` | Portal primitive |
| `DropdownMenuSub` | Sub-menu primitive |
| `DropdownMenuRadioGroup` | Radio group primitive |

**Behavior**: Radix handles keyboard navigation, focus management, sub-menu positioning, and portal rendering.

### 7.11 Switch

Toggle switch built on `@radix-ui/react-switch`.

| Element | Style |
|---------|-------|
| **Root** | `h-5 w-9`, `rounded-full`, `border-2 border-transparent`, `transition 150ms`, unchecked `bg-border`, checked `bg-primary-500`, `focus-visible:ring-2 ring-primary-300 ring-offset-2`, disabled `opacity-50` |
| **Thumb** | `h-4 w-4`, `rounded-full`, `bg-white`, `shadow-sm`, unchecked `translate-x-0`, checked `translate-x-4`, `transition 150ms` |

### 7.12 Progress

Linear progress bar built on `@radix-ui/react-progress`.

| Element | Style |
|---------|-------|
| **Root** | `h-1.5 w-full`, `rounded-full`, `bg-border-light`, `overflow-hidden` |
| **Indicator** | `h-full`, `bg-primary-500`, `transition-transform 300ms ease-out`, progress via `translateX(-${100 - value}%)` |

### 7.13 Avatar

Circular avatar with image and fallback. Built on `@radix-ui/react-avatar`.

| Subcomponent | Style |
|-------------|--------|
| `Avatar` | `h-9 w-9`, `rounded-full`, `overflow-hidden`, `shrink-0` |
| `AvatarImage` | `aspect-square`, `h-full w-full`, `object-cover` |
| `AvatarFallback` | `rounded-full`, `bg-primary-50`, `text-primary-600`, `text-xs`, `font-semibold`, centered |

### 7.14 Separator

Accessible divider built on `@radix-ui/react-separator`.

| Orientation | Style |
|------------|-------|
| `horizontal` (default) | `h-px w-full`, `bg-border-light` |
| `vertical` | `h-full w-px`, `bg-border-light` |

Default is `decorative={true}`.

### 7.15 Tabs

Tab navigation built on `@radix-ui/react-tabs`.

| Subcomponent | Style |
|-------------|--------|
| `Tabs` | Root primitive |
| `TabsList` | `inline-flex items-center gap-0.5`, `border-b border-border`, `w-full` |
| `TabsTrigger` | `px-4 py-2.5`, `text-[0.8125rem]`, `font-medium`, `text-muted`, `border-b-2 border-transparent`, `-mb-px`, `transition 150ms`, hover `text-ink`, active `text-primary-500 border-primary-500`, `focus-visible:ring-2 ring-primary-300`, disabled `opacity-50` |
| `TabsContent` | `pt-6`, `focus-visible:ring-2 ring-primary-300` |

---

## 8. Layout

### App Shell

```
+------------------------------------------+
| NavBar (sticky, 56px, border-bottom)     |
+------------------------------------------+
|  +------------------------------------+  |
|  | max-w-1400px, px-4 py-8 sm:px-8   |  |
|  |                                    |  |
|  |  Header (title + subtitle + acts)  |  |
|  |  --------------------------------  |  |
|  |  Content                           |  |
|  |                                    |  |
|  +------------------------------------+  |
+------------------------------------------+
```

- Skip-to-content link: `sr-only`, becomes visible on focus, `bg-primary-500 text-white`.
- Main content wraps in `page-enter` animation (fade-up 250ms).

### Main Grid (Operations Layout)

```
+-------------------------+------------+
| Main Column (1fr)       | Sidebar    |
|                         | (360px)    |
| Card                    | Card       |
| Card                    | Card       |
| Card                    |            |
+-------------------------+------------+

@media (max-width: 1080px): single column
```

### Page Header

```
+--------------------------------------+
| Title (page-title)         [Actions] |
| Subtitle (optional)                  |
+--------------------------------------+

margin-bottom: 24px (mb-6)
padding-bottom: 16px (pb-4)
```

---

## 9. Navigation

### Structure

```
+--------------------------------------------------------+
| Brand           Section Links           [Toggle] [CTA] |
+--------------------------------------------------------+
```

### Navbar

| Property | Style |
|----------|-------|
| Height | `h-14` (56px) |
| Position | `sticky top-0 z-40` |
| Border | `border-b border-border` |
| Light bg | `var(--surface)` (solid) |
| Dark bg | `rgba(22,27,34,0.85)` + `backdrop-filter: blur(12px)` (glassmorphism) |
| Max width | `1400px`, `px-4 sm:px-8` |

### Brand Lockup

```css
font-family: var(--font-display);   /* Space Grotesk */
font-size: 1rem;
font-weight: 600;
letter-spacing: -0.02em;
color: var(--ink);
/* Accent word in --primary-500 */
```

### Nav Link States

| State | Text | Background |
|-------|------|-----------|
| Default | `--muted` | transparent |
| Hover | `--ink` | `--surface-soft` |

Links: `px-3 py-1.5`, `rounded --radius-md`, `text-[0.8125rem]`, `font-medium`, `transition 150ms`. Hidden below `md` breakpoint.

### CTA Button

Pill-shaped primary button using the `Button` component with `rounded-full` override. Contains an icon (`h-3.5 w-3.5`, `strokeWidth: 2.5`) and label. Hidden below `sm` breakpoint.

### Theme Toggle

Ghost icon button (`variant="ghost" size="icon"`) with Sun/Moon icons (`h-4 w-4`).

---

## 10. Utility Classes

Production utility classes (defined in `@layer utilities` in `globals.css`):

### `nordic-panel`

Card-like container with hover shadow.

```css
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-md);
transition: box-shadow 0.2s;
/* :hover → shadow-sm */
```

### `accent-stripe`

Left accent bar on cards/panels (3px primary stripe via `::before`).

```css
position: relative;
overflow: hidden;
/* ::before → absolute, left: 0, top: 0, bottom: 0, width: 3px, bg: --primary-500, border-radius: 0 2px 2px 0 */
```

### `label-mono`

Uppercase micro-label for section headers.

```css
font-family: var(--font-body);
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.03em;
text-transform: uppercase;
color: var(--muted);
line-height: 1;
```

### `page-title`

Responsive title with fluid sizing.

```css
font-family: var(--font-display);
font-size: clamp(1.5rem, 2.5vw, 1.75rem);
font-weight: 600;
color: var(--ink);
letter-spacing: -0.025em;
line-height: 1.2;
text-wrap: balance;
```

### `nordic-divider`

Thin horizontal separator.

```css
border: none;
height: 1px;
background: var(--border-light);
```

### `page-enter`

Fade-up entrance animation.

```css
animation: fade-up 250ms ease-out;

@keyframes fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### `loading-pulse`

Gentle opacity pulse for loading states.

```css
animation: gentle-pulse 1.5s ease-in-out infinite;

@keyframes gentle-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}
```

Both animations respect `prefers-reduced-motion: reduce` (disabled with `animation: none !important`).

---

## 11. Print & Accessibility

### Print

```css
.no-print  { /* Hidden in @media print via display: none !important */ }
.print-only { display: none; /* Shown in @media print via display: block !important */ }

@media print {
  body { background: white; }
}
```

### Accessibility

- **Skip link**: `<a href="#main-content">Skip to main content</a>` — `sr-only`, visible on `:focus`, styled as primary-500 pill.
- **Focus-visible ring**: `ring-2 ring-primary-300 ring-offset-2` (via Tailwind `focus-visible:` modifiers). On form controls: `box-shadow: 0 0 0 3px` with theme-appropriate primary alpha.
- **Reduced motion**: Both `page-enter` and `loading-pulse` animations are disabled under `prefers-reduced-motion: reduce`.
- **Dialog**: Built on Radix UI — handles `role="dialog"`, `aria-modal`, focus trapping, and focus return automatically.
- **Color contrast**: All text meets WCAG AA in both themes. Semantic colors chosen for sufficient contrast against their respective tinted backgrounds.

---

## 12. Icons

**Library**: `lucide-react` (MIT, consistent 24x24 viewBox, `stroke-width: 2`).

| Context | Size | Stroke Width |
|---------|------|-------------|
| Nav link chevron | `h-3.5 w-3.5` (14px) | default (2) |
| CTA button icon | `h-3.5 w-3.5` (14px) | `2.5` |
| Mobile menu icon | `h-4 w-4` (16px) | default |
| Action lane icons | `18px` | `1.75` |
| Action arrows | `16px` | `2` |
| Filter button icon | `14px` | `2` |

---

## 13. Tooling Reference

### Core (Required)

| Tool | Role |
|------|------|
| **React 19** | UI framework. Component model with concurrent features. |
| **TypeScript** | Strict type-checking across components, tokens, and props. |
| **Vite 7** | Dev server and production bundler with native ESM and HMR. Uses `@tailwindcss/vite` plugin. |
| **Tailwind CSS v4** | Utility-first CSS. Configured via `@theme {}` in `globals.css` (no `tailwind.config.js`). |
| **pnpm** | Fast, disk-efficient package manager and workspace runner. |
| **Radix UI** | Accessible, unstyled primitives for Dialog, Dropdown Menu, Switch, Tabs, Progress, Avatar, Separator, Select, Tooltip, Label, and Slot. |
| **shadcn/ui** | Component scaffolding. Style: `new-york`. Base color: `slate`. CSS variables: enabled. Components copied into `src/components/ui/`. |

### Extra (Optional)

> Add based on product scope. KolNord can ship without these.

| Tool | Role |
|------|------|
| **class-variance-authority** (`cva`) | Variant matrix helper for component APIs (Button, Badge, etc.). |
| **tailwind-merge** | Resolves Tailwind utility collisions; typically paired with `clsx` in `cn()`. |
| **clsx** | Conditional class string builder for ergonomic class composition. |
| **lucide-react** | Icon set with a consistent visual language and tree-shakeable imports. |
| **Turborepo** | Monorepo task orchestration for `dev`, `build`, `lint`, and `typecheck` across workspace packages. |
| **ESLint** | Static analysis with TypeScript + React Hooks safety rules. |
| **Prettier** or **Biome** | Deterministic formatting and lower review noise. |
| **lint-staged** + **Husky** | Pre-commit quality gates for staged files only. |
| **React Router** | Client-side routing with nested layouts and URL-driven state. |
| **cmdk** | Command palette for keyboard-driven search and navigation. |
| **Vitest** | Fast unit/integration testing with Vite-native config. |
| **@testing-library/react** + **jsdom** | User-centric component behavior tests. |
| **Playwright** | End-to-end testing for critical flows and regressions. |
| **axe-core** / **@axe-core/playwright** | Automated accessibility checks in component and E2E runs. |
| **Storybook** | Isolated component documentation and manual QA surface. |
| **Chromatic** or **Loki** | Visual regression testing for UI drift detection. |
| **Express v5** | Reference API service for dogfooding product flows against the design system. |
| **Zod** + OpenAPI generation (or **ts-rest**) | Shared runtime validation and contract-safe frontend/backend typing. |
| **Drizzle ORM** | Type-safe ORM layer for schema-first SQLite access. |
| **drizzle-kit** | Migration and schema diff tooling for Drizzle projects. |
| **SQLite** (`better-sqlite3`) | Embedded database for zero-server local persistence. |
| **Electron** | Desktop application wrapper with OS-level APIs. |

### `cn()` Implementation

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### shadcn Configuration (`components.json`)

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "hooks": "@/hooks"
  }
}
```

---

## 14. Quick-Start Token Block

Drop this into a new project's CSS to bootstrap either theme:

> **Token naming**: The quick-start blocks below use short names (`--primary`, `--ink`, `--surface`, etc.) for standalone/vanilla CSS usage. The production Tailwind `@theme` configuration in `globals.css` uses the `--color-` prefix (`--color-primary-500`, `--color-ink`, `--color-surface`, etc.) because Tailwind v4 requires this prefix for automatic utility class generation (e.g., `bg-primary-500`, `text-ink`). Both map to the same values.

### KolNord (Light)

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --font-display: 'Space Grotesk', 'Instrument Sans', sans-serif;
  --font-body: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --primary: #0078B9;
  --primary-hover: #006aa5;
  --primary-50: #eef6fb;
  --primary-100: #d4eaf5;
  --ink: #1e293b;
  --ink-light: #334155;
  --muted: #8993a4;
  --muted-light: #a3adb8;
  --surface: #ffffff;
  --surface-soft: #f7f8fa;
  --background: #f7f8fa;
  --border: #e2e6ed;
  --border-light: #eef0f4;
  --success: #1a7a3a;
  --success-bg: #edf7f0;
  --danger: #c4200a;
  --danger-bg: #fef2f0;
  --warning: #d4a017;
  --warning-bg: #fefce8;

  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-hover: 0 2px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.08);
}
```

### KolNord Dark

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  color-scheme: dark;

  --font-display: 'Space Grotesk', 'Instrument Sans', sans-serif;
  --font-body: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --primary: #58a6ff;
  --primary-hover: #79c0ff;
  --primary-50: #0d2137;
  --primary-100: #142d44;
  --ink: #e6edf3;
  --ink-light: #c9d1d9;
  --muted: #8b949e;
  --muted-light: #6e7681;
  --surface: #161b22;
  --surface-soft: #161b22;
  --background: #0d1117;
  --border: #30363d;
  --border-light: #21262d;
  --success: #3fb950;
  --success-bg: #0d2818;
  --danger: #f85149;
  --danger-bg: #3d1214;
  --warning: #d29922;
  --warning-bg: #2e2412;

  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.4);
  --shadow-hover: 0 2px 12px rgba(0,0,0,0.5);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.5);
}
```

### Both Themes via `prefers-color-scheme`

> **Note**: The production site uses class-based dark mode (`.dark` on root) toggled by JavaScript. This `prefers-color-scheme` approach is provided as an alternative for projects that prefer automatic OS-level theme switching.

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --font-display: 'Space Grotesk', 'Instrument Sans', sans-serif;
  --font-body: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;

  /* Light (default) */
  --primary: #0078B9;
  --primary-hover: #006aa5;
  --primary-50: #eef6fb;
  --primary-100: #d4eaf5;
  --ink: #1e293b;
  --ink-light: #334155;
  --muted: #8993a4;
  --muted-light: #a3adb8;
  --surface: #ffffff;
  --surface-soft: #f7f8fa;
  --background: #f7f8fa;
  --border: #e2e6ed;
  --border-light: #eef0f4;
  --success: #1a7a3a;
  --success-bg: #edf7f0;
  --danger: #c4200a;
  --danger-bg: #fef2f0;
  --warning: #d4a017;
  --warning-bg: #fefce8;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-hover: 0 2px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --primary: #58a6ff;
    --primary-hover: #79c0ff;
    --primary-50: #0d2137;
    --primary-100: #142d44;
    --ink: #e6edf3;
    --ink-light: #c9d1d9;
    --muted: #8b949e;
    --muted-light: #6e7681;
    --surface: #161b22;
    --surface-soft: #161b22;
    --background: #0d1117;
    --border: #30363d;
    --border-light: #21262d;
    --success: #3fb950;
    --success-bg: #0d2818;
    --danger: #f85149;
    --danger-bg: #3d1214;
    --warning: #d29922;
    --warning-bg: #2e2412;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
    --shadow-md: 0 2px 8px rgba(0,0,0,0.4);
    --shadow-hover: 0 2px 12px rgba(0,0,0,0.5);
    --shadow-lg: 0 4px 16px rgba(0,0,0,0.5);
  }
}
```

---

## 15. Origins

KolNord was originally prototyped as two self-contained HTML files (Nordic Clean for light, Nordic Night for dark). The design system is now implemented as a React + Vite application with the component library in `src/components/ui/`.
