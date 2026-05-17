# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions CI workflow for automated testing on PRs and pushes to main
- Vitest unit tests for animals API endpoint
- Prisma seed script (`prisma/seed.js`) for sample database population
- Professional documentation: [README.md](README.md), [CONTRIBUTING.md](CONTRIBUTING.md), and this changelog
- Improved accessibility in dialog components

### Fixed
- Icon import in `dialog.tsx` and `sheet.tsx` (changed `XIcon` to `X` from lucide-react)
- Radix UI Dialog accessibility warnings by adding `DialogTitle` and `DialogDescription` in `src/app/page.tsx`
- PostCSS configuration for Tailwind CSS v4 compatibility

### Changed
- Updated `postcss.config.mjs` to use object plugin syntax required by Tailwind v4

---

## [0.2.0] – 2026-05-17

### Added
- Initial public prototype: WildPedia
- Next.js 16 with App Router and React 19
- Tailwind CSS v4 for styling
- Radix UI component library for accessible primitives
- Prisma ORM with SQLite for database
- Animals API endpoint (`/api/animals`)
- Search and filter functionality for animals
- Dialog modal for detailed animal information
- Responsive design for mobile and desktop
- ESLint configuration for code quality
- Development and production scripts

---

## [0.1.0] – 2026-05-01

### Added
- Project scaffolding and setup
- Basic Next.js configuration
- Tailwind CSS and PostCSS setup
- Radix UI component library integration
- TypeScript configuration

---

## Notes

- **Support**: For issues or feature requests, please open a [GitHub issue](https://github.com/your-username/wildpedia/issues)
- **Built with**: GitHub Copilot and GLM 5.1
- **Maintained by**: The WildPedia team
