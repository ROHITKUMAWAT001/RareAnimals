# WildPedia

WildPedia is a Next.js application built with Tailwind CSS showcasing wildlife species and conservation information. It includes a small API, UI components, Prisma-powered local data store, and a test suite.

## Project Highlights
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS (v4) with shadcn-style UI primitives
- Radix UI primitives for accessible components
- Prisma (SQLite) for local development
- Vitest for unit tests

## Quickstart

Prerequisites:
- Node.js 18+ (recommended)
- npm

Install dependencies:

```bash
npm install
```

Generate Prisma client (after editing schema):

```bash
npm run db:generate
```

Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Testing

Run unit tests with Vitest:

```bash
npm run test
```

Run in watch mode during development:

```bash
npm run test:watch
```

## Database & Prisma

This project uses Prisma with SQLite for local development (see `prisma/schema.prisma`).

Create migrations (recommended for development):

```bash
npm run db:migrate -- --name init
```

Seed the database (creates a sample `User` and `Post`):

```bash
npm run db:generate && node prisma/seed.js
```

Quick push (sync schema without migrations):

```bash
npm run db:push
```

## Build & Production

Build the app for production:

```bash
npm run build
```

Start the standalone build (project uses `bun` in `package.json` start script):

```bash
npm run start
```

## Repository & Contribution Guidelines

Please read `CONTRIBUTING.md` for how to contribute and `CHANGELOG.md` for release history.

## CI

A GitHub Actions workflow is included to run tests and lint on pull requests and pushes to `main`.

## Notes & Suggestions
- Tests: currently include basic data assertions for the animals API. Consider adding API integration and UI tests with `@testing-library/react`.
- Security: run `npm audit` and address reported vulnerabilities where possible.
- Accessibility: Dialogs include hidden titles/descriptions for screen readers; continue validating with axe or Lighthouse.

## License
Specify a license in `LICENSE` if you plan to open-source this project.

---
Generated and maintained by the project maintainers.
