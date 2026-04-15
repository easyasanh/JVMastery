# JVMastery

JVMastery is a static core Java interview practice app designed to deploy cleanly to GitHub Pages with no build step. It includes hundreds of questions focused on:

- language fundamentals
- object-oriented programming
- exceptions
- strings and immutability
- interfaces, inheritance, and polymorphism
- records, enums, sealed classes, and modern Java features
- JVM essentials and memory behavior

## Features

- 300+ core Java interview questions
- Difficulty labels: `Beginner`, `Intermediate`, `Advanced`
- Likelihood labels: `Very Common`, `Common`, `Occasional`, `Rare`
- Search, difficulty, likelihood, and progress filters
- Answer reveal flow for self-testing
- Local progress tracking with `localStorage`
- GitHub Pages workflow included

## Local usage

Because the project is fully static, you can open [`index.html`](/Users/Andrew/Documents/New%20project/index.html) directly in a browser or serve the folder locally.

If you want a local server, one simple option is:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, make sure GitHub Pages is enabled with the source set to `GitHub Actions`.
3. The workflow in `.github/workflows/deploy-pages.yml` will publish the static site whenever you push to `main`.

## Content model

Questions are defined in [`app.js`](/Users/Andrew/Documents/New%20project/app.js). The bank is generated from a large set of core Java theory subjects, each expanded into multiple interview-style prompts and annotated with both difficulty and likelihood so common questions stay easy to prioritize.
