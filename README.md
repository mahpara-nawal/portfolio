# Fariba Nawal | Portfolio

A modern, cyberpunk-themed portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, Three.js, and Framer Motion.

## Features

- 3D stairway tunnel cyberpunk scene with Three.js
- Binary rain canvas animation overlay
- Glassmorphism design with neon accents
- Smooth scroll animations with Framer Motion
- Responsive design (mobile-friendly)
- One-page scroll navigation with progress bar

## Prerequisites

- Node.js v18+
- Git
- VS Code (recommended)

## Setup

### 1. Create the Next.js project

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
```

### 2. Install additional dependencies

```bash
npm install three framer-motion
npm install -D @types/three
```

### 3. Replace files

Replace the generated files with the code from this project. Copy each file to its corresponding path:

| Source File | Destination |
|------------|-------------|
| `src/app/layout.tsx` | `portfolio/src/app/layout.tsx` |
| `src/app/page.tsx` | `portfolio/src/app/page.tsx` |
| `src/app/globals.css` | `portfolio/src/app/globals.css` |
| `src/components/Navbar.tsx` | `portfolio/src/components/Navbar.tsx` |
| `src/components/Hero.tsx` | `portfolio/src/components/Hero.tsx` |
| `src/components/About.tsx` | `portfolio/src/components/About.tsx` |
| `src/components/Projects.tsx` | `portfolio/src/components/Projects.tsx` |
| `src/components/Contact.tsx` | `portfolio/src/components/Contact.tsx` |
| `src/components/Footer.tsx` | `portfolio/src/components/Footer.tsx` |
| `src/components/BinaryRain.tsx` | `portfolio/src/components/BinaryRain.tsx` |
| `src/components/ThreeScene.tsx` | `portfolio/src/components/ThreeScene.tsx` |
| `tailwind.config.ts` | `portfolio/tailwind.config.ts` |
| `tsconfig.json` | `portfolio/tsconfig.json` |

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push the project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and log in with GitHub.

3. Click **Add New > Project** and import your repository.

4. Vercel auto-detects Next.js — keep the default settings and click **Deploy**.

5. Your site will be live at `https://portfolio.vercel.app` (or a custom domain).

## Customization

### Change name, email, or social links

- **Name**: Edit `src/app/page.tsx` (Hero section) and `src/components/Navbar.tsx`
- **Email**: Replace `fariba@example.com` in `src/components/Hero.tsx`, `src/components/Contact.tsx`, and `src/components/Footer.tsx`
- **LinkedIn/GitHub**: Update the URLs in the same files

### Replace alert with real form handling

In `src/components/Contact.tsx`, replace the `handleSubmit` function to send data to your API endpoint (e.g., Formspree, EmailJS, or a custom API route).

### Add real project images

Uncomment and update the image section in `src/components/Projects.tsx`. Place images in the `public/` directory and reference them as `/image-name.png`.

### Change colors

Edit the color variables in `tailwind.config.ts`:
- `accent-blue`: `#00D4FF`
- `accent-purple`: `#B400FF`
- `accent-magenta`: `#FF00B8`

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ThreeScene.tsx
│       ├── BinaryRain.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── package.json
└── README.md
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animations**: Framer Motion
- **Fonts**: Inter, Space Grotesk, JetBrains Mono (via Google Fonts)
