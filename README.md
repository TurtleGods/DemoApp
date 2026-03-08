# DemoApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.1.

## Demo Scope

This app is now a portfolio demo page with:

- English / Traditional Chinese language switching
- Tailwind-styled theme switching (Ocean / Forest / Sunset)
- Placeholder sections for profile, skills, and contact info
- Backend intentionally deferred for a later phase

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Azure App Service (Web App) notes

Use Node.js runtime on Azure Web App and run the SSR server bundle:

1. Build: `npm run build`
2. Start command on App Service: `node dist/demo-app/server/server.mjs`
3. Set app setting `WEBSITE_NODE_DEFAULT_VERSION` to a modern LTS (Node 20+ recommended)
4. Deploy with your preferred method (ZIP deploy, GitHub Actions, or Azure DevOps)

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
