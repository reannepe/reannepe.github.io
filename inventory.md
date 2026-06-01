# Image Inventory — Gallery → Source Project Mapping

Maps each gallery image across v1/v2/v3 to the most likely source project, based on:
- v2 case studies that explicitly name projects
- career-ops workspace data (`/home/devj/local-arch/code/career-ops/workspaces/reanne/data/`)
- cloud storage project folders (`/mnt/cloud-storage/Reanne/`)
- backup drive sample work bundles (`/mnt/gdrive-backup-reannedenisepe/`)

## Confirmed Mappings (from v2 case studies)

| Image | Project | Source |
|-------|---------|--------|
| `interior-bedroom-01.jpg` | **Urbina Residence** — Makati condo studio | v2 case study 01 |
| `exterior-dormitel-01.jpg` | **One Florida Place Dormitel** — 6-storey, Valenzuela | v2 case study 02 |
| `commercial-retail-01.jpg` | **Ready, Set, Learn** — playschool/therapy center, QC | v2 case study 03 (interior is the playschool, not retail) |

## High-Confidence (same project set as confirmed)

| Image | Likely Project | Reason |
|-------|---------------|--------|
| `interior-living-01.jpg` | Urbina Residence | Same visualization batch as bedroom-01 |
| `interior-dining-01.jpg` | Urbina Residence | Same set; v2 featured card uses it |
| `interior-kitchen-01.jpg` | Urbina Residence | Same compact-condo kitchen set |
| `plans/a1.jpg` | One Florida Place Dormitel | Paired with dormitel exterior in v2 case study |

## Reasonable Estimates

| Image | Likely Project | Notes |
|-------|---------------|-------|
| `exterior-resort-01.jpg` | **Tagaytay Event's Place and Resort** (2020–21) or **Costa de Madera Resort Hotel** | Resort exterior — Tagaytay is a named LinkedIn project; Costa de Madera has 168 files |
| `exterior-house-01.jpg` | **Antipolo House Architectural Design** (2022) or **Araneta Residence** (2021) | Named residential house projects with LinkedIn/portfolio evidence |
| `exterior-house-02.jpg` | Same as above | Alternate view of same house |
| `commercial-cafe-01.jpg` | **Rocket Coffee Co. Booth** or **Baba's Shawarma Cafe** | Cafe/commercial interior with full sheet set evidence for Rocket Coffee |
| `commercial-plan-01.jpg` | Rocket Coffee Co. Booth | Plan board for the cafe — Rocket Coffee has A-01 to A-04 sheets |
| `plans/a-01.jpg` | **Ready, Set, Learn** (A-01 sheet) | Ready Set Learn has A-01 to A-05 in backup drive |
| `plans/power-layout.jpg` | **Rocket Coffee Co. Booth** | Rocket Coffee sheet set includes power layout |

## v2-Only Images

| Image | Likely Project | Notes |
|-------|---------------|-------|
| `interior-lounge-01.jpg` | Urbina Residence or Chan/Wu condo | Same batch |
| `interior-living-02.jpg` | Urbina Residence or Chan/Wu condo | Alternate living view |
| `interior-detail-01.jpg` | Urbina Residence | Finish/material vignette |
| `interior-bar-01.jpg` | Valenzuela House or similar | Bar/storage detail |
| `interior-dining-02.jpg` | Urbina Residence | Alternate dining view |

## v1 Numbered Images — Likely Project Clusters

| Folder | Likely Source Projects |
|--------|----------------------|
| `interior/1–12.jpg` | Urbina Residence, Chan/Wu condo, Vertis North Condo, SMDC units |
| `interior/16–28.jpg` | Valenzuela House Interior Design, Vergel de Dios Residence |
| `exterior/Dormitel.jpg` | One Florida Place Dormitel |
| `exterior/Resort.jpg` | Tagaytay Event's Place and Resort / Costa de Madera |
| `exterior/1–3.jpg` | Antipolo Residence / Araneta Residence / One Florida Place |
| `exterior/1.1-01.jpg, 3.1-01.jpg` | High-res versions of house/street views |
| `commercial/carwash-cafe.jpg` | Carwash/cafe project (unnamed, likely early commercial) |
| `commercial/retail-store.jpg` | Retail project (likely Hokkaido or Chef Tony's cluster) |
| `commercial/1–27.jpg` | Hokkaido Takoyaki cluster, Chef Tony's, Snack-a-holic, Fuel Burgers, South by Cajun, Swiss Miss Concept Store |
| `plans/A-01.pdf–A-05.pdf` | Ready, Set, Learn (A-01–A-05) or Hotel Savano |
| `plans/A1.pdf–A6.pdf` | Araneta Residence (A1–A6 confirmed) or Costa de Madera / BFAD Lab |

## Unidentified Images (need visual check with Reanne)

- `commercial-cafe-01.jpg` — need to confirm if Rocket Coffee, Baba's Shawarma, or Maginhawa Cafe
- `exterior-resort-01.jpg` — Tagaytay vs Costa de Madera
- v1 exterior `1.1-01.jpg`, `3.1-01.jpg` — unnamed locations
- `commercial/5.jpg, 9.jpg, 10.jpg` — need visual ID

---

# Recommendations: What to Add/Polish in v3

Based on resume evidence and career-ops data, v3 has these gaps:

## 1. Fill Featured Projects Placeholders

All three featured project dialogs say "placeholder." Replace with:
- **Project 01** → **Urbina Residence** — slot already uses bedroom-01 image; write real narrative from `portfolio-writing-draft.md`
- **Project 02** → **One Florida Place Dormitel** — slot already uses dormitel exterior + a1 plan; add real narrative + multiple images
- **Project 03** → **Rocket Coffee Co. Booth** — slot uses cafe images; Rocket Coffee has sheets, renders, and a real build story

## 2. Add a Modular / Detailing Section

The resume has strong evidence of:
- **Rocket Coffee Co. Booth** — full A-01 to A-04 sheet set with signage detail, furniture detail, power layout
- **Petsup Booth** — detailing set in backup drive
- These are underused in the portfolio; add a "Modular & Detailing" category

## 3. Expand the Gallery

Current v3 gallery has only 14 items. The resume calls for:
- More exterior studies (house facades, dormitel, resort)
- More commercial retail/kiosk work from the Hokkaido/Chef Tony's cluster
- Drawing/plan previews as a distinct filterable type

Suggested additions from existing v3 image files (already on disk in `v3/public/images/`):
```
commercial/carwash-cafe.jpg       → café/commercial retail
commercial/retail-store.jpg        → retail environment
exterior/1.jpg, 2.jpg, 3.jpg      → house exterior studies
exterior/Dormitel.jpg              → alternate dormitel view
exterior/Resort.jpg                → resort exterior
interior/21.jpg, 24.jpg           → more residential interiors
```

## 4. Offer More Gallery Filter Categories

Current filters: sector (residential/commercial), type (interior/exterior/coffee-set/etc.)
Add:
- **Detail / Modular** filter — for shop drawings, signage details, furniture details
- **Technical / Drawing** — to surface plan sheets more prominently
- **Hospitality** sector — to cover resort, hotel, event-place work

## 5. Software Stack

v3 lists: SketchUp Pro, V-Ray, AutoCAD, Photoshop, CorelDRAW
Resume adds: Revit, Lumion (basic), 3ds Max, Canva, Notion, Calendly — consider showing these as secondary/contextual tools.

## 6. Source Images to Pull from Cloud Storage

Highest-value images to add from `/mnt/cloud-storage/Reanne/`:
- **Rocket Coffee Co. Booth** renders and plan sheets — `Reanne Pe- Additional Portfolio/Sample Booth Design and Detailing Project/Rocket Coffee Co. Booth/`
- **Ready, Set, Learn** mood board and sheets — `Reade Set Learn- TheraPlay Center/`
- **Araneta Residence** A1–A6 sheets — `Sample Residential Project- Construction Document/`
- **Hotel Savano** hospitality renders — `2018 - Hotel Savano/`
- **One Florida Place** additional views — from portfolio PDFs or Wix site
- **Vergel de Dios Residence** interior renderings — `2018 - Vergel de Dios Residence Interior/`

## 7. Priority Order

1. Fill the 3 featured project dialogs with real content (highest visibility)
2. Add 5–10 more gallery images from unused files on disk
3. Add a "Detail/Modular" filter category with booth/detailing images
4. Pull new images from cloud storage (Rocket Coffee, Ready Set Learn sheets, Araneta)
5. Add Revit, Lumion, 3ds Max to software stack
