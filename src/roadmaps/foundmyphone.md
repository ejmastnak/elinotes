---
title: Found My Phone?
date: 2024-12-29
description: Roadmap for developing Found My Phone?
---

# Found My Phone? roadmap

## Week 1: MVP image generation

- Decide info needed for on screen saver (e.g. name, email, backup contact phone)
- Research and determine appropriate tool for automated command-line screensaver generation (ImageMagick, Pillow, etc.)
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
- Create script to generate an app lock screen with appropriate dimensions given contact info and phone dimensions.

## Week 2: MVP web app

- Create specification and documentation for app following standard Laravel recipe (plan database structure, auth policies, backend/frontend requests, validation, routing, controllers and services, structure of frontend pages, etc;)
- Implement app following specification

## Week 3: Learn analytics

- Deploy app
- Learn to and document tracking page views with e.g. Plausible
- Learn to Laravel-log use of download form
- Track number of people visiting page vs. actually using the download form

## Week 4: Feedback

Show the app around. What works, what doesn't? what features do people want? E.g.

- Custom colors
- Different languages
- Custom text
- Custom background image, etc.

Iterate as necessary.
