# Azure Preparation Plan

## Status
- Current phase: `Execution`
- Overall state: `Ready for Validation`

## 1. Analyze Workspace
- Mode: `MODIFY`
- Existing project: Angular 21 app with Tailwind already configured.
- Goal: Turn starter page into a demo portfolio page and prepare for Azure App Service deployment.

## 2. Requirements Captured
- Build a demo Angular page.
- Support multilingual content: English and Traditional Chinese.
- Support Tailwind-based theming with runtime theme switching.
- Provide placeholder sections for personal capability information to be filled later.
- Keep backend deferred for later implementation.

## 3. Architecture Decisions
- Frontend: Angular standalone app.
- Styling: Tailwind CSS + CSS custom properties for theme palettes.
- Internationalization approach: Runtime dictionary toggle (EN/ZH-TW) for demo velocity.
- Deployment target: Azure App Service (Linux, Node runtime) for SSR app host.

## 4. Planned Changes
- Replace default Angular starter UI with:
  - language switcher
  - theme switcher
  - hero/about/skills/contact placeholder sections
- Add app-level state for selected language and theme.
- Persist language/theme in `localStorage`.
- Add deployment guidance for Azure Web App Service in `README.md`.

## 5. Validation Plan
- Completed: `npm run build` succeeded.
- Verified: no TypeScript/template build errors.

## 6. Next Skill Handoff
- After preparation, run `azure-validate` before deployment (`azure-deploy`).
