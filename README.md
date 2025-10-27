# Portfolio

This site showcases Prem Bhajaj’s background, projects, and experience in AI, cloud, and data science. It is built with Vite + React, Tailwind, and shadcn-based components.

## Features

- About, Education, Experience, Projects, and Contact sections driven directly by resume content.
- Responsive navigation with smooth-scroll anchors.
- Publications section linking to Springer, Taylor & Francis, and IRJET articles.

## Development

```bash
npm install
npm run dev        # starts Vite on http://localhost:5173
npm run build      # production bundle
```

## Deploying to GitHub Pages

The repo is configured to publish to `https://pbhajaj.github.io/pbhajaj/`.

1. Commit/push your latest changes to `main`.
2. Run `npm install` once to ensure `gh-pages` is available.
3. Deploy with `npm run deploy`. This runs `npm run build` (using `base: "/pbhajaj/"`) and pushes `dist/` to the `gh-pages` branch via the `gh-pages` CLI.
4. In the GitHub UI, set Pages to serve from the `gh-pages` branch (root). After a short delay the site will be live at the URL above.

## Connect

- LinkedIn: https://www.linkedin.com/in/prembhajaj/
