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

## Week 4a: Website MWE

Stack: Vue.js, Tailwind

Internationalization: Learn to, document recipies for, and implement:

- Heuristic for determining user's locale from browser settings
- Translating text content to current locale
- A nice-looking language switcher component
- Adjust route names to match current locale
- Update URLs in link components to match current locale

Create a minimal working example website with:

- Home, About, Products, Where to buy, and Contact pages; and Product sub-pages for JabSok, JabKis, SntOlj.
- Working internationalization and routing
- Finalized design (colors, fonts, layout, etc)
- Placeholder content is fine (e.g. solid color rectangles as image placeholders until you have images of Gaia products, Lorem Ipsum content for text until you have text content ready)

## Week 4a: Website content (text and images)

Write text content for Home, About, Products, Where to buy, and Contact pages; and Product sub-pages for JabSok, JabKis, SntOlj.

Create Slovene translations for all English text.

Prepare images for website (take yourself or collect from existing files):

- Individual pictures of labeled products: JabSok, JabKis, SntOlj
- Spread of all products on a dark background for website cover image
- Various landscape photos: meadows, fall leaves, apple blossoms, snow, sunsets, forest, etc.
- Various production photos: apples in wood crates, kis cisterns in štala, pressing barrel, preša, etc.

Publish website:

- Acquire ownership of gaia.si (research Slovene DNS providers, create an account somewhere, visit Dominik and hopefully amicably arrange ownership transfer)
- Get read/write access to DNS records for gaia.si
- Transfer gaia.si nameservers and DNS records to Cloudflare in preparation for publishing on Cloudflare pages
- Ensure site assets (fonts, images, CSS is properly bundled with app for production)
- Publish website on Cloudflare
- Point gaia.si to new website

## Week 6a: Financials (legal research)

Answer questions:

- What are the legal requirements for the direktor of a d.o.o. (do they have to be paying prispevki? can it be an s.p.?)
- Clearly enumerate all obligations of a micro d.o.o. like Gaia (e.g. quarterly DDV reports and payments; end-of-year financial reports; keeping books)
- Requirements for bookkeeping (any required format for transactions or account names; certification requirements for bookkeeping software, etc.)
- Requirements for legally accepting cash as payment (akt o blagajniškem poslovanju; acquiring digitalno potrdilo; protocol and relevant davčna blagajna software/hardware for selling products for cash in accordance with `Pravilnik o izvajanju Zakona o davčnem potrjevanju računov`; protocol for depositing cash at bank; etc.)
- Find authoritative source for konti used by Slovene Accounting Standards (SRS)

## Week 6b: Financials (preparing for sales to consumers)

- Acquire digitalno potrdilo za pošiljanje računov v davčno potrjevanje
- Draft and sign an `Akt o blagajniškem poslovanju` for Gaia (enumerate points of sale, authorized salespeople, which products may be sold for cash, which points of sale accept cash; determine how much cash can be held at a given time; determine how regularly cash must be deposited at bank)
- Set up and learn to use davčna blagajna software
- Acquire a receipt printer and learn to use; or otherwise solve workflow of giving customers a copy of receipt
- As an alternate option, create a web app that uses UpnQr to generate invoices/receipts that a customer can scan in a mobile banking app and pay directly to your TRR, avoiding requirements for cash payment.

## Week 6c: Finalize (bookkeeping and accounting)

Bookkeeping:

- Map each current Gaia account to an appropriate account used by Slovene Accounting Standards (SRS)
- Update books so that all accounts are SRS-approved accounts
- Go through books and enumerate common transactions (e.g. paying for services, paying for goods, invoicing for software development, invoicing for physical goods, etc)
- Document correct bookkeeping recipe for each transaction.
  In particular correct accounting of small items selling transactions (e.g. resolve abuse of COGS)
- Open inventory bookkeeping.

Accounting:

- Formally document protocol for paying DDV following DDV-O (quarterly DDV form submitted to FURS), and recipe for recording the transactions in your books.
- Formally document protocol for paying DOD-DDPO (end of year report submitted to FURS), and recipe for recording the transactions in your books.
- Formally document protocol for preparing and submitting end of year financial reports

## Week 7: Product R&D

- Soap: create molds, purchase thermometer, prepare recipes.
- Soap: create soaps as per recipes, label each batch in preparation for future reflections, set to cure.
- Burts: create recipes (varying ratios of liquid fat, solid fat, and bee's wax) to test.
-  Burts: create burts as per recipes, label each batch in preparation for reflections. Iterate.

## Side quest: Photography

Learn to use a manual DSLR camera (in preparation for taking photos for Gaia website):

- Grok effects of: aperture, shutter speed, and ISO
- Prepare and practice list of pedagogical exercises for learning to control above parameters (e.g. take close-up picture of object with a blurred backgrouund, take a clear picture of a fast-moving object like a fan blade, etc.)
- Retake all production Gaia images on a DSLR
