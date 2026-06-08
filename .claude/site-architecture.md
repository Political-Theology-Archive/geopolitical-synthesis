# Site Architecture — Technical Reference

## Site 1 — geopolitical-synthesis-site (Alvid Scriptorium)

**Local path**: `C:\Users\aleenay\geopolitical-synthesis-site\`
**URL**: `https://alvidscriptorium.com`
**Git remote**: `github-pta:Political-Theology-Archive/geopolitical-synthesis.git` (SSH)
**Branch**: `main`
**Platform**: GitHub Pages + Jekyll

### Key Files
```
/CLAUDE.md                    ← this project memory system
/.claude/                     ← all context documentation
/research/index.html          ← main corpus catalog (47 papers)
/sitemap.xml                  ← XML sitemap
/research/[slug]/index.html   ← individual paper pages
/_config.yml                  ← Jekyll config
/assets/css/                  ← stylesheets
```

### Layout Standard
- **NEW pages**: `layout: page`
- **OLDER pages (15 still on)**: `layout: default` — do not migrate unless explicitly asked
- Front matter: `last_modified_at: YYYY-MM-DD`

### JSON-LD Schema Types Used
- `ScholarlyArticle` — individual research pages
- `CollectionPage` — `/research/index.html`
- `BreadcrumbList` — every page

### CSS Classes (research pages)
- `.pta-page-hero` — hero section
- `.pta-page-h1` — main title
- `.pta-page-subtitle` — subtitle
- `.pta-content-wrap` — content wrapper
- `.pta-analysis`, `.pta-evidence`, `.pta-fade` — content blocks
- `.pta-analysis-label`, `.pta-evidence-label` — block labels (monospace)
- `.pta-page-nav` — bottom navigation
- `.mono` — monospace utility

### CSS Classes (catalog entries in research/index.html)
- `.pta-evidence.pta-fade` — paper card
- `.pta-evidence-label.mono` — series/category label
- Paper titles: `<a href="...">` (NOT `<span>`) — all 14 previously-span titles now fixed

---

## Site 2 — sacredcivilization-site (Dargah Ghazi Kot)

**Local path**: `C:\Users\aleenay\sacredcivilization-site\`
**URL**: `https://dargah-ghazikot.alvidscriptorium.com`
**Git remote**: `https://github.com/sacredcivilization/sacredcivilization.github.io.git` (HTTPS)
**Branch**: `main`
**Platform**: GitHub Pages + Jekyll

### Key Files
```
/shifts/index.html            ← Wing I / Kulliyyat I
/linguistics/index.html       ← Wing II / Kulliyyat II
/working-papers/index.html    ← Working Papers (links to main site)
```

### Label System (FIXED — do not revert)
- Outer: `AKADEMIYA DARGAH GHAZI KOT · KULLIYYAT I` (not SCRA-2026)
- Status: `STATUS: ARCHIVING IN PROGRESS` (no SCRA-2026 suffix)

### SSL
- GitHub Pages "Enforce HTTPS" still needs to be enabled in repo settings → Pages

---

## Site 3 — sacred-sorrow-site

**URL**: `https://sorrow.alvidscriptorium.com`
**Register**: Grief, testimony, witness. Separate aesthetic entirely.

---

## Sitemap Structure (geopolitical-synthesis-site)

File: `/sitemap.xml`
Priority scale:
- `1.0` — Homepage
- `0.90` — Highest-priority research pages (Furqan Criterion, etc.)
- `0.85` — Major hubs (Ba'alist Capture, al-mizan)
- `0.82` — Major WP standalone pages
- `0.80` — Important WPs
- `0.78` — Secondary WPs
- `0.75` — Sub-study pages

Current total URLs: ~100+ entries (was missing 6, now fixed)
**Duplicate removed**: `/research/al-mizan-haq-batil/` (was listed twice — fixed 2026-06-08)

---

## Git Commit Workflow

### geopolitical-synthesis-site
```powershell
cd C:\Users\aleenay\geopolitical-synthesis-site
git add [files]
git commit -m "Commit message"
git push origin main
# Remote: github-pta:Political-Theology-Archive/geopolitical-synthesis.git
```

### sacredcivilization-site
```powershell
cd C:\Users\aleenay\sacredcivilization-site
git add [files]
git commit -m "Commit message"
git push origin main
# Remote: https://github.com/sacredcivilization/sacredcivilization.github.io.git
```

---

## Research Page Template Structure

Every new research page at `/research/[slug]/index.html`:

```yaml
---
layout: page
last_modified_at: YYYY-MM-DD
title: "[Full Title] — SCRA Working Paper [N]"
description: "[SEO description ~150 chars]"
permalink: /research/[slug]/
---
```

Then JSON-LD (ScholarlyArticle + BreadcrumbList), then `<style>` block, then:
1. `.pta-page-hero` with eye label, h1, subtitle
2. `.rp-axis-tags` (Register / Theater / Stratum chips)
3. Arc navigation bar
4. Thesis box
5. Author/meta info line
6. Parts (h2 headers)
7. Sources section
8. SCRA Verdict box
9. Related papers
10. `.pta-page-nav` (← The Corpus + adjacent WP →)

---

## Adding a New Working Paper (Checklist)

- [ ] Create `/research/[slug]/index.html` with correct layout, JSON-LD, content
- [ ] Add catalog entry to `/research/index.html` (with `<a href>` title, NOT `<span>`)
- [ ] Add URL to `/sitemap.xml` with appropriate priority
- [ ] Update `numberOfItems` in `/research/index.html` JSON-LD and hero text
- [ ] After Zenodo deposit: add DOI to both research page and catalog entry
- [ ] Git commit and push

---

## Honorifics in HTML

```html
<!-- Prophet Muhammad -->
Muhammad ﷺ  or  the Prophet ﷺ

<!-- Ahl al-Bayt -->
Imam Ali (A.S.)
Fatima al-Zahra (A.S.)
Imam Husayn (A.S.)
Zainab bint Ali (A.S.)
<!-- etc. -->
```
