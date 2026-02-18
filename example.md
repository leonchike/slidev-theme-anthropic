---
theme: ./
title: Theme Preview
highlighter: shiki
drawings:
  persist: false
transition: fade
---

<div class="cover-slide">
<div>

# Example Presentation Title

</div>
<div class="brand">Your Team</div>
</div>

---

<div class="section-slide olive">
<div class="chapter-pill">Chapter 1</div>

# First Section

</div>

---

<div class="body-header">
<div class="chapter-pill">Chapter 1</div>

# First Section

</div>

<div class="two-col">
<div>

## Left column heading

This is body text in the left column. The theme uses Inter for body text and Source Serif 4 for headings.

- **Bold lead** -- followed by description text
- Another bullet point here
- A third item for good measure

## A sub-section

More text can go here. Keep it concise -- this is a presentation, not a document.

</div>
<div>

## Right column heading

Code blocks use a warm beige background:

```
event: session_started
data: { session_id, name }

event: tool_call_complete
data: { tool: "example_tool",
        success: true,
        duration_ms: 1234 }
```

Tables are minimal:

| Column A | Column B |
|---|---|
| **Row one** | Description text |
| **Row two** | More description |
| **Row three** | Even more text |

</div>
</div>

---

<div class="section-slide terracotta">
<div class="chapter-pill">Chapter 2</div>

# Second Section

</div>

---

<div class="body-header">
<div class="chapter-pill">Chapter 2</div>

# Second Section

</div>

<div class="two-col">
<div>

## Architecture diagram

```
  ┌────────────────────────┐
  │   Frontend             │
  │   React + Tailwind     │
  └───────────┬────────────┘
              │  REST / SSE
              ▼
  ┌────────────────────────┐
  │   Backend              │
  │   FastAPI              │
  └───────────┬────────────┘
              │
              ▼
  ┌────────────────────────┐
  │   Database             │
  │   PostgreSQL           │
  └────────────────────────┘
```

</div>
<div>

## Key details

Inline code like `api/v1/endpoint` uses the same beige background.

**Component names** are bolded. Regular text stays at normal weight.

Links look like [this example](#) with an underline.

### A smaller heading

Use h3 sparingly for sub-sections within a column.

</div>
</div>

---

<div class="section-slide clay">
<div class="chapter-pill">Chapter 3</div>

# Third Section

</div>

---

<div class="section-slide oat">
<div class="chapter-pill">Chapter 4</div>

# Fourth Section

</div>
