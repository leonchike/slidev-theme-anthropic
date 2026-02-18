# slidev-theme-anthropic

Anthropic-inspired theme for [Slidev](https://sli.dev) -- warm terracotta covers, muted earth-tone section dividers, clean editorial body slides.

## Install

```bash
npm install github:leonchike/slidev-theme-anthropic
```

## Usage

Set the theme in your `slides.md` frontmatter:

```yaml
---
theme: anthropic
---
```

## Slide types

The theme provides three slide types via CSS classes.

### Cover slide

```markdown
<div class="cover-slide">
<div>

# Your Title

</div>
<div class="brand">Team Name</div>
</div>
```

### Section slide (transition)

```markdown
<div class="section-slide olive">
<div class="chapter-pill">Chapter Label</div>

# Section Title

</div>
```

Color classes: `olive`, `terracotta`, `clay`, `oat`

### Body slide (content)

```markdown
<div class="body-header">
<div class="chapter-pill">Chapter Label</div>

# Page Title

</div>

<div class="two-col">
<div>

## Left Column

Content here.

</div>
<div>

## Right Column

Content here.

</div>
</div>
```

## Slide sequencing

Each topic follows the pattern: **Section Slide** (colored) then **Body Slide(s)** (white).

```
1. Cover Slide
2. Section Slide (olive)      → topic intro
3. Body Slide                 → topic content
4. Section Slide (terracotta) → next topic
5. Body Slide                 → next topic content
...
```

## Development

```bash
npm install
npm run dev    # Preview example.md
```

## Design reference

See [DESIGN_SKILL.md](./DESIGN_SKILL.md) for detailed LLM-consumable instructions on applying this theme.
