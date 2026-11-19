# Personal Website

Source for [viniciuslongaray.dev](https://viniciuslongaray.dev), built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages by `.github/workflows/pages.yml`.

- `npm start`: local preview at http://localhost:8080
- `npm run build`: build into `_site/`
- Content lives in `src/_data/*.yml` (profile, timeline, projects).
- Project star counts come from the GitHub API at build time (`GITHUB_TOKEN` is optional locally; without network the build warns and renders no counts). The workflow also rebuilds daily at 06:17 UTC to keep them current.
