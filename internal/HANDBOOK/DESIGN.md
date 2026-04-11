# Chithu Vibes — Design System Guide
**Brand:** Chithu Vibes
**Stack:** React + Vite + Tailwind CSS v4  
**Token prefix:** `cv-` (mandatory — all custom tokens must use this prefix)

---

## Setup

All tokens live inside `@theme {}` in your global CSS file. Tailwind v4 picks them up automatically — no config file needed.

```css
@import "tailwindcss";

@theme {
  /* tokens go here */
}
```

> **Rule:** Never use hardcoded hex values like `bg-[#C9A84C]` in JSX. Always use the token class like `bg-cv-gold`. This keeps the brand consistent and refactorable.

---

## Colors

### Token Definitions

```css
@theme {
  --color-cv-white:    #F5F3F7;
  --color-cv-mauve:    #9B84B2;
  --color-cv-plum:     #3A2740;
  --color-cv-charcoal: #4F4F4F;
  --color-cv-gold:     #C9A84C;
  --color-cv-purple:   #3D3566;
  --color-cv-muted:    #999999;
  --color-cv-black:    #1A1A1A;
  --color-cv-soft:     #E8E4EE;
  --color-cv-border:   #D9D3E0;
}
```

### Usage

| Token | Class | Use |
|---|---|---|
| `--color-cv-white` | `bg-cv-white`, `text-cv-white` | Page background |
| `--color-cv-gold` | `text-cv-gold`, `bg-cv-gold`, `border-cv-gold` | Brand accent, labels, dividers |
| `--color-cv-purple` | `text-cv-purple` | Primary headings (H1) |
| `--color-cv-mauve` | `text-cv-mauve`, `bg-cv-mauve` | Secondary accents |
| `--color-cv-plum` | `bg-cv-plum`, `text-cv-plum` | Dark backgrounds, footers |
| `--color-cv-muted` | `text-cv-muted` | Subtext, captions |
| `--color-cv-charcoal` | `text-cv-charcoal` | Body copy |
| `--color-cv-black` | `bg-cv-black` | Maximum contrast backgrounds |
| `--color-cv-soft` | `bg-cv-soft` | Subtle section backgrounds |
| `--color-cv-border` | `border-cv-border` | Dividers, card borders |

```jsx
<section className="bg-cv-white">
  <p className="text-cv-gold">A Master's Legacy</p>
  <h1 className="text-cv-purple">The Soul of Tamil Calligraphy.</h1>
  <h2 className="text-cv-gold">The Precision of the Laser.</h2>
  <p className="text-cv-muted">Founded in 2023...</p>
  <div className="border-t border-cv-border" />
</section>
```

---

## Spacing

Applies to: `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`, `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr`, `gap`, `w`, `h`, `inset`, `top`, `left`, etc.

### Token Definitions

```css
@theme {
  --spacing-cv-px:      1px;
  --spacing-cv-pxsm:    2px;
  --spacing-cv-xs:      4px;
  --spacing-cv-sm:      8px;
  --spacing-cv-md:      16px;
  --spacing-cv-lg:      24px;
  --spacing-cv-xl:      32px;
  --spacing-cv-2xl:     48px;
  --spacing-cv-3xl:     64px;
  --spacing-cv-4xl:     80px;
  --spacing-cv-5xl:     96px;
  --spacing-cv-section: 120px;
  --spacing-cv-hero:    160px;
}
```

### Usage

| Token | Example classes | Use |
|---|---|---|
| `cv-px` | `h-cv-px`, `border-cv-px` | 1px lines, hairlines |
| `cv-pxsm` | `gap-cv-pxsm` | 2px micro gaps |
| `cv-xs` | `p-cv-xs`, `mb-cv-xs` | Tight nudges |
| `cv-sm` | `p-cv-sm`, `gap-cv-sm` | Inside components |
| `cv-md` | `px-cv-md`, `py-cv-md` | Standard padding |
| `cv-lg` | `mb-cv-lg`, `gap-cv-lg` | Between elements |
| `cv-xl` | `my-cv-xl` | Between sections within a block |
| `cv-2xl` | `py-cv-2xl` | Card/block padding |
| `cv-section` | `py-cv-section` | Full-width page sections |
| `cv-hero` | `py-cv-hero` | Hero/landing areas |

```jsx
<section className="py-cv-section px-cv-lg">
  <p className="mb-cv-sm tracking-cv-widest text-cv-gold">Label</p>
  <h1 className="mb-cv-pxsm text-cv-purple">Heading</h1>
  <div className="w-16 h-cv-px bg-cv-gold mb-cv-md" />
  <p className="text-cv-muted mb-cv-lg">Subtext here.</p>
</section>
```

---

## Typography

### Font Family

```css
@theme {
  --font-cv-serif: "Cormorant Garamond", serif;
  --font-cv-sans:  "Jost", sans-serif;
}
```

| Token | Class | Use |
|---|---|---|
| `cv-serif` | `font-cv-serif` | Headings, hero text, editorial |
| `cv-sans` | `font-cv-sans` | Labels, body copy, UI text |

### Font Size

```css
@theme {
  --text-cv-label: 11px;
  --text-cv-xs:    12px;
  --text-cv-sm:    14px;
  --text-cv-base:  16px;
  --text-cv-md:    18px;
  --text-cv-lg:    20px;
  --text-cv-xl:    24px;
  --text-cv-2xl:   32px;
  --text-cv-3xl:   44px;
  --text-cv-4xl:   60px;
  --text-cv-5xl:   72px;
  --text-cv-hero:  90px;
}
```

### Font Weight

```css
@theme {
  --font-weight-cv-light:    300;
  --font-weight-cv-regular:  400;
  --font-weight-cv-medium:   500;
  --font-weight-cv-semibold: 600;
  --font-weight-cv-bold:     700;
}
```

Classes: `font-cv-light`, `font-cv-regular`, `font-cv-medium`, `font-cv-semibold`, `font-cv-bold`

### Line Height

```css
@theme {
  --leading-cv-tight:   1.05;
  --leading-cv-snug:    1.2;
  --leading-cv-normal:  1.5;
  --leading-cv-relaxed: 1.7;
}
```

### Letter Spacing

```css
@theme {
  --tracking-cv-tight:   -0.01em;
  --tracking-cv-normal:   0em;
  --tracking-cv-wide:     0.1em;
  --tracking-cv-wider:    0.2em;
  --tracking-cv-widest:   0.3em;
}
```

### Typography Combos

```jsx
{/* Hero heading */}
<h1 className="font-cv-serif text-cv-hero leading-cv-tight tracking-cv-tight text-cv-purple italic font-cv-regular">
  The Soul of Tamil Calligraphy.
</h1>

{/* Gold accent heading */}
<h2 className="font-cv-serif text-cv-hero leading-cv-tight text-cv-gold font-cv-semibold">
  The Precision of the Laser.
</h2>

{/* Uppercase label */}
<p className="font-cv-sans text-cv-label tracking-cv-widest uppercase text-cv-gold font-cv-medium">
  A Master's Legacy
</p>

{/* Body copy */}
<p className="font-cv-sans text-cv-sm leading-cv-relaxed text-cv-muted font-cv-light">
  Where ancient scripts meet modern radiance.
</p>
```

---

## Border

### Radius

```css
@theme {
  --radius-cv-none: 0px;
  --radius-cv-xs:   2px;
  --radius-cv-sm:   4px;
  --radius-cv-md:   8px;
  --radius-cv-lg:   12px;
  --radius-cv-xl:   16px;
  --radius-cv-full: 9999px;
}
```

Classes: `rounded-cv-none`, `rounded-cv-xs`, `rounded-cv-sm`, `rounded-cv-md`, `rounded-cv-lg`, `rounded-cv-xl`, `rounded-cv-full`

### Border Width

```css
@theme {
  --border-cv-thin:  1px;
  --border-cv-base:  1.5px;
  --border-cv-md:    2px;
  --border-cv-thick: 3px;
}
```

```jsx
<div className="border border-cv-thin rounded-cv-md border-cv-border" />
<div className="border-2 border-cv-md rounded-cv-full border-cv-gold" />
```

---

## Shadow

```css
@theme {
  --shadow-cv-sm:   0 1px 4px 0 rgba(61, 53, 102, 0.08);
  --shadow-cv-md:   0 4px 16px 0 rgba(61, 53, 102, 0.12);
  --shadow-cv-lg:   0 8px 32px 0 rgba(61, 53, 102, 0.16);
  --shadow-cv-gold: 0 4px 24px 0 rgba(201, 168, 76, 0.20);
}
```

Classes: `shadow-cv-sm`, `shadow-cv-md`, `shadow-cv-lg`, `shadow-cv-gold`

```jsx
<div className="shadow-cv-gold rounded-cv-md bg-cv-white p-cv-lg">
  Gold glow card
</div>
```

---

## Opacity

```css
@theme {
  --opacity-cv-ghost:  0.04;
  --opacity-cv-subtle: 0.12;
  --opacity-cv-muted:  0.40;
  --opacity-cv-soft:   0.64;
  --opacity-cv-full:   1;
}
```

Classes: `opacity-cv-ghost`, `opacity-cv-subtle`, `opacity-cv-muted`, `opacity-cv-soft`, `opacity-cv-full`

---

## Transition Duration

```css
@theme {
  --duration-cv-fast:  150ms;
  --duration-cv-base:  250ms;
  --duration-cv-slow:  400ms;
  --duration-cv-xslow: 600ms;
}
```

```jsx
<button className="transition duration-cv-base hover:text-cv-gold">
  Hover me
</button>
```

---

## Z-Index

```css
@theme {
  --z-cv-below:   -1;
  --z-cv-base:     0;
  --z-cv-raised:   10;
  --z-cv-overlay:  100;
  --z-cv-modal:    200;
  --z-cv-toast:    300;
  --z-cv-top:      9999;
}
```

Classes: `z-cv-below`, `z-cv-base`, `z-cv-raised`, `z-cv-overlay`, `z-cv-modal`, `z-cv-toast`, `z-cv-top`

---

## Complete @theme Block

Paste this into your global CSS:

```css
@theme {

  /* Colors */
  --color-cv-white:    #F5F3F7;
  --color-cv-mauve:    #9B84B2;
  --color-cv-plum:     #3A2740;
  --color-cv-charcoal: #4F4F4F;
  --color-cv-gold:     #C9A84C;
  --color-cv-purple:   #3D3566;
  --color-cv-muted:    #999999;
  --color-cv-black:    #1A1A1A;
  --color-cv-soft:     #E8E4EE;
  --color-cv-border:   #D9D3E0;

  /* Spacing */
  --spacing-cv-px:      1px;
  --spacing-cv-pxsm:    2px;
  --spacing-cv-xs:      4px;
  --spacing-cv-sm:      8px;
  --spacing-cv-md:      16px;
  --spacing-cv-lg:      24px;
  --spacing-cv-xl:      32px;
  --spacing-cv-2xl:     48px;
  --spacing-cv-3xl:     64px;
  --spacing-cv-4xl:     80px;
  --spacing-cv-5xl:     96px;
  --spacing-cv-section: 120px;
  --spacing-cv-hero:    160px;

  /* Font Family */
  --font-cv-serif: "Cormorant Garamond", serif;
  --font-cv-sans:  "Jost", sans-serif;

  /* Font Size */
  --text-cv-label: 11px;
  --text-cv-xs:    12px;
  --text-cv-sm:    14px;
  --text-cv-base:  16px;
  --text-cv-md:    18px;
  --text-cv-lg:    20px;
  --text-cv-xl:    24px;
  --text-cv-2xl:   32px;
  --text-cv-3xl:   44px;
  --text-cv-4xl:   60px;
  --text-cv-5xl:   72px;
  --text-cv-hero:  90px;

  /* Font Weight */
  --font-weight-cv-light:    300;
  --font-weight-cv-regular:  400;
  --font-weight-cv-medium:   500;
  --font-weight-cv-semibold: 600;
  --font-weight-cv-bold:     700;

  /* Line Height */
  --leading-cv-tight:   1.05;
  --leading-cv-snug:    1.2;
  --leading-cv-normal:  1.5;
  --leading-cv-relaxed: 1.7;

  /* Letter Spacing */
  --tracking-cv-tight:  -0.01em;
  --tracking-cv-normal:  0em;
  --tracking-cv-wide:    0.1em;
  --tracking-cv-wider:   0.2em;
  --tracking-cv-widest:  0.3em;

  /* Border Radius */
  --radius-cv-none: 0px;
  --radius-cv-xs:   2px;
  --radius-cv-sm:   4px;
  --radius-cv-md:   8px;
  --radius-cv-lg:   12px;
  --radius-cv-xl:   16px;
  --radius-cv-full: 9999px;

  /* Border Width */
  --border-cv-thin:  1px;
  --border-cv-base:  1.5px;
  --border-cv-md:    2px;
  --border-cv-thick: 3px;

  /* Shadow */
  --shadow-cv-sm:   0 1px 4px 0 rgba(61, 53, 102, 0.08);
  --shadow-cv-md:   0 4px 16px 0 rgba(61, 53, 102, 0.12);
  --shadow-cv-lg:   0 8px 32px 0 rgba(61, 53, 102, 0.16);
  --shadow-cv-gold: 0 4px 24px 0 rgba(201, 168, 76, 0.20);

  /* Opacity */
  --opacity-cv-ghost:  0.04;
  --opacity-cv-subtle: 0.12;
  --opacity-cv-muted:  0.40;
  --opacity-cv-soft:   0.64;
  --opacity-cv-full:   1;

  /* Duration */
  --duration-cv-fast:  150ms;
  --duration-cv-base:  250ms;
  --duration-cv-slow:  400ms;
  --duration-cv-xslow: 600ms;

  /* Z-Index */
  --z-cv-below:   -1;
  --z-cv-base:     0;
  --z-cv-raised:   10;
  --z-cv-overlay:  100;
  --z-cv-modal:    200;
  --z-cv-toast:    300;
  --z-cv-top:      9999;

}
```

---

## Rules for Developers

1. **Always use `cv-` tokens** — never hardcode hex values or arbitrary Tailwind values like `bg-[#C9A84C]`
2. **`--color-*` → prefix drops** — `--color-cv-gold` becomes `bg-cv-gold`, `text-cv-gold` (not `bg-color-cv-gold`)
3. **`--spacing-*` applies everywhere** — same token works for `p-`, `m-`, `gap-`, `w-`, `h-`
4. **Font pair rule** — serif (`font-cv-serif`) for headings only, sans (`font-cv-sans`) for everything else
5. **Gold = brand accent** — use `cv-gold` for labels, dividers, highlights, CTAs
6. **Purple = editorial weight** — use `cv-purple` for primary hero headings only
7. **Muted = supporting text** — use `cv-muted` for captions, subtext, descriptive copy