---
name: etsuwithtea Portfolio
description: A playable bento-grid portfolio for a developer who designs — electric ultramarine on black, oversized grotesque type, tactile click-to-expand cards.
colors:
  primary: "#2512F5"
  accent: "#FFF176"
  secondary: "#1E1E1E"
  canvas: "#111111"
  card-dark: "#0A0A0A"
  surface: "#FFFFFF"
  base: "#000000"
  primary-glow: "#60A5FA"
  primary-light: "#BFDBFE"
  ink-strong: "#1F2937"
  ink-body-dark: "#D1D5DB"
  ink-muted-dark: "#9CA3AF"
  ink-muted-light: "#4B5563"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.2vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.3em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  bento: "2.5rem"
  card: "1.5rem"
  tile: "2rem"
  pill: "9999px"
spacing:
  grid-gap: "1.5rem"
  card-inset: "2rem"
  card-inset-lg: "3rem"
components:
  bento-card-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.bento}"
    padding: "{spacing.card-inset}"
  bento-card-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.base}"
    rounded: "{rounded.bento}"
    padding: "{spacing.card-inset}"
  bento-card-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.bento}"
    padding: "{spacing.card-inset}"
  bento-card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.base}"
    rounded: "{rounded.bento}"
    padding: "{spacing.card-inset}"
  filter-pill:
    backgroundColor: "#0000000D"
    textColor: "#00000066"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.25rem"
  filter-pill-active:
    backgroundColor: "{colors.base}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.25rem"
  tech-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.base}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  nav-node-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.base}"
    rounded: "{rounded.card}"
    size: "48px"
---

# Design System: etsuwithtea Portfolio

## 1. Overview

**Creative North Star: "The Playable Portfolio"**

This is not a page you read; it is an interface you operate. The whole system is a dark
canvas holding a grid of saturated, solid-color tiles, and every tile is a control: click
one and it expands in place, pushing its neighbors aside with a shared-layout animation,
revealing the content within. The playfulness is structural, not cosmetic. It comes from
the fact that the surface *responds* to you, the way a well-made physical object does, not
from decoration piled on top. That distinction is the spine of the whole system.

The personality is **playful, energetic, and human**, carried by three materials: oversized
Bricolage Grotesque headlines set at near-black weight and tight tracking, a small set of
committed, high-saturation card colors against pure black, and a constant film-grain texture
that keeps the flat planes from feeling clinical. Depth is deliberately understated: the
tiles sit flat at rest and only lift, glow, or shadow in response to interaction. The energy
lives in color and motion, not in gloss.

What this system explicitly rejects: **overdesigned, gimmicky decoration.** No effect earns
its place by being impressive; it earns its place by clarifying or delighting in service of
the work. Motion that gets in the reader's way, flourish with no substance, decoration for
its own sake — that is the anti-reference, and it gets cut. The line to hold is *playful,
never gimmicky.* When a choice can't decide which side it's on, restraint wins.

**Key Characteristics:**
- A dark stage (pure black `#000000`) holding a bento grid of committed-color tiles.
- One signature primitive — the tactile, click-to-expand `BentoCard` — reused as the whole architecture.
- Oversized grotesque display type as the loudest voice; color second; motion third.
- Flat surfaces; depth appears only on interaction (hover-lift, glow halo, grain).
- A balanced dev-and-designer identity, shown through range, not asserted in copy.

## 2. Colors

A committed dark palette: a black stage, four solid-color tile "skins," and an electric
blue that is unmistakably the brand.

### Primary
- **Electric Ultramarine** (`#2512F5`): The brand. An intense, near blue-violet that owns
  the Hero tile and reads as a serious artist's blue, not a corporate SaaS blue. It is the
  single loudest color on the page; everything else defers to it.
- **Glow Blue** (`#60A5FA`): The interactive accent. A lighter sky-blue used for the
  timeline progress track, active-node halos, hover role accents (job titles, links), and
  focus rings. Where Ultramarine is the identity, Glow Blue is the *signal that something is
  live.*

### Secondary
- **Pale Lemon** (`#FFF176`): The warm counterweight. A soft, friendly yellow that owns the
  Contact tile, balancing the cool blues with a single point of human warmth. Always paired
  with pure-black ink for maximum legibility.

### Neutral
- **Black** (`#000000`): The body stage. The grid floats on it.
- **Near-Black** (`#0A0A0A`) / **Deep Ink** (`#111111`) / **Charcoal** (`#1E1E1E`): The dark
  tile skins — Skills, Project Detail, and About respectively. Three steps of near-black give
  tonal separation between dark tiles without introducing a new hue.
- **White** (`#FFFFFF`): The Work tile skin and the inverse — also the color of "active /
  selected" states (active nav node, selected filter pill).
- **Body on dark** (`#D1D5DB`) / **Muted on dark** (`#9CA3AF`): Greyed text on dark tiles.
- **Strong on light** (`#1F2937`) / **Muted on light** (`#4B5563`): Text on white surfaces.

### Named Rules
**The One Loud Blue Rule.** Electric Ultramarine (`#2512F5`) appears as a *fill*, never as a
hairline or a tiny accent. It carries the Hero and nothing competes with it at that
saturation. Glow Blue (`#60A5FA`) is the only blue allowed to act as a thin accent or glow;
keep the two roles distinct.

**The Black-Ink-on-Lemon Rule.** Text on the Pale Lemon tile is always pure black
(`#000000`). Never grey text on the yellow — it washes out instantly and fails contrast.

## 3. Typography

**Display Font:** Bricolage Grotesque (with `ui-sans-serif, system-ui` fallback)
**Body Font:** Instrument Sans (with `ui-sans-serif, system-ui` fallback)
**Label / Mono Font:** system monospace (`ui-monospace, Menlo`) — dates and metadata only

**Character:** Bricolage Grotesque is a wide-axis, slightly mischievous grotesque; at black
weight with tight tracking it reads as confident and a little playful, exactly the brand's
voice. Instrument Sans underneath it is clean and quiet, doing the legibility work so the
display type can shout. The pairing contrasts on the expressive-vs-neutral axis, not on
two-similar-sans, which keeps it from feeling generic.

### Hierarchy
- **Display** (900, `clamp(2.5rem, 7vw, 6rem)`, line-height 0.9, tracking -0.05em): Hero and
  section statements ("Specialized in…", "Selected Works", "Connect."). Set in black weight,
  tight, with `text-wrap: balance`. A single-word statement (e.g. "Connect.") may scale past
  the headline ceiling as a deliberate full-bleed moment — that oversized variant is a tool,
  not the default.
- **Headline** (800, `clamp(1.75rem, 3vw, 2.25rem)`, line-height 0.95): Collapsed card titles
  ("Learn more about me", "Projects").
- **Title** (700, `clamp(1.25rem, 2vw, 1.5rem)`, line-height 1.1): Sub-headings, names,
  project titles inside detail views.
- **Body** (400, `clamp(1rem, 1.2vw, 1.25rem)`, line-height 1.6): Bios, project descriptions,
  process copy. Cap measure at 65–75ch; on dark tiles use `#D1D5DB`, never a fainter grey.
- **Label** (700, `0.625rem`, tracking 0.3em, UPPERCASE): Kicker labels and metadata tags
  ("Get in touch", "Tech Stack", category chips). Short phrases only, ≤4 words.
- **Mono** (400, `0.75rem`): Dates, periods, and the footer line only. The one place
  monospace is allowed; it is metadata texture, not a "technical" costume.

### Named Rules
**The Loud-Display Rule.** Headlines are the loudest element on any tile — black weight,
tight tracking, set big. Hierarchy comes from *scale and weight contrast*, not from color
shifts or underlines. If a heading feels timid, it's too small or too light, not
under-decorated.

## 4. Elevation

Surfaces are **flat by default; light is the depth material.** Every tile is a solid plane
of color sitting flat on the black stage. There is no resting shadow vocabulary and no
ambient layering. Depth appears only as a *response to interaction*: a soft drop shadow when
a card is hovered, a white or blue glow halo around the active nav node and live elements,
and a constant, near-invisible film grain (3% opacity noise) over the whole page that gives
the flat color a physical, printed quality. The floating timeline nav is the one persistent
piece of elevation, lifted off the stage with a deep, soft shadow and a glass blur because
it floats above the content rather than living in the grid.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 20px 50px rgba(0,0,0,0.3)`): Appears on hover of an
  interactive tile. The tile also scales to 0.98 — it presses *in*, then the shadow implies
  it floated up to meet the cursor.
- **Floating nav** (`box-shadow: 0 24px 80px -20px rgba(0,0,0,0.8)`): The persistent lift on
  the glass timeline sidebar. Deep and soft, signalling "above everything."
- **Active-node glow** (`box-shadow: 0 0 25px rgba(255,255,255,0.2)`): A white halo around the
  currently-active nav node. Status light, not a drop shadow.
- **Pill shadow** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)`): The slight lift on white
  tech-stack pills so they read above the blue Hero fill.

### Named Rules
**The Flat-At-Rest Rule.** Nothing carries a shadow until it is touched, active, or floating
above the grid. A tile with a resting shadow is wrong; depth is feedback, not decoration.

**The Grain Rule.** The 3% film-grain overlay is non-negotiable and global. It is what keeps
flat saturated color from looking like a default Tailwind block. Never remove it to "clean
things up."

## 5. Components

### The BentoCard (signature component)
The entire architecture is built from one primitive, reused with different color skins.
- **Shape:** Generously rounded (`2.5rem` / 40px) — friendly, almost soft.
- **Skins:** `primary` (Ultramarine + white), `accent` (Lemon + black), `secondary`
  (Charcoal + white), `surface` (White + black). The color *is* the card's identity.
- **Behavior:** Tactile and playful. `whileHover` scales to **0.98** and `whileTap` to
  **0.95** — the card presses inward like a physical button. Click toggles an expand: the
  card grows to span the grid and reveals its detail content via a Framer Motion shared
  `layout` transition.
- **Focus:** `focus-visible` ring in Glow Blue at 30% with a 4px offset against black. Every
  card is keyboard-operable (Enter / Space), `tabIndex={0}`.

### Buttons & Icon Affordances
- **Shape:** Circular (`9999px`) icon buttons; pill text buttons.
- **Primary icon button:** White circle, black icon, `group-hover:scale-110`. Used for the
  Info / Close (X) toggle on tiles.
- **Ghost / on-dark:** Translucent white fill (`rgba(255,255,255,0.1)`) with a matching thin
  border; on hover the border and text shift to Glow Blue.

### Chips & Pills
- **Filter pill (category):** Pill shape, uppercase `label` type. Inactive: faint
  black-on-white fill (`#0000000D` / 40% black text). Active: solid black fill, white text,
  scaled to 1.05. Used for the Works category filter.
- **Tech-stack pill:** Solid white fill, black bold label, brand-colored icon, slight shadow.
  Lives in the auto-scrolling marquee on the Hero.
- **Detail chip (glass):** Translucent white fill (`rgba(255,255,255,0.05)`) with a thin
  border and backdrop blur; a tiny uppercase label over a value. Used for Age / Status /
  Interests on the About tile.

### Project Tile
- **Corner Style:** `2rem` (32px) radius, slightly tighter than a BentoCard.
- **Background:** The project cover image, full-bleed; scales to 1.1 on hover.
- **Overlay:** A bottom-up black gradient (`from-black/80`) reveals on hover with the
  category, title, and a white "View Project" pill rising into place.
- **Resting tag:** A small glass category tag pinned top-right.

### Navigation (TimelineNav)
- **Style:** A floating glass rail (desktop, left) / slide-out drawer (mobile). Near-black at
  40% opacity, `backdrop-blur-xl`, `2.5rem` radius, deep floating shadow, dotted-grid texture.
- **Timeline metaphor:** A vertical line connects the section nodes; an animated gradient
  track (Glow Blue → Pale Lemon) fills from top to the active node, springing into place.
- **Nodes:** `1rem`-radius squares. Active: white fill, black icon, white glow + a small
  blue-glow indicator pip. Inactive: near-black fill, muted icon, hover lifts to scale 1.05.
- **Mobile:** A circular FAB bottom-left toggles the drawer; the closed icon is itself a tiny
  timeline glyph (dot · line · dot).

### Inputs / Fields
There are no text inputs in the current system. Contact is copy-to-clipboard / `mailto:`
action tiles (translucent black fill on Lemon, with a Copy / ArrowUpRight affordance and a
transient "Copied" confirmation), not a form. If a form is added later, follow the ghost
treatment: translucent fill, thin border, Glow-Blue focus ring.

## 6. Do's and Don'ts

### Do:
- **Do** keep depth as feedback: flat at rest, shadow/glow only on hover, active, or float
  (`The Flat-At-Rest Rule`).
- **Do** keep the global 3% film grain on every screen (`The Grain Rule`); it's what makes
  flat color feel made, not defaulted.
- **Do** let one Electric Ultramarine fill (`#2512F5`) dominate and keep Glow Blue (`#60A5FA`)
  as the only thin/glow blue (`The One Loud Blue Rule`).
- **Do** set black text on the Pale Lemon tile, always (`The Black-Ink-on-Lemon Rule`).
- **Do** drive hierarchy with scale + weight contrast in Bricolage Grotesque, not with extra
  color or ornament (`The Loud-Display Rule`).
- **Do** keep `whileTap`/`whileHover` press feedback on anything clickable — the tactility is
  the brand's "playable" promise.
- **Do** keep body text on dark tiles at `#D1D5DB` or brighter, and verify 4.5:1; bump toward
  white before going fainter.
- **Do** give every animation a `prefers-reduced-motion: reduce` fallback (crossfade or
  instant) — the marquee, the continuously rotating Hero shapes, and layout transitions all
  currently lack one.

### Don't:
- **Don't** add overdesigned, gimmicky decoration. No effect for its own sake; if a flourish
  doesn't clarify or delight in service of the work, cut it. *Playful, never gimmicky.*
- **Don't** stack a tiny uppercase tracked kicker (`0.3em`+ caps label) above *every* section.
  It's already used in several places; treat it as an occasional accent, not default
  scaffolding.
- **Don't** give tiles a resting shadow or ambient glow; depth that isn't a response to
  interaction is wrong here.
- **Don't** use grey or low-opacity text on the Lemon or Ultramarine fills — it washes out and
  fails contrast. Use black, white, or a transparency of the foreground color.
- **Don't** introduce a fourth display typeface or a second sans. Bricolage + Instrument +
  system mono is the cap.
- **Don't** let oversized headlines overflow their tile on tablet/mobile — test the real copy
  at every breakpoint and reduce the clamp before it clips.
- **Don't** use `background-clip: text` gradient headings, glassmorphism beyond the one
  floating nav, or `border-left` colored stripes. None of these belong in this system.
