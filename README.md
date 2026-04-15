# Java Interview Drill

Java Interview Drill is a static interview practice app inspired by question-bank study products, but focused on Java developer job interviews. It is designed to deploy cleanly to GitHub Pages with no build step and includes hundreds of questions across:

- Core Java
- Collections
- Concurrency
- JVM and memory
- Spring and Spring Boot
- SQL and persistence
- Testing
- API and system design
- Behavioral interview prep

## Features

- 300+ Java interview questions
- Difficulty labels: `Beginner`, `Intermediate`, `Advanced`
- Search, topic, difficulty, and progress filters
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

Questions are defined in [`app.js`](/Users/Andrew/Documents/New%20project/app.js). The base bank contains curated prompt-and-answer cards, and the app also expands structured scenario templates so the final library reaches the "hundreds of questions" range while keeping the material varied and interview-focused.
