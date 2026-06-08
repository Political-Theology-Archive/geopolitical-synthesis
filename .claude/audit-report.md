# Audit Report — SCRA Pipeline Health
## Date: 2026-06-08 | Status: Audit completed, 5 issues fixed

---

## Audit Scope

Full pipeline audit of `geopolitical-synthesis-site` (alvidscriptorium.com) covering:
- Catalog completeness and link integrity
- Sitemap coverage
- Schema/JSON-LD accuracy
- Author attribution
- Content gaps across four Sanctuaries
- Cross-site consistency

---

## FIXED ISSUES (2026-06-08)

### Fix 1 — Unlinked Catalog Titles (14 papers)
**Problem**: 14 paper catalog entries had `<span>` titles (dead text) instead of `<a href>` anchor links.
Users could not click paper titles in the catalog to reach the standalone research pages.

**Papers fixed**:
WP-11, WP-12, WP-13, WP-14, WP-15, WP-16, WP-17, WP-18, WP-20, WP-21, WP-22, WP-24, WP-25, WP-26

**Fix applied**: Converted each `<span style="color:rgba(...)">Title</span>` to `<a href="{{ '/research/[slug]/' | relative_url }}" style="color:rgba(...);text-decoration:none;">Title</a>`

**Commit**: `69a1b03`

---

### Fix 2 — Missing Sitemap Entries (6 pages)
**Problem**: Six research pages existed but were not listed in `sitemap.xml`. Google could not discover them through sitemap.

**Pages added**:
- `/research/ba-alist-capture/` (priority 0.82)
- `/research/karbala-constitution/` (priority 0.82)
- `/research/caliphate-capture-chain/` (priority 0.80)
- `/research/mihna-mutazila/` (priority 0.78)
- `/research/safavid-experiment/` (priority 0.80)
- `/research/triadic-theory-dynamic-islam/` (priority 0.78)

**Commit**: `69a1b03`

---

### Fix 3 — numberOfItems Stale (34 → 47)
**Problem**: JSON-LD `CollectionPage` showed `"numberOfItems":34`. Hero text showed "34 Working Papers". Both were stale — actual count was 47 (43 numbered WPs + 4 standalone studies).

**Fix applied**: Updated `numberOfItems` in JSON-LD, hero eye text (`34 Working Papers` → `47 Papers`), and front matter description.

**Commit**: `69a1b03`

---

### Fix 4 — Duplicate Sitemap Entry
**Problem**: `/research/al-mizan-haq-batil/` appeared twice in sitemap.xml (lines 200 and 396). Crawlers received conflicting priority signals.

**Fix applied**: Removed the stale duplicate (priority 0.75, date 2026-05-31). Kept the authoritative entry (priority 0.85, date 2026-06-08).

**Commit**: `69a1b03`

---

### Fix 5 — Generic Author Attribution (15 pages)
**Problem**: 15 research pages had `"name": "Alvid Scriptorium Research Division"` in their JSON-LD `author` field. This broke ORCID attribution, academic discoverability, and was factually wrong.

**Pages fixed**:
- `zahir-batin-ontology`, `third-temple-movement`, `pakistan-sufi-shrines`, `nahj-balagha-admixture`
- `muhammad-ibn-abd-al-wahhab`, `mihna-mutazila`, `karbala-constitution`, `ibn-taymiyyah-anti-alid`
- `haydar-amuli`, `fadakiyya-constitutional-brief`, `caliphate-capture-chain`, `barelvi-deobandi-split`
- `ba-alist-capture`, `al-mizan-haq-batil`, `deoband-1867-pakistan`

**Fix applied**:
```json
// OLD:
"name": "Alvid Scriptorium Research Division"

// NEW:
"name": "Saad Khizar Bosal",
"identifier": "https://orcid.org/0009-0004-9944-7378"
```
Also fixed citation blocks: `Alvid Scriptorium Research Division.` → `Bosal, Saad Khizar.`

**Commit**: `69a1b03`

---

## PREVIOUS SESSION FIXES (pre-audit)

### SCRA-2026 Label Removal (sacredcivilization-site)
- `/shifts/index.html`: `SCRA-2026 · WING I` → `AKADEMIYA DARGAH GHAZI KOT · KULLIYYAT I`
- `/linguistics/index.html`: `SCRA-2026 · WING II` → `AKADEMIYA DARGAH GHAZI KOT · KULLIYYAT II`
- `/working-papers/index.html`: `SCRA Working Papers — Academic Research Archive` → `Working Papers — Academic Research Archive`
- **Commit**: `fd52ffd`, `6283d6f`

### WP-23 Catalog Entry Fix
- WP-23 title was `<span>` → converted to `<a href>` + added Research Page link
- **Commit**: `99a0ca6`

---

## OUTSTANDING KNOWN ISSUES

### Structural
| Issue | Detail | Priority |
|-------|--------|----------|
| DOI duplication WP-23/WP-24 | Both point to `10.5281/zenodo.20543517` | HIGH — needs separate Zenodo deposit for WP-23 |
| 15 pages on `layout: default` | Older pages not yet migrated to `layout: page` | LOW — do not change without explicit instruction |
| SSL enforcement (dargah site) | GitHub Pages "Enforce HTTPS" not yet enabled | MEDIUM |
| WP-22 title links to `ghadir-khumm` sub-study | Not a dedicated WP-22 standalone page | LOW — acceptable workaround |

### Zenodo Deposits Pending
Papers needing DOI (Zenodo deposit not yet done):
WP-08, WP-09, WP-10, WP-21, WP-27, WP-41, WP-42, WP-43, WP-44, WP-45, WP-46, WP-47, WP-48, WP-49, WP-50, WP-51
(16 papers)

### Content Gaps (see gaps-pending.md for full detail)
- Ottoman Sufi theology depth paper (Mevlevi/Bektashi doctrinal content)
- Khorasan philosophical corridor paper
- ISI as civilizational institution paper
- Sixth Ba'alist Instance explicit enumeration paper
- Sahifa al-Sajjadiyya → WP-51 BUILT (2026-06-08) ✅

---

## Audit Quality Observations

### What Is Working Well
- **Vertical argument structure**: The four Sanctuaries framework is coherent and well-executed
- **Cross-sectarian methodology**: Using Bukhari to prove Shia points is the correct scholarly move
- **Pakistan arc**: The most complete and distinctive contribution — nothing like WP-27's Khawarij reading of Maududi exists in the academy
- **Author identity**: ORCID attribution now consistent across new papers (after Fix 5)
- **Arc navigation**: In-page arc navigation between related WPs is good UX

### Structural Imbalances
- **Sanctuary I** (ontological): Strong core but WP-08 (Triadic Theory) has no DOI and no standalone depth page
- **Sanctuary II** (historical): Very strong — the Foundational Jurisprudence arc is the best-developed
- **Sanctuary III** (territorial): Iranian Laboratory thin — only WP-31. No dedicated Ottoman doctrinal depth paper (WP-25 covers the problem but not the actual theology).
- **Sanctuary IV** (contemporary): Pakistan arc complete; WP-44/45/46 are thin stubs needing development

### Energy Leaks (Unbalanced Points)
1. **WP-50 exists in catalog but has no slug/permalink** — it's labeled "Indus Pre-Ground / NEW"
2. **WP-03 appears in catalog** (line 1768) but hasn't been read in detail — verify it has correct author attribution
3. **WP-49 (Khutba al-Gharra')** — exists but DOI pending; no arc navigation added
4. **Sub-study pages** (`fatima-fadakiyya/`, `ghadir-khumm/`, `thursday-calamity/`, etc.) — these are separate from WP standalone pages; catalog links to them as sub-studies which is correct, but they have no JSON-LD in many cases
