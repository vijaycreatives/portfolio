# Deployment Guide — Vijay Prasath B Portfolio

## Overview

**Stack**: React 19 + Vite 6 + Tailwind CSS v4 (static SPA)  
**Type**: Fully static frontend — no backend server required  
**API Proxy**: Configured in dev only (`vite.config.js` → `localhost:5000`); not used in production

---

## Hosting Recommendations

| Provider | Free Tier | Custom Domain | HTTPS | CDN | Notes |
|----------|-----------|---------------|-------|-----|-------|
| **Vercel** | ✅ Yes | ✅ | ✅ | ✅ | **Recommended** — zero-config, instant deploys via Git |
| **Netlify** | ✅ Yes | ✅ | ✅ | ✅ | Excellent DX, built-in form handling |
| **Cloudflare Pages** | ✅ Yes | ✅ | ✅ | ✅ | Fastest CDN, great for static sites |
| **GitHub Pages** | ✅ Yes | ✅ | ✅ | ✅ | Free but requires `VITE_REPO_NAME` basename config |
| **Render** | ✅ Yes | ✅ | ✅ | ✅ | Static site support, auto-deploy from Git |

**Recommendation**: Use **Vercel** or **Netlify** — they automatically detect Vite projects, require no config, and give you a public URL instantly.

---

## Prerequisites

- Node.js >= 18
- npm >= 9
- A GitHub account
- A Vercel/Netlify account (or your choice of host)

---

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_REPO_NAME` | Sets the basename for routing | `portfolio` |

Update `.env.local` or set it in your hosting dashboard:

```bash
VITE_REPO_NAME=portfolio
```

> **Important**: If deploying to a custom domain (not a subpath like `user.github.io/repo/`), set the `VITE_REPO_NAME` to a value that results in `base: "/"`. The easiest approach — change `vite.config.js` to use `base: "/"` when deploying to a root domain.

---

## Option A: Deploy to Vercel (Recommended)

### 1. Push to GitHub

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create a repo on GitHub, then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### 2. Import to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Or connect via browser:
# 1. Go to https://vercel.com/new
# 2. Import your GitHub repo
# 3. Framework preset → Vite (auto-detected)
# 4. Environment Variables → Add VITE_REPO_NAME=portfolio
# 5. Deploy
```

### 3. Custom Domain (Optional)

In Vercel Dashboard → Project → Domains → Add your domain.  
Update DNS A/AAAA or CNAME records as instructed by Vercel.

### 4. Fix routing for SPA

No action needed — Vercel handles SPA fallback automatically.

---

## Option B: Deploy to Netlify

### 1. Build settings

In Netlify Dashboard → Site → Deploy settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Environment variables**: Add `VITE_REPO_NAME=portfolio`

### 2. SPA Redirects

Create a `public/_redirects` file to handle client-side routing:

```
/*    /index.html   200
```

Or use a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Deploy

Connect your GitHub repo or drag-drop the `dist` folder.

---

## Option C: Deploy to GitHub Pages

The project is already wired for GitHub Pages with the `deploy` script:

```json
"deploy": "vite build && gh-pages --dotfiles -d dist"
```

### Setup

```bash
# Install gh-pages if not present
npm install --save-dev gh-pages
```

### Deploy

```bash
npm run deploy
```

### Configure repo

1. Go to GitHub repo → Settings → Pages
2. Source → Deploy from a branch → `gh-pages` / `/ (root)`
3. Site will be at `https://<user>.github.io/<repo>/`

### Update `VITE_REPO_NAME`

Set it to your GitHub repo name:

```bash
VITE_REPO_NAME=<your-repo-name>
```

**Note**: The `vite.config.js` uses `base: /${VITE_REPO_NAME}/`, so your site will work under the repo subpath. If deploying to a custom domain, change to `base: "/"`.

---

## Option D: Manual Build & Serve

### Build

```bash
npm run build
```

Output goes to `dist/`. Serve with any static server:

```bash
# Using Vite preview
npm run preview

# Using serve
npx serve dist

# Using Python
python -m http.server -d dist
```

---

## Verifying the Deployment

After deploying, confirm:

- [ ] Site loads at the public URL
- [ ] All pages/navigation work (no 404s on route changes)
- [ ] Images and assets load correctly
- [ ] No CORS errors in browser console (F12 → Console)
- [ ] Favicon (`logo.svg`) displays
- [ ] Mobile responsive layout works
- [ ] Contact form / interactive elements function

---

## Troubleshooting

### Blank page after deploy

**Cause**: Incorrect `base` path in `vite.config.js`.

**Fix**: Ensure `base` matches your deployment path:
- Root domain → `base: "/"`
- Subpath (e.g., `user.github.io/repo/`) → `base: "/repo/"`

### 404 on page refresh / SPA routing

**Cause**: Server doesn't know to serve `index.html` for all routes.

**Fix**: 
- **Vercel**: No action needed (handled automatically)
- **Netlify**: Add `/* /index.html 200` redirect rule
- **GitHub Pages**: The 404 issue is a known limitation — add a `404.html` copy of `index.html` or use a custom domain
- **Custom server**: Configure rewrite rules to serve `index.html` for all paths

### Assets / images not loading

**Cause**: Paths generated with wrong `base`.

**Fix**: Check browser dev tools → Network tab for failed requests. Adjust `base` in `vite.config.js` and rebuild.

### `npm run build` fails

**Check**:
```bash
node --version   # Must be >= 18
npm --version
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API proxy not working in production

**Cause**: `vite.config.js` proxy is dev-only.

**Fix**: There are no API calls in the current codebase. If adding a backend later, you'll need a real reverse proxy (nginx, Vercel rewrites, Netlify proxy).

---

## Ongoing Maintenance

### Weekly
- Check for `npm audit` vulnerabilities
- Review Vercel/Netlify deployment logs for build errors

### Monthly
```bash
# Update dependencies
npm update

# Check for major updates
npx npm-check-updates
npm install -g npm-check-updates   # if not installed
ncu
```

### Per Dependency Update
```bash
npm run build   # Verify build succeeds
npm run lint    # Run ESLint
```

### SSL / Domain
- Vercel/Netlify auto-renew SSL certificates
- For custom domains, ensure DNS records remain valid

### Performance
Monitor via:
- **Lighthouse** (Chrome DevTools → Lighthouse tab)
- **Vercel Analytics** (paid) or **Netlify Analytics**
- **Google PageSpeed Insights**

### Backup
- The repo IS the backup — keep it pushed to GitHub
- Consider `.env.local` backup (contains no secrets, but good practice)

---

## CI/CD (Optional)

### GitHub Actions — Auto-deploy on push to `main`

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          VITE_REPO_NAME: portfolio
      - uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

For Vercel, connect your GitHub repo directly — Vercel auto-deploys on every push without extra config.

---

## Architecture Summary

```
User → Browser → CDN (Vercel/Netlify) → dist/ (static files)
                                            ├── index.html
                                            ├── assets/*.js
                                            ├── assets/*.css
                                            └── logo.svg
```

No backend, no database, no server processes. The site is pure static HTML/CSS/JS served at the edge.
