---
title: Gaia
date: 2024-12-29
description: Roadmap for developing Gaia
---

# Gaia roadmap

## Labels

### Label infrastructure

- ~~Learn printing concepts: CMYK vs RGB color space; trim and bleed area, crop marks; font embedding; DPI~~
- ~~Scribus MWE: create document with:~~
  - ~~Given geometry: 175 mm x 75 mm~~
  - ~~Given margins: 3 mm on all sides~~
  - ~~Given bleed area: 3 mm on all sides~~
  - ~~Crop marks~~
  - ~~"Hello world" text~~
  - ~~Colored background using CMYK colors~~
  ~~Export as PDF, verify geometry and colors are as expected.~~
- ~~Scribus MWE: add an SVG image imported from Inkscape.~~
  ~~Export as PDF, verify geometry and color model is correct.~~
- ~~Map Tailwind colors to CMYK~~
- ~~Dimensions: define document dimensions, bleed area, margins for each label~~
- ~~Colors: define color palette for each label (foreground, background, text color...)~~
- ~~Create scripts for converting between Tailwind RGB and CMYK colors~~
- ~~Partials: create SVG partials for each label~~
- ~~Text sources: organize text for each label's major text frames in dedicated text files~~
- ~~Create scripts to generate QR codes pointing to gaia.si~~
- ~~Create scripts to generate barcodes for EAN codes~~

### Convert labels from Inkscape to Scribus

~~Convert labels from Inkscape to Scribus:~~

- ~~JabSok330~~
- ~~JabSok750~~
- ~~JabKis500~~
- ~~BzgKis500~~
- ~~SntOlj100~~
- ~~SntOlj500~~

~~Make final label changes:~~

- ~~Replace BIO with e.g. "Poreklo: Slovenija" "100% Slovensko" or similar~~
- ~~Replace BIO logo with QR code pointing to https://gaia.si~~

### Label order and inquiry

~~Learn how to use labelling machine; understand roll of core diameter, maximum roll diameter, roll width, winding direction.~~

~~Finalize LabelProfi inquiry:~~

- ~~Understand all parameters in LabelProfi application: shape, dimensions, winding direction, substrate material, adhesive, color printing mode, protection finish, core diameter, roll diameter.~~
- ~~Accumulate remaining questions~~
- ~~Visit LabelProfi for consulatation~~
- ~~Send off order~~

## Web

### Website MWE

~~Stack: Vue.js, Tailwind~~

~~Internationalization: Learn to, document recipies for, and implement:~~

- ~~Heuristic for determining user's locale from browser settings~~
- ~~Translating text content to current locale~~
- ~~A nice-looking language switcher component~~
- ~~Adjust route names to match current locale~~
- ~~Update URLs in link components to match current locale~~

~~Create a minimal working example website with:~~

- ~~Home, About, Products, Where to buy, and Contact pages; and Product sub-pages for JabSok, JabKis, SntOlj.~~
- ~~Working internationalization and routing~~
- ~~Finalized design (colors, fonts, layout, etc)~~
- ~~Placeholder content is fine (e.g. solid color rectangles as image placeholders until you have images of Gaia products, Lorem Ipsum content for text until you have text content ready)~~

### Website content (text and images)

- ~~Write text content for Home, About, Products, Where to buy, and Contact pages; and Product sub-pages for JabSok, JabKis, SntOlj.~~
- ~~Create Slovene translations for all English text.~~
- ~~Prepare images for website (take yourself or collect from existing files):~~
  - ~~Individual pictures of labeled products: JabSok, JabKis, SntOlj~~
  - ~~Spread of all products on a dark background for website cover image~~
  - ~~Various landscape photos: meadows, fall leaves, apple blossoms, snow, sunsets, forest, etc.~~
  - ~~Various production photos: apples in wood crates, kis cisterns in štala, pressing barrel, preša, etc.~~
- ~~Publish website:~~
  - ~~Acquire ownership of gaia.si (research Slovene DNS providers, create an account somewhere, visit Dominik and hopefully amicably arrange ownership transfer)~~
  - ~~Get read/write access to DNS records for gaia.si~~
  - ~~Transfer gaia.si nameservers and DNS records to Cloudflare in preparation for publishing on Cloudflare pages~~
  - ~~Ensure site assets (fonts, images, CSS is properly bundled with app for production)~~
  - ~~Publish website on Cloudflare~~
  - ~~Point gaia.si to new website~~

### BeforeMayUSA2025 website additions

- ~~Travniski sadovnjak page describing meadow orchard definition and cultural/ecological significance, with pictures from TV47~~
- ~~Sorte jablan page with pictures and descriptions/history of each apple variety on the farm~~
- "Kid (family) trying to make a business happen" story
- "Sell botique eko products at reasonable prices" story

### Online shop

~~Create a web app that allows customers to place orders from website (so have a backend with a database of products, and admin interface for managing products, and a frontend where a customer can assemble an order):~~

- ~~Create CRUD Laravel web app for Gaia's products and orders~~
- ~~Prototype frontend design using e.g. Tailwind UI e-shop example as inspiration~~
- ~~Learn to send emails from web app; sign up for email provider; link web shop and email provider, test functionality~~
- ~~Implement ordering funtionality: hook up forms for product input and customer information; implement "shopping cart" to track customer order; store orders in database~~
- ~~Create order confirmation page; redirect customers to order confirmation page on successful order~~
- ~~Send customers order confirmation by email; Elijan is notified by email on each order~~
- ~~Add delivery options and add address field to checkout form~~
- ~~Add payment method options (cash, UPN) to checkout form~~

### Online shop — PDF generation

- ~~Design PDF prototypes of order confirmations for customer's orders using dummy data~~
- ~~Create LaTeX templates that render to order confirmations when populated with data from a customer's order~~
- ~~Generate order confirmations from web app~~
- ~~Send customers PDF order confirmations by email upon customer placing and order~~
- Repeat for predračuns
- Repeat for računs

## Financials and legal

### Financials (legal research)

Answer questions:

- ~~What are the legal requirements for the direktor of a d.o.o. (do they have to be paying prispevki? Can the direktor be an s.p.?)~~
- ~~Clearly enumerate all obligations of a micro d.o.o. like Gaia (e.g. quarterly DDV reports and payments; end-of-year financial reports; keeping books in accordance with SRS, etc.)~~
- ~~Requirements for bookkeeping (any required format for transactions or account names; certification requirements for bookkeeping software, etc.)~~
- ~~Requirements for legally accepting cash as payment (akt o blagajniškem poslovanju; acquiring digitalno potrdilo; protocol and relevant davčna blagajna software/hardware for selling products for cash in accordance with `Pravilnik o izvajanju Zakona o davčnem potrjevanju računov`; protocol for depositing cash at bank; etc.)~~
- ~~Find authoritative source for konti used by Slovene Accounting Standards (SRS)~~

### Financials (bookkeeping)

- ~~Map each current Gaia account to an appropriate account used by Slovene Accounting Standards (SRS)~~
- ~~Go through books and enumerate common transactions (e.g. paying for services, paying for goods, invoicing for software development, invoicing for physical goods, etc)~~
- ~~Document correct bookkeeping recipe for each transaction in accordance with SRS.~~
- ~~Work through proper SRS accounting workflow of a full lifecycle for e.g. JabSok, from purchasing empty bottles to closing books with end-of-year sales revenue.~~
- ~~Update books so that all transactions use SRS-compliant accounts and bookkeeping workflows.~~

### Financials (davčna blagajna)

- ~~Acquire digitalno potrdilo za pošiljanje računov v davčno potrjevanje~~
- ~~Draft and sign an `Akt o blagajniškem poslovanju` for Gaia (enumerate points of sale, authorized salespeople, which products may be sold for cash, which points of sale accept cash; determine how much cash can be held at a given time; determine how regularly cash must be deposited at bank)~~
- ~~Set up and learn to use davčna blagajna software~~
- ~~Acquire a receipt printer and learn to use; or otherwise solve workflow of giving customers a copy of receipt (solution, for now: send PDF of receipt to customers)~~

### Financials (taxes and financial reports)

- ~~Document protocol for paying DDV following DDV-O (quarterly DDV form submitted to FURS), and recipe for recording the transactions in your books.~~
- ~~Create script to programatically generate a DDV report from journal entries for a given date range~~
- ~~Clearly enumerate all required end-of-year financial statements (balance sheet, income statement, etc.), their deadlines, and to which government agencies they must be submitted~~
- ~~Find official sources for structure of each financial report~~
- ~~Document recipe for closing books in accordance with SRS at the end of each accounting period.~~
- ~~Document recipe for preparing balance sheet and income statement from journal entries.~~
- ~~Create script to programatically generate a balance sheet from journal entries for a given point in time.~~
- ~~Create script to programatically generate an income statement from journal entries for a given date range.~~
- ~~Document recipes for submitting financial statments (website to visit, authentication process, etc.)~~
- ~~Document protocol for calculating paying DOD-DDPO (end of year report submitted to FURS)~~

### Financials (compliant bookkeeping software)

Acquire or set up bookkeeping software in compliance with SRS and ZDavP člen 38.

Either find, set up, and learn to use some sort of Slovene-oriented bookkeeping SaaS, or see if you can find a solution by combining plain-text accounting with immutable audit logs or append-only ledger tables.

### Legal: direktorstvo

- ~~Gaia direktorstvo resolved — transferred to a Mastnak without obligation to pay prispevki~~
- ~~Draft all legal documents needed for direktorstvo transfer~~
- ~~Sign and store copies of *Pogodba o poslovodenju*~~

## Facilities and infrastructure

### Miscellaneous

Establish facilities for inventory-related workflows:

- ~~Arrange basement so family reserves of pickles/preserves/drinks/Gaia-products-set-aside-for-home-use etc. are in a separate part of the basement from Gaia inventory.~~
- ~~Make a "photo studio" where you have a nice, well-lit wooden table with a white background on which you will take product pictures~~
- Workflow for delabeling returned bottles (can be in štala by water faucet!)
- Workflow for cleaning returned bottles and storing for future use (can be in štala by water faucet!)
- Establish clean, dedicated storage space for packaging (bottles, caps, etc.) and labels

### Office

Set up an office in the attic to use as a dedicated Gaia space:

- ~~Set up a computer desk with monitor and comfortable chair~~
- ~~Clean out existing attic cabinets/drawers/shelves to repurpose for storing Gaia materials~~
- Sort through all relevant legal documents, akts, receipts, etc.; classify by document type; determine what needs to be stored
- Make electronic scans of all need-to-be-stored documents; ensure each has a corresponding electronic scan in a well-defined location on file system.
- Store physical documents in well-defined cabinets/shelves in attic office

### JabSok

- ~~Clean existing JabSok bottles of dust/evaporated fruit juice, place in crates, label crates with quantity and lot number. Do this sproti, a gajbica at a time, until suddenly all the JabSok is clean and labeled and inventoried.~~
- ~~Store JabSok bottles in crates with a well-known, fixed number of bottles per crate, for easy inventory.~~
- ~~Assemble enough plastic crates to store cca 1000 JabSok330 bottles.~~
- ~~Prototype wooden crate for storing and transporting JabSok750.~~
  ~~Crates should be solid enough to comfortably carry cca 25 kg of bottles, and modularly stackable to e.g. 4 levels high.~~
- ~Label JabSok750 creates with UIDs~~
- ~~Set up convenient system for labelling crates, e.g. Jysk box attached to wall. Should include:~~
  - ~~Color-coded notecards for writing on~~
  - ~~Markers/pens for writing on notecards~~
  - ~~Permanent marker for writing best-by date on bottles~~
  - ~~Thumbtacks for attaching cards to crates~~
- ~~Find/purchase/accumulate enough plastic crates to hold cca 1000 bottles of JabSok330, along with a few extra crates to use for staging.~~
- ~~Move JabSok and crates to MiniŠtala~~
- ~~Set up a labelling station in MiniŠtala. Include labelling table, labelling machine, box/jar of spacer jigs, box(es) to hold labels; box for accessories.~~
- ~~Separate JabSok into Gaia stock and personal use stock; label each crate using one color for Gaia stock and one for personal use.~~
- Build enough wooden crates for cca 1000 bottles of JabSok750, along with a few extra crates to use for staging.

### JabKis

- ~~Test each of the three cisterns, record subjective differences in taste, qualities, etc..~~
- ~~Set up a friction-free bottling mechanism for filling jugs/bottles from IBCs.~~
- Remove lingering construction waste and other garbage from štala.
- Pressure wash and sweep out štala floor of dust, mold, etc.
- Pressure wash empty cisterns.
  Perhaps transfer existing JabKis to cleaned empty cisterns and clean out previously-full cisterns, too.
- Set up a pumping workflow that can transfer JabKis between IBCs.
- Classify and label each IBC as either home use or Gaia use.
- Staging jugs: acquire enough 3-5 liter food-safe HDPE jugs to hold e.g. 25 L personal and 25 L Gaia use; label each jug according to personal use or Gaia use.
- Have bottles, caps, and stoppers for JabKis stored in crates in MalaŠtala.
- Set up a bottling station for filling JabKis from funnel—sink with drainage, water supply, and funnel(s) conveniently hanging on wall, towels/rags for wiping down spills.

### StnOlj

Bottling station for filling SntOlj from funnel—sink with drainage, water supply, and funnel(s) conveniently hanging on wall, paper towels for wiping down spills.

- Label each 5 L glass jug as either home use or Gaia use.
- Staging jugs: acquire enough 0.75 to 1 liter glass bottles to hold e.g. 5 L personal and 5 L Gaia use; label each bottle according to personal use or Gaia use.
- Set up a friction-free bottling mechanism for filling staging bottles from 5 L jugs.
- Set up a friction-free bottling mechanism for filling Bottle100 from 5 L jugs and staging bottles.
- Have bottles, caps, and stoppers for StnOlj stored in crates in MalaŠtala.
- Set up a bottling station for filling SntOlj from funnel—sink with drainage, water supply, and funnel(s) conveniently hanging on wall, paper towels and detergent for cleaning up spills.

### Supporting infrastructure for products

- ~~Location for "on-show" products at TV47 and LJ16, where if someone visits you at TV47 or LJ16 and hears about Gaia and asks "oh cool can I see your stuff" you just hop to the product area and pull out a few samples.~~
- ~~Storage area for kozarci za vlaganje: 720 ml jars, 330 ml jars, assorted size jars, 85 mm lids, assorted size lids.~~
- ~~Storage area for tea bags~~
- ~~JabKis bottling: storage area for 5-10 liter jugs; good workflow for filling jugs from IBCs; storage area for filled jugs; storage area for Bottle500 and Bottle1000 and associated caps and inserts; funnels for filling bottles~~
- I need more JabSok750 kištas: make enough kištas to hold e.g. 1000 bottles of JabSok750.
- Set up a stainless-steel sink in štala to use for washing, product testing, etc.
- SntOlj bottling station: bottling 100 ml bottles with 18 mm diameter neck and bottling larger bottles, e.g. 35 mm diameter and up.
- Bottle delabeling and cleaning station: crates to store bottles staged for cleaning, vessel for soaking bottles, water supply, sponges to clean up, crates for delabeled bottles
- Burts production: dedicated storage for olive oil, coconut oil, and beeswax; scale for measuring ingredients; notebook for recording recipes for R&D; double boiler setup; storage for glass jars to hold finished Burts; storage for finished goods.

## Inventory

You need to know how much JabSok330, JabSok750, and JabKis you have to sell via Gaia, as well as available Bottle1000 and Bottle500 for selling JabKis.
Like frictionless, immediately, so when a wholesale customer asks "how much of X do you have/can you supply" you can rattle the number off immediately.

### Research and bookkeeping workflows

- ~~Clearly enumerate which inventory items must be kept track of in a dedicated inventory ledger to be compliant with SRS~~
- ~~Document SRS-compliant format of inventory ledgers~~
- ~~Do `the_bottles`, an analog of `the_apples` for inventory bookkeeping: enumerate transactions (e.g. purchase of empty bottles, consuming of bottles to produce juice, labelling bottles, selling juice, etc.).~~
 ~~Record Beancount recipe for associated at-cost bookkeeping of each transaction.~~
- ~~Make a demo/proof-of-concept where you record a few dummy transactions representing various stages of the production lifecycle for e.g. JabSok and JabKis and then practice querying which cost lots of which materials you have in inventory at any given time over the production period.~~
- Meatspace infrastructure to support recording changes in 320, 602, and 630 inventory accounts during each phase of production (e.g. notebook in basement coupled with secondary Beancount ledger).

### Establish inventory

- Take physical inventory of required items
- Based on results of inventory-taking, create inventory ledgers in Beancount for relevant items

## Marketing

### Pricing investigation

- ~~Record prices and other relevant parameters (country of origin, packaging, manufacturer, etc.) of all JabSok and JabKis sold at major LJ supermarkets (Hofer, Lidl, Mercator, Spar, Tuš, Mueller)~~
- ~~Transfer prices to computer-readable format, e.g. JSON/YAML or a database~~
- ~~Write simple scripts to find average price liter under given constraints (e.g. bio/not bio, Slovene/not Slovene, by store, etc.)~~
- ~~Investigate graphs/charts/etc. for presenting data~~

### Visits and spreading word

~~Visit family and friends to show the items you are selling at Gaia, ask for advice and contacts, pitch products:~~

- ~~Srečo and Nada~~
- ~~Matjaž and Cvetka~~
- ~~Oskar~~
- ~~Pretners~~

### Sales

- Contacts: try reaching out for leads/advice to:
  - ~~Žan~~
  - ~~Maj via Oskar~~
  - Klemen
- StnOlj wholesale: Nada's massage friend and contacts
- Research possible wholesale customers for JabSok in LJ: fancy "Slovenian" local-goods restaurants, stores, etc.; come up with a list of e.g. 5-10 possible customers

## Pri Ramšaku rebrand

- Add brand-agnostic updates: "veseli smo vrnjene embalaže", "uporabno najmanj do", "sorta:"

- Rebrand labels for JabSok, JabKis:
  - Kmetija Gaia -> Pri Ramšaku
  - SntOlj flower -> 3 apples (ali pač?)
  - URL updated to point to priramsaku.si
- Make new labels for Tropinski Kis: use design of JabKis; change name to "tropinski kis"; update description to note production from tropine, gentler qualities, recommended use for drinking
- Labels for JabKrh, HruKrh: "Jabolčni|Hruškini krhlji"; "sorta:"; "iz visokebelnjega sadovnjaka"; URL to product page

## Product R&D

Establish new Gaia products with good supporting infrastructure:

- Teas: drying rack for drying herbs, vessels for intermediate transfer/transport; storage for dried herbs, storage for packaging bags.
- Jams: station for washing; bowls/containers for temporary holding and transport; pitting workflow as necessary; storage for canning jars; burner and pots for cooking; burner, pots, canning tongs, rack for canning; storage for finished goods.
- ~~Dried fruit: station for washing; station for slicing; bowls/containers for temporary holding and transport; station for drying; storage for dried goods.~~
- Burt's: dedicated storage for olive oil, coconut oil, and beeswax; double-boilder setup; storage for glass jars; storage for finished goods;
- Gift boxes: known cut list; jigs for repetive cuts; dedicated storage for stock meant for gift boxes; supply of dedicated screws and nails for gift boxes; finishing station; dedicated storage area
- Soap: storage for raw ingredients; production station with dedicated tools; molds; curing area; storage area;

## Side quests

### Photography

~~Learn to use a manual DSLR camera (in preparation for taking photos for Gaia website):~~

- ~~Grok effects of: aperture, shutter speed, and ISO~~
- ~~Prepare and practice list of pedagogical exercises for learning to control above parameters (e.g. take close-up picture of object with a blurred backgrouund, take a clear picture of a fast-moving object like a fan blade, etc.)~~
- ~~Prepare "photo studio" where you have a dedicated nice, well-lit wooden table with a white background for frictionlessly taking product pictures without having to lug dining table around the house into a well-lit location~~
- Build background boards for portable photography table/stand
- Retake all production Gaia images on a DSLR, both for practice and to have good images

### Administrative tasks

- ~~Move hosting of Gaia webmail from Dominik to a host you do business with directly~~
- ~~Call up Delovska Hranilnica and cancel mobile banking subscription~~
- ~~Regain access to A1 account, and switch contact information to email/phone I control~~
- ~~Switch A1 internet/phone plan to something more economical~~
- ~~Resolve AJPES contact info and ensure invoices are sent to an email I control~~
- Resolve renting a POS terminal to allow credit card payments
- Update GS1 contact information to email/phone I control
- Cancel GS1 EAN code contract

### Business card

Gaia business card: contact info and link to website.
Ideas: SntOlj flowers like SntOlj label; orange color scheme with SntFlower logo; reddish color scheme with three apple logo.
