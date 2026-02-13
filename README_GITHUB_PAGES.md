# Mailbox Innovations (GitHub Pages)

This repo is set up to deploy the **client (static site)** to **GitHub Pages** automatically.

## How to publish

1. Create a new GitHub repo (or use an existing one).
2. Upload/commit these files to the **main** branch.
3. In GitHub, go to **Settings → Pages**:
   - **Build and deployment** → Source: **GitHub Actions**
4. Push any change to `main`.

The workflow will:
- run `npm ci`
- build the client (`npm run build:client`)
- deploy `dist/public` to GitHub Pages

## Notes

- The Vite base path is set automatically based on your repo name via `VITE_BASE`.
- A `404.html` SPA fallback is included so refreshes on deep links won’t break on Pages.

## Local dev (optional)

```bash
npm install
npm run dev:client
```
