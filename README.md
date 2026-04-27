# JVMastery

JVMastery is a static Java interview practice app designed to deploy cleanly to GitHub Pages with no build step. It includes the top 100 likely prompts for a mid-senior Java interview, including easy calibration questions and deeper trade-off questions.

The question bank focuses on:

- language fundamentals
- object-oriented programming
- exceptions
- strings and immutability
- interfaces, inheritance, and polymorphism
- streams, lambdas, records, sealed classes, and modern Java features
- JVM essentials, memory behavior, and garbage collection
- Spring Boot, persistence, testing, observability, and architecture trade-offs

## Features

- 100 curated Java interview questions
- Difficulty labels: `Easy`, `Medium`, `Hard`, `Difficult`
- Percentage likelihood estimates for each question
- Difficulty, likelihood, topic, and progress-focused practice flows
- Answer reveal flow for self-testing
- Topic mastery and average score tracking with `localStorage`
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

Questions are defined in [`questions.js`](/Users/Andrew/Documents/New%20project/questions.js). Likelihood percentages are practical estimates based on recurring Java interview patterns rather than measured probabilities from one employer.
