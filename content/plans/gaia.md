---
title: Gaia
date: 2024-12-29
description: Roadmap for developing Gaia
---

# Gaia

## Week 1: Label infrastructure

- Learn printing concepts: CMYK vs RGB color space; trim and bleed area, crop marks; font embedding; DPI
- Scribus MWE: create document with:
  - Given geometry: 175 mm x 75 mm
  - Given margins: 3 mm on all sides
  - Given bleed area: 3 mm on all sides
  - Crop marks
  - "Hello world" text
  - Colored background using CMYK colors
  Export as PDF, verify geometry and colors are as expected.
- Scribus MWE: add an SVG image imported from Inkscape.
  Export as PDF, verify geometry and color model is correct.
- Map Tailwind colors to CMYK
- Dimensions: define document dimensions, bleed area, margins for each label
- Colors: define color palette for each label (foreground, background, text color...)
- Create scripts for converting between Tailwind RGB and CMYK colors
- Partials: create SVG partials for each label
- Text sources: organize text for each label's major text frames in dedicated text files
- Create scripts to generate QR codes pointing to gaia.si
- Create scripts to generate barcodes for EAN codes

## Week 2: Convert labels from Inkscape to Scribus

Convert labels from Inkscape to Scribus:

- JabSok330 
- JabSok750 
- JabKis500
- BzgKis500
- SntOlj100
- SntOlj500

Make final label changes:

- Replace BIO with e.g. "Poreklo: Slovenija" "100% Slovensko" or similar
- Replace BIO logo with QR code pointing to https://gaia.si

## Week 3: Label order and inquiry

Learn how to use labelling machine; understand roll of core diameter, maximum roll diameter, roll width, winding direction.

Finalize LabelProfi inquiry:

- Understand all parameters in LabelProfi application: shape, dimensions, winding direction, substrate material, adhesive, color printing mode, protection finish, core diameter, roll diameter.
- Accumulate remaining questions
- Visit LabelProfi for consulatation
- Send off order

## Week 4: Website

Stack: Vue.js, Tailwind

Internationalization: Learn to, document recipies for, and implement:

- Heuristic for determining user's locale from browser settings
- Translating text content to current locale
- A nice-looking language switcher component
- Adjust route names to match current locale
- Update URLs in link components to match current locale

Website: create MWE website with a Home, About, Products, Where to buy, and Contact page; and Product sub-pages for JabSok, JabKis, SntOlj.
Use BioBrdo for inspiration as applicable.
Use e.g. stock images until you have images of Gaia products.

## Week 5: Financials

- Switch to konti used by Slovene Accounting Standards (SRS): find authoritative source for konti; map each current Gaia account to a SRS kont; update accounts in books to use konti.
- Learn and document protocol for paying DDV following DDV-O (quarterly DDV form submitted to FURS), and recipe for recording the transactions in your books.
- Learn to prepare DOD-DDPO (end of year report submitted to FURS); document.
- Correct accounting of small items selling transactions (e.g. resolve abuse of COGS) and document correct bookkeeping recipe.
- Open inventory bookkeeping.
- Resolve rules governing sale of small items to fizične osebe: do you need an official POS terminal? Can you just use davčna blagajna receipts (where do you buy them)? Can you accept cash?What is the proper bookkeeping and reporting (i.e. to FURS) protocol in each case?

## Week 6: Photography

Learn to use a manual DSLR camera (in preparation for taking photos for Gaia website).

- Grok effects of:
  - Aperture
  - Shutter speed
  - ISO
- Prepare and practice list of pedagogical exercises for learning to control above parameters (e.g. take close-up picture of object with a blurred backgrouund, take a clear picture of a fast-moving object like a fan blade, etc.)
- Prepare list of photographs to take for Gaia website;  
  prototype as necessary on e.g. iPhone camera, then take on DSLR camera.

## Week 7: Product R&D

- Soap: create molds, purchase thermometer, prepare recipes.
- Soap: create soaps as per recipes, label each batch in preparation for future reflections, set to cure.
- Burts: create recipes (varying ratios of liquid fat, solid fat, and bee's wax) to test.
-  Burts: create burts as per recipes, label each batch in preparation for reflections. Iterate.
