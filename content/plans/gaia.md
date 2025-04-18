---
title: Gaia
date: 2024-12-29
description: Roadmap for developing Gaia
toc: true
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

## Week 4: Website MWE

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

## Week 5: Website content (text and images)

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

- What are the legal requirements for the direktor of a d.o.o. (do they have to be paying prispevki? Can the direktor be an s.p.?)
- Clearly enumerate all obligations of a micro d.o.o. like Gaia (e.g. quarterly DDV reports and payments; end-of-year financial reports; keeping books in accordance with SRS, etc.)
- Requirements for bookkeeping (any required format for transactions or account names; certification requirements for bookkeeping software, etc.)
- Requirements for legally accepting cash as payment (akt o blagajniškem poslovanju; acquiring digitalno potrdilo; protocol and relevant davčna blagajna software/hardware for selling products for cash in accordance with `Pravilnik o izvajanju Zakona o davčnem potrjevanju računov`; protocol for depositing cash at bank; etc.)
- Find authoritative source for konti used by Slovene Accounting Standards (SRS)

## Week 6b: Financials (bookkeeping)

- Map each current Gaia account to an appropriate account used by Slovene Accounting Standards (SRS)
- Go through books and enumerate common transactions (e.g. paying for services, paying for goods, invoicing for software development, invoicing for physical goods, etc)
- Document correct bookkeeping recipe for each transaction in accordance with SRS.
- Work through proper SRS accounting workflow of a full lifecycle for e.g. JabSok, from purchasing empty bottles to closing books with end-of-year sales revenue.
- Update books so that all transactions use SRS-compliant accounts and bookkeeping workflows.

## Week 6c: Financials (davčna blagajna)

- Acquire digitalno potrdilo za pošiljanje računov v davčno potrjevanje
- Draft and sign an `Akt o blagajniškem poslovanju` for Gaia (enumerate points of sale, authorized salespeople, which products may be sold for cash, which points of sale accept cash; determine how much cash can be held at a given time; determine how regularly cash must be deposited at bank)
- Set up and learn to use davčna blagajna software
- Acquire a receipt printer and learn to use; or otherwise solve workflow of giving customers a copy of receipt

## Week 6d: Financials (taxes and financial reports)

- Document protocol for paying DDV following DDV-O (quarterly DDV form submitted to FURS), and recipe for recording the transactions in your books.
- Create script to programatically generate a DDV report from journal entries for a given date range
- Clearly enumerate all required end-of-year financial statements (balance sheet, income statement, etc.), their deadlines, and to which government agencies they must be submitted
- Find official sources for structure of each financial report
- Document recipe for closing books in accordance with SRS at the end of each accounting period.
- Document recipe for preparing balance sheet and income statement from journal entries.
- Create script to programatically generate a balance sheet from journal entries for a given point in time.
- Create script to programatically generate an income statement from journal entries for a given date range.
- Document recipes for submitting financial statments (website to visit, authentication process, etc.)
- Document protocol for calculating paying DOD-DDPO (end of year report submitted to FURS)

## Week 6e: Inventory bookkeeping

- Clearly enumerate which inventory items must be kept track of in a dedicated inventory ledger to be compliant with SRS
- Document SRS-compliant format of inventory ledgers
- Take physical inventory of required items
- Based on results of inventory-taking, create inventory ledgers for required items

## Week 6f: Financials: compliant bookkeeping software

Acquire or set up bookkeeping software in compliance with SRS and ZDavP člen 38.

Either find, set up, and learn to use some sort of Slovene-oriented bookkeeping SaaS, or see if you can find a solution by combining plain-text accounting with immutable audit logs or append-only ledger tables.

## Side quest: Warehouse and Inventory

- Arrange basement so family reserves of pickles/preserves/drinks/Gaia products set aside for home use etc. are in a separate part of the basement from Gaia inventory.
- JabSok: have a workable, organized, clean JabSok setup.
  Store JabSok bottles in crates with a well-known, fixed number of bottles per crate, for easy inventory.
  - Assemble enough plastic crates to store cca 1000 JabSok330 bottles.
  - Build enough wooden crates for cca 1000 bottles of JabSok750. Crates should be solid enough to comfortably carry cca 25 kg of bottles, and modularly stackable to e.g. 4 levels high.
  - Set up an inventory system to keep track of lot number and number of bottles in each crate, e.g. dedicated notecards, markers, and thumbtacks in basement that can be attached to crates.
  - Clean JabSok bottles of dust/evaporated fruit juice, place in crates, label crates with quantity and lot number. Do this sproti, a gajbica at a time, until suddenly all the JabSok is clean and labeled and inventoried.
- JabKis: Have a workable, clean JabKis setup.
  - Test each of the three cisterns, record differences.
  - Pressure wash and sweep out štala floor of dust, mold, etc.
  - Pressure wash empty cisterns.
    Perhaps transfer existing JabKis to cleaned empty cisterns and clean out previously-full cisterns, too.
  - Have a pumping workflow "that works", even just filling 5-liter jugs a crate at a time.
  - Have e.g. 50-100 liters in manageable quantities ready to go at any given time in MiniŠtala on metals shelves

Have IBCs and kisarna nice and clean, have basement organized with nice stacks of gajbicas, have the facilities nice and presentable for visits.


## Side quest: Product R&D

- Soap: create molds, purchase thermometer, prepare recipes.
- Soap: create soaps as per recipes, label each batch in preparation for future reflections, set to cure.
- Burts: create recipes (varying ratios of liquid fat, solid fat, and bee's wax) to test.
-  Burts: create burts as per recipes, label each batch in preparation for reflections. Iterate.

## Side quest: Photography

Learn to use a manual DSLR camera (in preparation for taking photos for Gaia website):

- Grok effects of: aperture, shutter speed, and ISO
- Prepare and practice list of pedagogical exercises for learning to control above parameters (e.g. take close-up picture of object with a blurred backgrouund, take a clear picture of a fast-moving object like a fan blade, etc.)
- Retake all production Gaia images on a DSLR

## Side quest: supplementary web apps

- As a supplementary option to davčna blagajna računi, create a web app that uses UpnQr to generate invoices/receipts that a customer can scan in a mobile banking app and pay directly to your TRR, avoiding requirements for cash payment.
- Create a web app that allows customers to place orders from website (so have a backend with a database of products, and admin interface for managing products, and a frontend where a customer can assemble an order)

## Side quest: administrative tasks

- Move hosting of Gaia webmail from Dominik to a host you do business with directly
- Call up Delovska Hranilnica and cancel mobile banking subscription
- Update GS1 contact information to email/phone I control
- Regain access to A1 account, and switch contact information to email/phone I control
- Switch A1 internet/phone plan to something more economical
- Resolve renting a POS terminal to allow credit card payments
- Cancel GS1 EAN code contract
- Resolve AJPES contact info
