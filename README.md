# Jeremy Zheng — portfolio

A bilingual engineering portfolio built with React 19, Vite 7, Tailwind CSS 3, and Motion. Published at https://jeremyunoz.github.io/.

## Develop

Use Node 20.19 or newer. The existing `.nvmrc` selects a compatible version.

```sh
npm ci
npm run dev
```

## Edit content

- `src/content.js`: both language dictionaries, project content, category filters, education, contact links, and résumé path.
- `src/App.jsx`: page structure, routing, project filters, system explorer, and preference controls.
- `src/index.css`: design tokens, layout, responsive rules, and themes.
- `public/assets/`: optimized project photos and the downloadable résumé.

Keep English and Chinese dictionary keys aligned. To add a project, add one entry to `projects` with both `en` and `zh` content; navigation and case-study routes are derived from it.

## Check and build

```sh
npm test
npm run build
npm run preview
```

The tests check filter membership, bilingual content coverage, and local assets. Browser checks cover layout and interactions. `dist/` contains the static production site. No server, secrets, or environment variables are needed. The archive is never included in `dist/`.

## Publish to GitHub Pages

The repository is https://github.com/jeremyunoz/jeremyunoz.github.io. The configured older remote URL redirects to this repository.

```sh
npm run deploy
```

This publishes **generated files** from `dist/` to the remote `main` branch using the existing `gh-pages` workflow. Keep editable source on the `codex/portfolio-rebuild` branch or another source branch; do not merge it directly into the generated deployment branch. The publish command does not save source changes automatically.

In GitHub Settings → Pages, select “Deploy from a branch,” `main`, and `/ (root)` to enable the site. The old site was unpublished and its source set to None during archiving. Re-enable publication only when the replacement is ready to go live.

The existing `/#/about` and `/#/projects/...` URLs work with GitHub Pages without server rewrite rules. Main navigation uses section anchors within the hash router.

## Offline archive

`archive/2026-10-22/` holds the previous source snapshot, exact deployed files, verified Git bundle, hashes, and restoration instructions. It is ignored by Git and not published. Back this folder up separately. To open it offline, follow its `README.md`.

See `DESIGN.md` for the design and content decisions.
