# Contributing to WildPedia

Thank you for your interest in contributing to **WildPedia**! 🙌 We're excited to work with you. This guide will help you get started.

## 📋 Before You Start

- Fork the repository and clone your fork locally
- Read the [README.md](README.md) to understand the project structure and tech stack
- Ensure you have Node.js 18+ installed

## 🔄 Contribution Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feat/your-feature-name
# or
git switch -c feat/your-feature-name
```

Use descriptive branch names:
- `feat/` – New features
- `fix/` – Bug fixes
- `docs/` – Documentation updates
- `refactor/` – Code refactoring
- `test/` – Adding or improving tests

### 2. Set Up Your Environment

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Start dev server to test your changes
npm run dev
```

### 3. Make Changes & Commit

- Keep commits small and focused (one feature or fix per commit)
- Write clear, descriptive commit messages using [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat: add animal search filter`
  - `fix: resolve dialog accessibility issue`
  - `docs: update README with setup steps`
  - `test: add unit tests for animals API`

```bash
git add .
git commit -m "feat: describe your changes here"
```

### 4. Run Tests Locally

```bash
# Run all tests
npm run test

# Run tests in watch mode while developing
npm run test:watch

# Run lint checks
npm run lint
```

**All tests must pass before pushing.**

### 5. Push & Create a Pull Request

```bash
git push -u origin feat/your-feature-name
```

Then open a **pull request** on GitHub with:
- A clear title summarizing the change
- A description of what problem it solves or feature it adds
- Reference any related issues: `Closes #123`

## ✅ Code Style & Standards

- **TypeScript** – Use types; avoid `any` when possible
- **Components** – Follow React 19 best practices; use hooks
- **Styling** – Use Tailwind CSS utility classes; keep inline styles minimal
- **Accessibility** – Use Radix UI primitives; ensure keyboard navigation works; test with screen readers
- **Tests** – Write unit tests for new functionality (Vitest)

### Example: Adding a New Feature

```typescript
// src/components/MyFeature.tsx
'use client';

import { Button } from '@/components/ui/button';

export function MyFeature() {
  return (
    <Button onClick={() => alert('Feature works!')}>
      Click Me
    </Button>
  );
}
```

## 📝 Writing Tests

Add tests in the `test/` directory using Vitest:

```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from '@/lib/utils';

describe('myFunction', () => {
  it('should return expected result', () => {
    expect(myFunction()).toEqual(true);
  });
});
```

## 🐛 Reporting Bugs

Found a bug? Open an issue with:
- A clear description of the problem
- Steps to reproduce it
- Expected vs. actual behavior
- Screenshots or error messages if applicable

## 🎯 Project Priorities

- **Accessibility** – All components must be keyboard-navigable and screen-reader friendly
- **Performance** – Optimize bundle size and runtime performance
- **Testing** – Maintain high test coverage
- **Documentation** – Keep README, code comments, and inline docs up-to-date

## ❓ Questions?

- Check existing [issues](https://github.com/your-username/wildpedia/issues) and [discussions](https://github.com/your-username/wildpedia/discussions)
- Ask in a GitHub discussion before starting large refactors
- Feel free to reach out with questions during the contribution process

---

**Code of Conduct:** Be respectful and constructive. Discrimination, harassment, and abuse are not tolerated.

Thank you for making WildPedia better! 🦁✨
