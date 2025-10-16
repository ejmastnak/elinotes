---
title: EliPortfolio
date: 2025-08-10
description: EliPortfolio
---

# EliPortfolio roadmap

## Sketches

### TMG

- ~~In a markdown file sketch outline of algorithm for computing TMG parameters (input, output, algorithm)~~
- ~~In a markdown file sketch outline of MC binary decoder (input, output, algorithm)~~
- ~~Sketch high-level steps at "systems level" of MC sensor, just in a markdown file is fine~~
- ~~Decide pictures/screenshots to include and features to present for SPM signal analysis~~
- ~~Sketch of features of ChatTMG (include publications, demonstration videos, etc.)~~
- ~~ChatTMG: research migration to Responses API; understand RAG/tokenizing/chunking/embedding at a technical level; research options for file-augmented TMG-related knowledge for chatbot.~~
- ~~Research proof of concept API documentation page for `tmg-toolkit` Python library, e.g. using Sphynx/MkDocs/etc.~~
- ~~Outline of technical write-up: using SPM to detect potentiation (input data, algorithm/analysis, results/takeaways)~~

### Gaia

- ~~Labels write-up: list every technical term in LabelProfi order that you will explain~~
- ~~UPNQR: make a clear list of all specs you need to meet standard; find canonical reference to standard~~
- ~~Scribus color management write-up: sketch steps at a "system level" from inputs to outputs in a markdown file.~~
- ~~Look through `the-apples.md` and write out plan for steps needed to make complete and presentable~~
- ~~Label setup in meatspace: list tips and pictures to take in a markdown file~~
- ~~Gaia PDF documents write-up: sketch steps at a "system level" from inputs to outputs in a markdown file.~~
- ~~Look through KateriKonto and polish; publish changes~~
- ~~Gaia crates: list content to include and pictures to take~~

## Clean-up

### TMG

- ~~COBISS grind: sit down with MC sensor and Sensemotion hardware, get it beeping again, document how the the system works from analog MC data to output sound:~~
  - ~~In each C program, write a block comment at the top explaining the program's role in the big picture~~
  - ~~Write markdown files showing how the individual C programs fit together and exchange information~~
  - ~~Write markdown files explaining how the hardware and software interact and exchange information~~
- ~~MC binary decoder: document code, place in Git repo, refactor to best practices as necessary~~
- ~~ChatTMG: migrate ChatTMG to Responses API; implement streaming; document recipe for creating a streamed chatbot with Responses API~~
- ~~TMG Toolkit/SPM presentation: prepare inteactive demo page where users can interact with interface~~
- ~~TMG Toolkit/SPM presentation: re-write user guide to be actionable~~
- ~~TMG Toolkit/SPM presentation: re-do auth workflow to protect POST routes for SPM analysis, but to allow visits to SPM page. Similar to e.g. EliMusic.~~
  ~~Record recipe at e.g. `laravel/axios/protect-post-and-error-on-403`~~
- ~~Critically review ListeningToMuscles presentation page and write up changes to make presentable as a portfolio project.~~

### Gaia

- ~~UPN QR: place code in a git repo, refactor to a user-friendly API that accepts a dict of UPN data as input, switch to proper Python package directory structure~~
- ~~UPN QR: make a basic but "proper" test: begin with dummy serialized data (e.g. in a JSON/YAML file), encode as UPN QR, decode QR to text with e.g. `zbarimg`, ensure lines in text match up with corresponding fields in original serialized data~~
- COBISS grind: borrow Turk's Računovodstvo again, sit down at MKL, grind out `the-apples.md` and `the-bottles.md` to be fully SRS/Turk complete and compliant from opening books that year to closing accounts for that year; then make a write-up for each noting all the details and caveats and tricks and so on to be aware of.

## Implementation

### VitePress infrastructure

- ~~Create a VitePress site to store Portfolio~~
- ~~Learn and document necessary VitePress skills for presenting content: including static assets, optimizing images, highlighted code blocks, LaTeX-like mathematical formulae~~
- ~~Publish site at `portfolio.ejmastnak.com`~~

### TMG implementation

- ~~MC binary decoder technical write-up~~
- ~~Publish and polish API documentation page for TMG toolkit~~
- TMG parameter computation algorithm technical write-up
- ChatTMG technical write-up
- TMG Toolkit/SPM presentation: take screenshots and create interactive demo page with sample results
- Future: ListeningToMuscles presentation page 

### Gaia implementation

- Technical write-up of PDF generation workflow via Jinja with Laravel backend
- Presentation of web shop and website
- Technical write-up: SSG with i18n and Vue in the context of Gaia website
- Technical write-up for `the-apples.md` accounting workflows, e.g. through the lens of "small business accounting in Slovenia"
- Scribus color management technical write-up
- UPNQR technical write-up
- TLDR/bullet-list "breakdown of LabelProfi order" describing each technical term, with pictures.
