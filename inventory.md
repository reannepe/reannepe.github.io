# Image Inventory — Gallery → Source Project Mapping

**Images unknown in source: 6 out of 16 gallery images have no confirmed project.** PHASH-matched all 16 against 16,518 images in cloud storage + backup drive — no project-original source files found anywhere. The repo's own `images/` directory is the only surviving copy (see PHASH sweep below).

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

## PHASH Sweep Results (ImageMagick 7.1.2, `compare -metric PHASH`)

Searched all accessible storage for source files of every gallery image:
- Cloud storage: `/mnt/cloud-storage/Reanne/` (16k files in Needs Organization, 362 in Portfolio, 165 across 7 project folders)
- Backup drive: `/mnt/gdrive-backup-reannedenisepe/` (408 files in organized project folders)
- Exhaustive per-image PHASH comparison against every image in each location

**Verdict: Source files beyond this repo do not exist for the gallery images.** The originals were the v1/v2 numbered files (`images/interior/1.jpg`, `images/exterior/Dormitel.jpg`, etc.) which are still in this repo's `images/` directory. Cloud storage only has copies of some interior images saved under different names (likely migrated from the same source set).

### PHASH-Confirmed Copies in Cloud Storage

3 interior images had near-identical matches in cloud storage `Needs Organization/` (random numbered files, not project-organized):

| Gallery Image | Cloud Match (Needs Organization) | PHASH Score | Same as (repo) |
|--------------|----------------------------------|-------------|----------------|
| `interior-living-02.jpg` | `2 (1).jpg` | **0.0055** (near-identical) | `images/interior/17.jpg` |
| `interior-bar-01.jpg` | `9 (1).jpg` | **0.0337** | `images/interior/24.jpg` |
| `interior-detail-01.jpg` | `333.jpg` | **0.0524** | `images/interior/18.jpg` |

All other 13 gallery images: **no match anywhere** (PHASH > 0.08, meaning different images).

### Searched Storage Summary

| Location | Images Scanned | Matches Found |
|----------|---------------|---------------|
| Cloud `Needs Organization/` | 15,583 | 3 interior (named copies) |
| Cloud `Portfolio/` | 362 | 0 |
| Cloud project folders (7 dirs) | 165 | 0 |
| Backup drive organized folders | 408 | 0 |
| **Total** | **16,518** | **3 (already-known interior)** |

### Likely Explanation

Gallery images were exported from original render source files (SketchUp/V-Ray, Lumion, 3ds Max) directly to the web-optimized sizes seen in `images/selected/`. The original render outputs and working files were stored on a local workstation (now unavailable) or in the v1/v2 git history which was pruned. The `images/` directory preserves the closest thing to originals.

## Hash-Verified Name Mapping (md5sum)

Within the repo, `images/selected/*` files are exact copies of repo source files — verified by md5sum:

| selected/ image | = same file as | Size |
|----------------|---------------|------|
| `interior-living-01.jpg` | `images/interior/1.jpg` | 316KB |
| `interior-bedroom-01.jpg` | `images/interior/3.jpg` | 343KB |
| `interior-dining-01.jpg` | `images/interior/6.jpg` | 337KB |
| `interior-kitchen-01.jpg` | `images/interior/8.jpg` | 285KB |
| `interior-lounge-01.jpg` | `images/interior/10.jpg` | 347KB |
| `interior-living-02.jpg` | `images/interior/17.jpg` | 431KB |
| `interior-detail-01.jpg` | `images/interior/18.jpg` | 435KB |
| `interior-bar-01.jpg` | `images/interior/24.jpg` | 494KB |
| `interior-dining-02.jpg` | `images/interior/28.jpg` | 343KB |
| `commercial-retail-01.jpg` | `images/commercial/retail-store.jpg` | 241KB |
| `commercial-cafe-01.jpg` | `images/commercial/carwash-cafe.jpg` | 175KB |
| `commercial-plan-01.jpg` | `images/commercial/1.jpg` | 508KB |
| `exterior-house-01.jpg` | `images/exterior/1.jpg` | 156KB |
| `exterior-house-02.jpg` | `images/exterior/1.1-01.jpg` | 531KB |
| `exterior-dormitel-01.jpg` | `images/exterior/Dormitel.jpg` | 174KB |
| `exterior-resort-01.jpg` | `images/exterior/Resort.jpg` | 172KB |

## Unidentified Images (need visual check with Reanne)

- `commercial-cafe-01.jpg` (= `carwash-cafe.jpg`) — no source found; need project confirmation
- `exterior-resort-01.jpg` (= `Resort.jpg`) — no source found; Tagaytay vs Costa de Madera
- `exterior-house-01/02.jpg` (= `exterior/1.jpg, 1.1-01.jpg`) — no source found; Antipolo vs Araneta
- `commercial-plan-01.jpg` (= `commercial/1.jpg`) — no source found; likely Rocket Coffee
- v1 exterior `3.1-01.jpg` — unnamed location
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

## 6. Source Images to Pull from Cloud Storage / Backup Drive

Gallery source files beyond the repo don't exist in any accessible storage (see PHASH sweep above). However, the backup drive has **project-organized renders and sheets** that could be added as **new gallery entries** rather than replacements:

Best candidates from backup drive (`/mnt/gdrive-backup-reannedenisepe/`):
- **Rocket Coffee Co. Booth** — renders + A-01 to A-04 sheets — `Reanne Pe- Additional Portfolio/Sample Booth Design and Detailing Project/Rocket Coffee Co. Booth/`
- **Ready, Set, Learn** — mood board + sheets — `Reade Set Learn- TheraPlay Center/`
- **Araneta Residence** A1–A6 sheets — `Sample Residential Project- Construction Document/`
- **Hotel Savano** hospitality renders — `2018 - Hotel Savano/` (subfolder `1816- HOTEL SAVANO`)
- **Petsup Booth** detailing sheets — `Reanne Pe- Additional Portfolio/Sample Booth Design and Detailing Project/Petsup Booth/`
- **Vergel de Dios Residence** interior renderings — `Design Projects/2018 - Vergel de Dios Residence Interior/`
- **Vince Laundry Conceptual** exterior + plan concepts — `VINCE LAUNDRY- 1ST CONCEPTUAL/`
- **Sample AI Renders** — `Reanne Pe- Additional Portfolio/Sample AI Renders/`

## 7. Priority Order

1. Fill the 3 featured project dialogs with real content (highest visibility)
2. Add 5–10 more gallery images from unused files on disk
3. Add a "Detail/Modular" filter category with booth/detailing images
4. Add new gallery entries from backup drive project folders (Rocket Coffee, Ready Set Learn, Petsup Booth, Araneta sheets)
5. Add Revit, Lumion, 3ds Max to software stack
6. Confirm the 6 estimated project attributions with Reanne (exterior-house → Antipolo/Araneta?, exterior-resort → Tagaytay/Costa de Madera?, commercial-cafe → Rocket Coffee/Carwash Cafe?)
