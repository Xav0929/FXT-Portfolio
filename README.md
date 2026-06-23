# Francis Tonzo's Portfolio

A modern, responsive portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **React 19**.

## Features

✨ **Modern Design** - Clean, minimal aesthetic with glassmorphism effects
🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
⚡ **Fast Performance** - Optimized Next.js app with server components
📱 **Fully Responsive** - Works perfectly on all devices
🎯 **SEO Optimized** - Metadata and Open Graph tags configured
♿ **Accessible** - Built with accessibility best practices

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Hero.tsx            # Hero section
├── public/                 # Static assets (images, icons)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

### Prerequisites

- **Node.js 18+** or **npm/yarn/pnpm** package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### Updating Your Information

Edit `components/Hero.tsx` to update:
- Your name and title
- Bio and description
- Call-to-action buttons
- Statistics/achievements

### Changing Colors

Edit `tailwind.config.ts` and `app/globals.css` to customize:
- Gradient colors
- Background colors
- Accent colors
- Theme palette

### Adding New Sections

Create new component files in the `components/` folder and import them in `app/page.tsx`:

```tsx
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
```

### Adding Images

1. Place your image in the `public/` folder
2. Import and use in components:
   ```tsx
   import Image from "next/image";
   
   <Image src="/your-image.jpg" alt="Description" width={400} height={400} />
   ```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **React Version:** 19
- **Package Manager:** npm/yarn/pnpm

## Performance Optimizations

- Server-side rendering (SSR)
- Image optimization with Next.js Image
- CSS minification
- Code splitting
- Font optimization (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to use this template for your portfolio!

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
