# Repository Guidelines

## Project Structure & Module Organization
`src/` contains the Angular application and SSR entry points. Use `src/app/` for the root component, route definitions, and app-level config files such as `app.config.ts` and `app.routes.ts`. Keep static assets in `public/` (`favicon.ico`, `sitemap.xml`, images) and treat `dist/` as generated output only. Repo-level build configuration lives in `angular.json`, `tsconfig*.json`, `.editorconfig`, and `.prettierrc`.

## Build, Test, and Development Commands
Install dependencies with `npm install`.

- `npm run start` starts the Angular dev server at `http://localhost:4200/`.
- `npm run build` creates the production browser and server bundles in `dist/demo-app/`.
- `npm run start:prod` runs the SSR server from the current build output.
- `npm run watch` rebuilds continuously in development mode.
- `npm run test` runs unit tests through Angular’s test runner with Vitest.

For Azure Web App deployment, build first and use `node dist/demo-app/server/server.mjs` as the start command.

## Coding Style & Naming Conventions
Use 2-space indentation, UTF-8 files, trailing newline insertion, and single quotes in TypeScript as defined in `.editorconfig` and `.prettierrc`. Keep lines near the configured `printWidth` of 100. Prefer Angular standalone patterns already used in `src/app/app.ts`. Name Angular files by feature and role, for example `hero-banner.component.ts` or `contact-form.service.ts`.

Format changes with `npx prettier --write "src/**/*.{ts,html,css}"`.

## Testing Guidelines
Place tests next to the code they cover using the `*.spec.ts` pattern, as in `src/app/app.spec.ts`. Add or update tests for UI logic, language switching, theme switching, and SSR-safe browser access when behavior changes. Run `npm run test` before opening a PR.

## Commit & Pull Request Guidelines
Recent history favors short, change-focused commit subjects such as `Update SEO copy` and `Change trigger branch from 'master' to 'azure'`. Keep commits small and use a concise imperative summary; include scope when helpful, for example `app: update theme persistence`.

PRs should include a short description, testing notes, linked issue if one exists, and screenshots for visible UI changes. Call out any deployment or configuration impact explicitly.
