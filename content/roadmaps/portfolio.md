---
title: EliPortfolio
date: 2025-08-10
description: EliPortfolio
toc: true
---

# EliPortfolio

## Sketches: TMG

- ~~In a markdown file sketch outline of algorithm for computing TMG parameters (input, output, algorithm)~~
- ~~In a markdown file sketch outline of MC binary decoder (input, output, algorithm)~~
- ~~Sketch high-level steps at "systems level" of MC sensor, just in a markdown file is fine~~
- ~~Decide pictures/screenshots to include and features to present for SPM signal analysis~~
- Sketch of features of ChatTMG (include publications, demonstration videos, etc.)
- Proof of concept API documentation page for `tmg-toolkit` Python library, e.g. using Sphynx

## Sketches: Gaia

- ~~Labels write-up: list every technical term in LabelProfi order that you will explain~~
- ~~UPNQR: make a clear list of all specs you need to meet standard; find canonical reference to standard~~
- ~~Scribus color management write-up: sketch steps at a "system level" from inputs to outputs in a markdown file.~~
- ~~Look through `the-apples.md` and write out plan for steps needed to make complete and presentable~~
- ~~Label setup in meatspace: list tips and pictures to take in a markdown file~~
- ~~Gaia PDF documents write-up: sketch steps at a "system level" from inputs to outputs in a markdown file.~~
- ~~Look through KateriKonto and polish; publish changes~~
- ~~Gaia crates: list content to include and pictures to take~~

## Clean-up: Gaia

- UPN QR: place code in a git repo, refactor code to use a proper `if __main__` statement
- UPN QR: make a basic but "proper" test: begin with dummy data serialized data (e.g. in a JSON/YAML file), write data to UPN text, encode UPN text in QR, decode QR to text with e.g. `zbarimg`, ensure txt files match byte-for-byte.
- COBISS grind: borrow Turk's Računovodstvo again, sit down at the library, grind out `the-apples.md` and `the-bottles.md` to be fully SRS/Turk complete and compliant from opening books that year to closing accounts for that year; then make a write-up for each noting all the details and caveats and tricks and so on to be aware of.

## Clean-up: TMG

- COBISS grind: sit down with MC sensor and Sensemotion hardware, get it beeping again, document how the the system works from analog MC data to output sound:
  - In each C program, write a block comment at the top explaining the program's role in the big picture
  - Write markdown files showing how the individual C programs fit together and exchange information
  - Write markdown files explaining how the hardware and software interact and exchange information 
