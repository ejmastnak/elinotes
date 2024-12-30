---
title: Found My Phone?
date: 2024-12-29
description: Roadmap for developing Found My Phone?
---

# Found My Phone?

## Week 1: MVP image generation

- Decide info needed to generate a screen saver
- Determine appropriate tool for automated command-line screensaver generation
- MWE: generate PNG of given geometry with given colored background
- MWE: add text "Hello world" text placed in specific location, say offset 100 px from top and centered.
- MWE: add rectangle with colored border, background, and rounded corners
- MWE: custom font, font size, font colors, border size, border color, background colors
- Accumulate data:
   For e.g. iPhone 7 (Dad), iPhone 7 Plus (Me), Mom's iPhone, Gaia phone, Martin's phone, accumulate:
  - Model
  - OS
  - Screen resolution
  - Safe area
- Shell script that generates a screen saver given screen_x, screen_y, safe_t, safe_b

## Week 2: MVP web app

- Create specification and documentation for app following standard Laravel recipe
- Write app following standard Laravel recipe, implementing all features in specification
- Deploy app

## Week 3: Analytics

- Track page views with e.g. Plausible
- Laravel-log people using download form
- Track number of people visiting page vs. actually using the download form

## Week 4: Feedback

What features do people want?

- Custom colors
- Different languages
- Custom text
- Custom background image
- Remove didyoufindmyphone.com, etc.
