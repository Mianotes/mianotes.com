# Mianotes.com

This is the React site for [Mianotes](https://github.com/Mianotes), built with Vite, React, TypeScript, and Tailwind CSS.

The site is intentionally lightweight: most of the work happens in reusable React components, with styling handled through Tailwind utility classes and a small set of shared design patterns.

## Requirements

- Node.js 20 or newer
- npm

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in your terminal, usually:

```text
http://localhost:5173
```

## Useful Commands

Run the local development server:

```bash
npm run dev
```

Check the project builds correctly:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
.
├── index.html
├── public/
│   └── static assets
├── src/
│   ├── App.tsx
│   ├── components/
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Working On The Site

Keep changes small and easy to review. If you add a new visual section, prefer creating or reusing a component under `src/components/` rather than putting everything directly into `App.tsx`.

Before committing, run:

```bash
npm run build
```

That catches TypeScript and bundling issues before the change lands.
