# Aleah Bean — Portfolio

Personal portfolio website built with Next.js and deployed on Vercel.

## Live Site

Deployed via [Vercel](https://vercel.com) with automatic deployments on every push to `main`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Fonts | Google Fonts via `next/font` (Playfair Display, Inter) |
| Linting | ESLint 9 + eslint-config-next |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/
│   ├── layout.js       # Root layout, font configuration
│   ├── page.js         # Home page entry point
│   └── globals.css     # Global styles
└── components/
    ├── Navbar.js
    ├── Hero.js
    ├── About.js
    ├── Skills.js
    ├── Projects.js
    ├── Experience.js
    ├── Contact.js
    ├── Footer.js
    └── ClientScripts.js
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The site is hosted on Vercel. Pushing to the `main` branch triggers an automatic production deployment. Preview deployments are generated for any pull request.

To deploy manually:

```bash
npm run build   # Verify the production build
npx vercel      # Deploy via Vercel CLI
```
