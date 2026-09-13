# Dev Stack — Browser-ready project

## Vite development

```bash
npm install
npm run dev
```

## Direct browser preview

You can also double-click `index.html`. When the file is opened with
`file://`, the page switches to a standalone browser implementation.

The standalone mode does not require npm, Vite, React, Babel, Tailwind, or a
local HTTP server. It includes the same technology catalog and stack
interactions and uses the same notification visual language as the React app.

## Architecture

The normal development implementation remains a clean React/Vite application
inside `src/`. The direct-browser renderer exists only because browsers
restrict ES module imports and local JSON `fetch()` requests from `file://`.

The technology catalog for Vite/React remains in `public/technologies.json`.
