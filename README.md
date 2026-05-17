# 🦁 WildPedia – Discover the Wonder of Wildlife

> A modern, accessible web application to explore and learn about animals and wildlife conservation. Built with cutting-edge web technologies and best practices for performance and accessibility.

![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4?logo=tailwindcss)

## ✨ Features

- **🔍 Search & Filter** – Quickly find animals by name or category
- ♿ **Accessible UI** – WCAG-compliant components with Radix UI primitives
- 📊 **Live Data** – Animals list with rich details and conservation status
- 🎨 **Modern Design** – Beautiful, responsive UI with Tailwind CSS
- ⚡ **Fast Performance** – Optimized with Next.js App Router
- 🧪 **Well-Tested** – Unit tests with Vitest and CI/CD pipeline
- 🗄️ **Local Database** – Prisma + SQLite for rapid prototyping

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or **Bun**
- **npm** or **bun** package manager

### Installation & Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd AnimalWeb

# 2. Install dependencies
npm install
# or with bun:
bun install

# 3. Generate Prisma client
npm run db:generate

# 4. (Optional) Seed the database
node prisma/seed.js

# 5. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

## 📖 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js dev server (port 3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema changes to DB |
| `npm run db:migrate` | Create and apply DB migrations |
| `npm run db:reset` | Reset database (dev only) |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page with animal list & dialog
│   ├── globals.css         # Global styles
│   └── api/
│       └── animals/
│           └── route.ts    # GET /api/animals endpoint
├── components/
│   └── ui/                 # Radix UI primitives (accordion, dialog, etc.)
├── hooks/
│   ├── use-mobile.ts       # Mobile breakpoint hook
│   └── use-toast.ts        # Toast notifications hook
└── lib/
    ├── db.ts               # Prisma client singleton
    └── utils.ts            # Utility functions (cn, etc.)

prisma/
├── schema.prisma           # Database schema
└── seed.js                 # Seed script for dev data

test/
└── api.animals.test.ts     # Unit tests for animals API
```

## 🗄️ Database (Prisma + SQLite)

### View the database file

```bash
# SQLite database location
prisma/dev.db
```

### Generate migrations

```bash
npm run db:migrate -- --name init
```

### Seed sample data

```bash
node prisma/seed.js
```

## ✅ Testing

Run tests with Vitest:

```bash
# Run all tests
npm run test

# Watch mode (auto-rerun on changes)
npm run test:watch
```

Tests include assertions for the animals API endpoint and data structure.

## 🔄 CI/CD

This project includes a **GitHub Actions** workflow that:
- Runs on every push to `main` and on pull requests
- Installs dependencies
- Runs unit tests
- Runs lint checks

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for details.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + [PostCSS](https://postcss.org) |
| **Components** | [Radix UI](https://radix-ui.com) primitives |
| **Icons** | [lucide-react](https://lucide.dev) |
| **Database** | [Prisma](https://www.prisma.io) + [SQLite](https://www.sqlite.org) |
| **Testing** | [Vitest](https://vitest.dev) |
| **Linting** | [ESLint](https://eslint.org) |
| **Package Manager** | npm / bun |

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Setting up your development environment
- Making commits and opening pull requests
- Code style and testing requirements

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.

## 🎥 Demo & Screenshots

Watch a short demo or check the [worklog](worklog.md) for development notes.

---

**Built with ❤️ using GitHub Copilot and GLM 5.1** | [Open an issue](https://github.com/your-username/wildpedia/issues) | [Discussions](https://github.com/your-username/wildpedia/discussions)
