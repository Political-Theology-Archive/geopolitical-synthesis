# Permanent Rules — SCRA Project
## Non-negotiable constraints. Read before every site edit.

---

## RULE 1 — No Commercial Links on SCRA Sites (ABSOLUTE)

The Gumroad store (`sacredcivilization.gumroad.com`) sells publications. It is **completely separate** from all three SCRA sites.

**NEVER add to any SCRA site:**
- Gumroad links
- Amazon links
- Any e-commerce or buy-now links

**Books are cited via WorldCat ONLY:**
Format: `https://www.worldcat.org/isbn/[ISBN]`
Example: `<a href="https://www.worldcat.org/isbn/0521646960">Madelung (Cambridge, 1997)</a>`

---

## RULE 2 — WP-19 (Saladin's Double Act) — VAULT ONLY FOREVER

Working Paper 19 ("Saladin's Double Act") is in permanent vault.
- Never publish on any site
- Never reference in any published paper
- Never mention it to anyone
- Never ask about it

---

## RULE 3 — Ismaili Institutional Tradition

The author does not consider the Ismaili institutional tradition part of sacred civilization. Do not include Ismaili institutions, Aga Khan network, or Ismaili doctrinal claims in SCRA analytical framework.

---

## RULE 4 — Deobandi Threat Framing (PRECISE)

The Deobandi/Saudi ideological threat to Pakistan is **EXTERNAL** to the Pakistan Army:
- Pro-Saudi political forces (JUI-F organized constituency)
- PML-N–Saudi structural nexus
- Saudi direct funding architecture
- Vast Saudi petrodollar madrasa expansion

The threat is NOT internal to the army as an institution. The Zia episode (1977–1988) was a **historical glitch** that the institutional military corrected. Never frame the army itself as the Ba'alist agent. The civilian-political Ba'alist vector is external.

---

## RULE 5 — Honorifics (REQUIRED)

| Figure | Honorific | Format |
|--------|-----------|--------|
| Prophet Muhammad | ﷺ | Used after every mention by name |
| Imam Ali (A.S.) | (A.S.) | After first mention in each section |
| Imam Hasan (A.S.) | (A.S.) | Same |
| Imam Husayn (A.S.) | (A.S.) | Same |
| Fatima al-Zahra (A.S.) | (A.S.) | Same |
| Zainab bint Ali (A.S.) | (A.S.) | Same |
| All 12 Imams | (A.S.) | Same |

In HTML: use `(A.S.)` literally, or unicode `ﷺ` for the Prophet.

---

## RULE 6 — Pakistan Framework (PERMANENT — never contradict)

See `.claude/pakistan-framework.md` for full detail. Summary:
- Bhutto = pro-Ahl al-Bayt, NOT Ba'alist
- 1973 Constitution = Iqbalian, NOT Ba'alist
- Objectives Resolution = Iqbalian, NOT Ba'alist
- Ba'alism in Pakistan = Maududi-JI-Zia-Deobandi-Wahhabi vector
- The 1977 coup against Bhutto = Ba'alist Capture event
- Pakistan Army under Munir = civilizational recovery

---

## RULE 7 — Layout Standard (geopolitical-synthesis-site)

All NEW research pages: `layout: page`
Older pages still on `layout: default` — do not change them without explicit instruction.

---

## RULE 8 — JSON-LD Author Attribution

Every research page must have in its JSON-LD:
```json
"author": {
  "@type": "Person",
  "name": "Saad Khizar Bosal",
  "identifier": "https://orcid.org/0009-0004-9944-7378",
  "affiliation": {
    "@type": "Organization",
    "name": "Sacred Civilization Research Archive (SCRA)"
  }
}
```
Never use "Alvid Scriptorium Research Division" or any generic author name.

---

## RULE 9 — DOI Format

DOIs are deposited on Zenodo. Format in HTML:
```html
<a href="https://doi.org/10.5281/zenodo.[ID]" target="_blank" rel="noopener">DOI: 10.5281/zenodo.[ID]</a>
<a href="https://zenodo.org/records/[ID]" target="_blank" rel="noopener">Zenodo Permanent Record ↗</a>
```
If DOI is not yet obtained: `DOI pending Zenodo deposit`

---

## RULE 10 — Dargah Site Labels (sacredcivilization-site)

Inner pages use `AKADEMIYA DARGAH GHAZI KOT` label system — NOT `SCRA-2026`.
- Wing I = `KULLIYYAT I`
- Wing II = `KULLIYYAT II`
- Working Papers section = `WORKING PAPERS`
