# Aissist Landing Website

Landing website for [Aissist](https://github.com/albertnahas/aissist) - a local-first AI assistant for goals, todos, and memory.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
aissist-landing/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── layout/         # Layout components (Navigation, Footer)
│   ├── hero/           # Hero section components
│   ├── features/       # Feature showcase components
│   ├── content/        # Content section components
│   ├── install/        # Installation section
│   └── ui/             # Reusable UI primitives
├── lib/                # Utility functions and constants
├── public/             # Static assets (images, GIFs, icons)
└── openspec/           # OpenSpec proposal documentation
```

## Design System

### Colors

- **Dark Base**: #121212 (background)
- **Dark Elevated**: #1e1e1e (cards, elevated surfaces)
- **Light Primary**: #e3e2e0 (primary text)
- **Light Secondary**: #a0a0a0 (secondary text)
- **Accent Primary**: #0ea5e9 (CTAs, links)

### Typography

- **Body**: Inter
- **Code**: Geist Mono

### Breakpoints

- Mobile: 360px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1499px
- Large Desktop: 1500px+

## License

MIT - © 2025 Albert Nahas
