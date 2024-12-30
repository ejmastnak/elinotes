---
title: Gaia
date: 2024-12-29
description: Roadmap for developing Gaia
---

# Gaia

## Week 1: Labels

- Learn printing concepts: CMYK vs RGB color space; trim and bleed area, crop marks; font embedding; DPI
- Scribus MWE: create document with:
  - Given geometry: 175 mm x 75 mm
  - Given margins: 3 mm on all sides
  - Given bleed area: 3 mm on all sides
  - Crop marks
  - "Hello world" text
  - Colored background using CMYK colors
  Export as PDF, verify geometry and color model is correct.
- Scribus MWE: add an SVG image imported from Inkscape.
  Export as PDF, verify geometry and color model is correct.
- Map Tailwind colors to CMYK
- Dimensions: define document dimensions, bleed area, margins for each label
- Colors: define color palette for each label (foreground, background, text color...)
- Create scripts for converting between Tailwind RGB and CMYK colors
- Partials: create SVG partials for each label
- Text sources: organize text for each label's major text frames in dedicated text files

## Week 2: Convert labels from Inkscape to Scribus

Convert labels from Inkscape to Scribus:

- JabSok330 
- JabSok750 
- JabKis500
- BzgKis500
- SntOlj100
- SntOlj500

## Week 3: Label order and inquiry

Make final label changes:

- Replace BIO with e.g. "Poreklo: Slovenija" "100% Slovensko" or similar
- Replace BIO logo with QR code pointing to https://gaia.si

Finalize inquiry:

- Understand all parameters in LabelProfi application
- Accumulate remaining questions
- Send off inquiry to LabelProfi

## Week 4: Website

Stack: Vue.js, Tailwind

- Learn and implement internationalization of page content and routes
- Prepare a Home, About, Products, Where to buy, and Contact
  Use BioBrdo for inspiration as applicable.
  Use e.g. stock images until you have images of Gaia products.

## Week 5: Financials

- Resolve davčna blagajna receipts
- Resolve DOD-DDPO
- Resolve paying DDV following DDV-O
- Correct accounting of small items selling transactions (e.g. resolve abuse of COGS)
- Open inventory bookkeeping

## Week 6: Photography

Learn to use a manual camera.

Grok effects of:

- Aperture
- Shutter speed
- ISO

List of photographs to take for website; prototype on e.g. iPhone camera.

## Week 7: Product R&D

- Soap: create molds, purchase thermometer, prepare recipes.
- Soap: create soaps as per recipes, label each batch in preparation for future reflections, set to cure.
- Burts: create recipes (varying ratios of liquid fat, solid fat, and bee's wax) to test.
-  Burts: create burts as per recipes, label each batch in preparation for reflections. Iterate.
