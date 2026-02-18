# Anthropic-Style Slidev Presentation Theme

You are creating slides using Slidev with a custom theme inspired by Anthropic's presentation design language. This theme features warm terracotta cover slides, muted earth-tone section dividers, clean white body pages with thin dark borders, light-weight serif headings, sans-serif body text, and warm beige code blocks. Follow these rules exactly when building or modifying slides.

## Setup

The presentation uses `theme: none` in frontmatter. All visual styling comes from `style.css`. Do not use any other Slidev theme.

```yaml
---
theme: none
title: Your Title Here
highlighter: shiki
drawings:
  persist: false
transition: fade
---
```

When this theme is installed as an npm package (`slidev-theme-anthropic`), use `theme: anthropic` instead of `theme: none`, and the `style.css` is loaded automatically.

## Slide Types

There are exactly three slide types. Each uses specific CSS classes applied via `<div>` wrappers inside the markdown. Do not use Slidev's built-in `layout:` frontmatter -- it will conflict with these custom classes.

---

### 1. Cover Slide

Full-bleed terracotta (`#c97d5d`) background filling the entire viewport. Large light-weight serif title. Brand name anchored to bottom-left. Used only as the first slide in a deck.

```markdown
<div class="cover-slide">
<div>

# Your Presentation Title

</div>
<div class="brand">Your Team Name</div>
</div>
```

**Rules:**
- Title should be short -- 3 to 8 words maximum
- Do not add subtitles, descriptions, or bullet points to the cover slide
- The brand text is a short team or org identifier (e.g. "RRI Engineering")
- The cover div uses `position: absolute; inset: 0` to fill the slide -- do not override this

---

### 2. Section Slide (Transition)

Full-bleed solid muted-color background filling the entire viewport. A bordered pill label ("chapter pill") identifies the section. A large serif title is anchored to the bottom-left. Use these to introduce each major section of the deck.

```markdown
<div class="section-slide olive">
<div class="chapter-pill">Chapter Label</div>

# Section Title

</div>
```

**Available color classes:** `olive` (`#8a8f65`), `terracotta` (`#c97d5d`), `clay` (`#b8a08a`), `oat` (`#d4cfc0`)

**Rules:**
- Always include a `chapter-pill` div with a short label (1-2 words)
- Title should be short and descriptive (2-6 words)
- Do not add body text, lists, or code blocks to section slides
- Vary the color class across sections for visual rhythm -- do not repeat the same color consecutively
- Content is anchored to bottom-left by design; do not change the positioning
- The section div uses `position: absolute; inset: 0` to fill the slide -- do not override this

---

### 3. Body Slide (Content)

White (`#ffffff`) background with generous padding. Starts with a chapter header (pill + large serif h1), followed by a two-column grid for content. This is where all substantive content lives.

```markdown
<div class="body-header">
<div class="chapter-pill">Chapter Label</div>

# Page Title

</div>

<div class="two-col">
<div>

## Left Column Heading

Body text goes here.

- Bullet point one
- Bullet point two

</div>
<div>

## Right Column Heading

More content here. Tables, code blocks, lists.

</div>
</div>
```

**Rules:**
- Always start with a `body-header` div containing the same chapter pill text as the preceding section slide
- The h1 in body-header should match or closely echo the section slide title
- Always use the `two-col` wrapper for body content -- do not use single-column layouts
- Each column should have its own h2 subheading
- Keep text concise -- this is a presentation, not a document

---

## Slide Sequencing Pattern

Every major topic follows this two-slide pattern:

```
Section Slide (colored, full-bleed) → Body Slide(s) (white, content)
```

A typical deck:

```
1. Cover Slide                        (terracotta)
2. Section Slide                      (olive)       → introduces first topic
3. Body Slide                         (white)       → first topic content
4. Section Slide                      (terracotta)  → introduces second topic
5. Body Slide                         (white)       → second topic content
6. Section Slide                      (clay)        → introduces third topic
7. Body Slide                         (white)       → third topic content
8. Section Slide                      (oat)         → introduces fourth topic
9. Body Slide                         (white)       → fourth topic content
```

You can have multiple body slides for a single section if the content requires it. Keep the same chapter pill label across all body slides in a section.

---

## Typography Rules

| Element | Font | Weight | Size | Usage |
|---|---|---|---|---|
| **h1** | Source Serif 4 (serif) | 400 (light) | 2.4-3.2rem | Cover title, section title, body-header title only |
| **h2** | Inter (sans-serif) | 700 (bold) | 1.2rem | Column subheadings inside `two-col` |
| **h3** | Inter (sans-serif) | 700 (bold) | 1rem | Sub-sections within a column (use sparingly) |
| **Body** | Inter (sans-serif) | 400 (regular) | 0.88rem | Paragraphs, list items |
| **Bold** | Inter (sans-serif) | 700 (bold) | inherit | Key terms, component names |
| **Inline code** | JetBrains Mono | 500 | 0.82em | Tool names, API paths, config values |

**Critical rules:**
- Never use h1 inside the `two-col` body area -- only in cover-slide, section-slide, and body-header
- Keep body text to 1-3 short paragraphs per column
- Use `**bold**` for emphasis, especially for introducing named components or tools

---

## Code Blocks

Code blocks render with a warm beige background (`#edeadf`) and dark charcoal text (`#1a1a19`). All Shiki syntax highlighting colors are overridden to this single dark color for a clean, uniform look.

**Best practices:**
- Keep blocks to 15 lines or fewer
- Use for architecture diagrams (ASCII art), API schemas, SSE event formats, or short code snippets
- Do not use for long source code listings -- summarize instead
- Do not attempt to use syntax highlighting colors -- the theme forces all tokens to dark charcoal

```
event: tool_call_complete
data: { tool: "wealthx_search",
        success: true,
        duration_ms: 1234 }
```

---

## Tables

Tables are minimal: transparent background, bold bottom border on header, thin `#e0dfd8` separators between rows, no alternating row colors.

```markdown
| Column A | Column B |
|---|---|
| **Row label** | Description text |
| **Row label** | Description text |
```

Keep tables to 8 rows or fewer. If you need more, split across slides.

---

## Lists

Unordered lists use standard filled disc bullets in dark charcoal. Do not use custom bullet characters or emoji.

```markdown
- **Bold lead** -- followed by description text
- Another item
- A third item
```

---

## Color Palette Reference

| Token | Hex | Usage |
|---|---|---|
| `--a-white` | `#ffffff` | Body slide background |
| `--a-cream` | `#faf9f5` | Not used on slides (available for extensions) |
| `--a-charcoal` | `#191918` | Primary text, dark borders, slide frame |
| `--a-text` | `#1a1a19` | Body text, code block text |
| `--a-text-secondary` | `#6b6b69` | Page numbers, captions |
| `--a-text-light` | `#8a8a87` | Tertiary text (available for extensions) |
| `--a-border` | `#e0dfd8` | Table row borders |
| `--a-border-dark` | `#2a2a28` | Slide frame border |
| `--a-terracotta` | `#c97d5d` | Cover slide background, section accent |
| `--a-olive` | `#8a8f65` | Section accent |
| `--a-clay` | `#b8a08a` | Section accent |
| `--a-oat` | `#d4cfc0` | Section accent |
| `--a-code-bg` | `#edeadf` | Code block and inline code background |
| `--a-code-text` | `#1a1a19` | Code block text (matches body text) |

---

## CSS Architecture Notes

These details are important if you need to debug layout issues:

- **Full-bleed slides**: Cover and section slides use `position: absolute; inset: 0` to fill the entire slide viewport. The parent `.slidev-layout` has its padding zeroed via `.slidev-layout:has(.cover-slide)` and `.slidev-layout:has(.section-slide)`.
- **Slide frame**: Every slide gets a thin dark border via `box-shadow: inset 0 0 0 1px` on `.slidev-page > div`.
- **Shiki override**: Syntax highlighting token colors are force-overridden to `--a-code-text` using `.slidev-layout pre .shiki span { color: var(--a-code-text) !important; }`.
- **Font loading**: Google Fonts are imported in `style.css` for Source Serif 4, Inter, and JetBrains Mono.

---

## Things to Avoid

- **Do not** use Slidev's built-in layout frontmatter (`layout: cover`, `layout: section`, `layout: two-cols`, etc.). Use the custom div classes described above.
- **Do not** use dark backgrounds on code blocks. The theme uses warm beige.
- **Do not** add emojis, icons, or decorative SVG elements.
- **Do not** use single-column body layouts. Always use the `two-col` grid.
- **Do not** put more than ~120 words per column. Add another body slide if needed.
- **Do not** use h1 anywhere except inside `cover-slide`, `section-slide`, and `body-header` divs.
- **Do not** apply custom font colors or inline color styles. Let the theme handle all colors.
- **Do not** manually number slides. Slidev handles page numbers automatically.
- **Do not** use `---` as a visual horizontal rule inside a slide. In Slidev, `---` on its own line is a slide separator.
- **Do not** override `position`, `inset`, or `padding` on `.cover-slide` or `.section-slide` divs.

---

## File Structure

When used directly (not as an npm theme):

```
presentation/
├── slides.md          # All slide content
├── style.css          # Theme styles (do not modify)
├── package.json       # Slidev CLI + theme dependencies
└── DESIGN_SKILL.md    # This file
```

**Commands:**
- `npm run dev` -- Start dev server with hot reload
- `npm run build` -- Build static SPA to `dist/`
- `npm run export` -- Export slides to PDF
