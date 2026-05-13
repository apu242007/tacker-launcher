# TACKER Launcher

Next.js 14 App Router landing page — icon-based launcher for TACKER inspection apps. Static export, deployed to GitHub Pages.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (Card, Badge, Tooltip)
- lucide-react icons

## Develop
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build (static export)
```bash
npm run build
```
Output: `/out` folder.

## Configure for your repo
Edit `next.config.ts` — `basePath` MUST match your GitHub repo name:
```ts
basePath: "/tacker-launcher",
```

## Deploy to GitHub Pages
1. Push to `main`.
2. Repo → **Settings → Pages → Source: "GitHub Actions"**.
3. Workflow `.github/workflows/deploy.yml` builds and deploys `/out`.

## Add / edit apps
Edit `lib/apps.ts`. Each entry: `title`, `description`, `href`, `icon` (lucide), `color` (Tailwind class).
