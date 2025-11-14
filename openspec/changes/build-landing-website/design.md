# Design: Build Landing Website

## Architectural Overview

The Aissist landing website is a static marketing site built with Next.js 14+ App Router, leveraging server-side rendering and static generation for optimal performance. The architecture prioritizes simplicity, maintainability, and developer experience while delivering a polished user-facing product.

```
┌─────────────────────────────────────────────────────┐
│                   User Browser                       │
│  (Mobile, Tablet, Desktop - Responsive 360-1920px)  │
└───────────────────┬─────────────────────────────────┘
                    │ HTTPS
                    ↓
┌─────────────────────────────────────────────────────┐
│              Vercel Edge Network (CDN)              │
│   - Global distribution                              │
│   - Automatic HTTPS/SSL                              │
│   - Image optimization                               │
│   - Caching & compression                            │
└───────────────────┬─────────────────────────────────┘
                    │
                    ↓
┌─────────────────────────────────────────────────────┐
│           Next.js Application (Static)               │
│                                                       │
│  ┌─────────────────────────────────────────────┐   │
│  │         App Router (app/)                    │   │
│  │  - page.tsx (main landing page)              │   │
│  │  - layout.tsx (root layout + meta)           │   │
│  │  - globals.css (Tailwind imports)            │   │
│  └─────────────────────────────────────────────┘   │
│                                                       │
│  ┌─────────────────────────────────────────────┐   │
│  │       Components (components/)               │   │
│  │  - Navigation                                 │   │
│  │  - Hero                                       │   │
│  │  - FeatureGrid                                │   │
│  │  - WorkflowSteps                              │   │
│  │  - InstallSection                             │   │
│  │  - Footer                                     │   │
│  │  - UI Primitives (Button, Card, etc.)        │   │
│  └─────────────────────────────────────────────┘   │
│                                                       │
│  ┌─────────────────────────────────────────────┐   │
│  │      Static Assets (public/)                 │   │
│  │  - Demo GIFs/videos                           │   │
│  │  - Icons & logos                              │   │
│  │  - Favicons                                   │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## Technology Stack

### Core Framework
**Next.js 14+ with App Router**
- **Rationale**: Industry-standard React framework with excellent DX, built-in optimizations, and seamless Vercel integration
- **Benefits**:
  - Static generation for instant page loads
  - Automatic code splitting and bundle optimization
  - Built-in image optimization
  - Server Components reduce client JS bundle
  - File-based routing simplicity
- **Trade-offs**: More complex than vanilla React, but benefits outweigh learning curve for a production site

### Styling
**Tailwind CSS 3+**
- **Rationale**: Utility-first CSS enables rapid UI development matching Warp's design system
- **Benefits**:
  - Consistent design tokens (colors, spacing, typography)
  - Responsive design with mobile-first breakpoints
  - Dark theme via custom color palette
  - Minimal CSS bundle (unused styles purged)
  - No CSS naming conflicts
- **Trade-offs**: Long className strings, but improves maintainability vs custom CSS

### Language
**TypeScript 5+**
- **Rationale**: Type safety prevents runtime errors and improves maintainability
- **Benefits**:
  - Autocomplete for component props
  - Catch errors at compile time
  - Better refactoring support
  - Self-documenting code
- **Trade-offs**: Slightly slower development initially, but pays dividends in maintenance

### Deployment
**Vercel**
- **Rationale**: Zero-config deployment optimized for Next.js (created by same team)
- **Benefits**:
  - Automatic HTTPS/SSL
  - Global CDN distribution
  - Preview deployments for PRs
  - Built-in analytics and monitoring
  - One-click custom domain setup
- **Trade-offs**: Vendor lock-in, but migration path exists if needed

## Design System

### Color Palette

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#121212',      // Background base
          elevated: '#1e1e1e',  // Card backgrounds
          border: '#353534',    // Borders and dividers
        },
        light: {
          primary: '#e3e2e0',   // Primary text
          secondary: '#a0a0a0', // Secondary text
          accent: '#ffffff',    // Headings and emphasis
        },
        accent: {
          primary: '#0ea5e9',   // CTAs and links (sky-500)
          hover: '#0284c7',     // Hover states (sky-600)
          success: '#10b981',   // Success states (emerald-500)
        },
      },
    },
  },
};
```

### Typography Scale

**Font Families:**
- **Headings**: Inter (weights: 600, 700, 800)
- **Body**: Inter (weights: 400, 500, 600)
- **Code**: Geist Mono (weights: 400, 500)

**Type Scale:**
```
Hero Headline: text-5xl md:text-6xl lg:text-7xl (48-72px)
Section Titles: text-3xl md:text-4xl (30-36px)
Subsection Titles: text-2xl md:text-3xl (24-30px)
Body Large: text-lg (18px)
Body: text-base (16px)
Body Small: text-sm (14px)
Captions: text-xs (12px)
```

### Spacing System

Following 8px grid system:
```
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
3xl: 6rem (96px)
4xl: 8rem (128px)
```

### Responsive Breakpoints

```
Mobile: 360px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1499px
Large Desktop: 1500px+
```

## Component Architecture

### Component Hierarchy

```
app/
├── layout.tsx (Root layout, meta tags, fonts)
└── page.tsx (Landing page composition)
    ├── <Navigation />
    ├── <Hero />
    ├── <QuickActions />
    ├── <ValueProposition />
    ├── <FeatureGrid />
    ├── <WorkflowSection />
    ├── <DeepDiveSections />
    ├── <PrivacySection />
    ├── <InstallSection />
    └── <Footer />

components/
├── layout/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Section.tsx (wrapper with padding/margins)
│   └── Container.tsx (max-width constraint)
├── hero/
│   ├── Hero.tsx
│   ├── HeroHeadline.tsx
│   └── InstallCommand.tsx
├── features/
│   ├── QuickActionCard.tsx
│   ├── FeatureCard.tsx
│   └── FeatureGrid.tsx
├── workflow/
│   ├── WorkflowStep.tsx
│   └── WorkflowSection.tsx
├── content/
│   ├── ValueProposition.tsx
│   ├── PrivacySection.tsx
│   ├── LocalFirstSection.tsx
│   ├── ClaudeIntegrationSection.tsx
│   └── MonorepoSection.tsx
├── install/
│   ├── InstallSection.tsx
│   └── CodeBlock.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Icon.tsx
    └── MediaContainer.tsx (for GIFs/videos)
```

### Component Patterns

**Server Components (Default)**
- Most components will be Server Components for optimal performance
- No interactivity = no client JS shipped
- Can directly read files, fetch data at build time

**Client Components (Selective)**
Only for interactive features:
- `Navigation` (mobile menu toggle)
- `InstallCommand` (copy-to-clipboard)
- `CodeBlock` (copy functionality)
- Any scroll animations requiring intersection observers

**Composition Pattern:**
```typescript
// Example: FeatureGrid component
export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}

// FeatureCard is a presentational component
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="p-6 hover:border-accent-primary transition-colors">
      <Icon name={feature.icon} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-light-secondary">{feature.description}</p>
    </Card>
  );
}
```

## Data Flow & State Management

### Content Strategy

**Static Content:**
All content is hard-coded in components or imported from constants:

```typescript
// lib/content.ts
export const FEATURES = [
  {
    id: 'goals',
    title: 'Goals with smart codenames',
    description: 'AI-generated memorable codenames make tracking goals effortless',
    icon: 'target',
  },
  // ... more features
];

export const WORKFLOW_STEPS = [
  {
    id: 'capture',
    title: 'Capture',
    description: 'Add goals, todos, and history',
    gifPath: '/demos/goal-creation.gif',
  },
  // ... more steps
];
```

**No Runtime State:**
- No API calls or external data fetching
- No user authentication or sessions
- No forms (except copy-to-clipboard, which is ephemeral)
- Site is fully static, generated at build time

### Navigation State

```typescript
// Only client state: mobile menu open/closed
'use client';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      {/* Desktop nav always visible */}
      <DesktopNav />

      {/* Mobile hamburger toggles overlay */}
      <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
      {mobileMenuOpen && (
        <MobileMenuOverlay onClose={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
}
```

## Performance Considerations

### Image Optimization

**Next.js Image Component:**
```typescript
import Image from 'next/image';

<Image
  src="/demos/goal-creation.gif"
  alt="Creating a goal in Aissist"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```

**Benefits:**
- Automatic WebP/AVIF conversion
- Responsive srcset generation
- Lazy loading by default
- Blur placeholder during load

### Code Splitting

**Automatic by Next.js:**
- Each route is its own bundle
- Shared components automatically extracted
- Dynamic imports for large, below-fold components:

```typescript
// Lazy load workflow section if it's large
const WorkflowSection = dynamic(() => import('@/components/workflow/WorkflowSection'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Still SSR, just code-split
});
```

### Bundle Size Target

**Total JS Budget: < 150KB gzipped**
- Next.js runtime: ~80KB
- React: ~45KB
- Our code: ~25KB

**Strategies to stay under budget:**
- Use Server Components aggressively
- Avoid large dependencies (no animation libraries, keep icon library small)
- Tree-shake unused Tailwind classes
- Lazy load below-fold content

### Caching Strategy

**Vercel Edge Caching:**
- Static pages cached permanently at edge locations
- Cache-Control headers set automatically
- Stale-while-revalidate for instant loads

## Accessibility Architecture

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Primary text (#e3e2e0) on dark (#121212): 12.6:1 (AAA)
- Secondary text (#a0a0a0) on dark: 5.2:1 (AA)
- Accent blue (#0ea5e9) on dark: 7.1:1 (AAA)

**Keyboard Navigation:**
```typescript
// All interactive elements must be keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
  aria-label="Copy install command"
>
  Copy
</button>
```

**Screen Reader Support:**
- Semantic HTML (nav, main, section, article, footer)
- ARIA labels for icon-only buttons
- Alt text for all images
- Skip-to-content link for keyboard users

**Motion Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## SEO Strategy

### Meta Tags

```typescript
// app/layout.tsx
export const metadata = {
  title: 'Aissist - Local-First AI Assistant for Goals, Todos, and Memory',
  description: 'Organize your past, manage your present, and plan your future. Aissist is a privacy-first CLI tool that stores everything in Markdown on your machine.',
  keywords: ['productivity', 'CLI', 'markdown', 'local-first', 'AI assistant', 'goals', 'todos'],
  authors: [{ name: 'Albert Nahas' }],
  openGraph: {
    title: 'Aissist - Local-First AI Assistant',
    description: 'Your data, your machine. No cloud. No tracking.',
    type: 'website',
    url: 'https://aissist.dev',
    images: [
      {
        url: 'https://aissist.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aissist - Local-First AI Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aissist - Local-First AI Assistant',
    description: 'Organize your past, manage your present, and plan your future—all in Markdown.',
    images: ['https://aissist.dev/og-image.png'],
  },
};
```

### Structured Data

```typescript
// JSON-LD for rich snippets
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Aissist",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "macOS, Linux, Windows",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Local-first AI assistant for goals, todos, and memory",
};
```

## Animation & Interaction Design

### Micro-Interactions

**Button Hovers:**
```css
.button {
  @apply transition-all duration-200 ease-out;
  @apply hover:scale-105 hover:shadow-lg;
}
```

**Card Hovers:**
```css
.card {
  @apply transition-colors duration-300;
  @apply hover:border-accent-primary;
}
```

### Scroll Animations (Optional)

Using Intersection Observer API:
```typescript
'use client';

export function AnimatedSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
```

**Animation Budget:**
- Fade-ins: 0.7s ease-out
- Slide-ups: 0.7s ease-out with 32px translate
- Hovers: 0.2s ease-out
- Scale transforms: max 1.05x
- Always respect `prefers-reduced-motion`

## Security Considerations

### Content Security Policy

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      connect-src 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
```

### Privacy

**No Third-Party Scripts:**
- No Google Analytics
- No tracking pixels
- No social media widgets
- No external fonts (self-host if needed)

**Optional Privacy-Respecting Analytics:**
If analytics are needed:
- Plausible Analytics (privacy-first, no cookies)
- Fathom Analytics (GDPR-compliant)
- Configure to exclude PII

## Deployment Architecture

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1", "lhr1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Build Pipeline

```
1. Git Push to main
   ↓
2. Vercel detects change
   ↓
3. Install dependencies (npm ci)
   ↓
4. Run TypeScript type check
   ↓
5. Build Next.js app (npm run build)
   ↓
6. Optimize images and assets
   ↓
7. Deploy to Vercel Edge Network
   ↓
8. Invalidate CDN cache
   ↓
9. Site live at aissist.dev
```

### Environment Variables

None required for initial launch (fully static site).

Future considerations:
- `NEXT_PUBLIC_ANALYTICS_ID` (if adding analytics)
- `GITHUB_TOKEN` (if fetching stars/issues count dynamically)

## Testing Strategy

### Unit Tests (Optional)
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest
```

Test critical components:
- `InstallCommand` copy functionality
- `Navigation` mobile menu toggle
- `Button` and `Card` rendering

### Visual Regression Tests
Use Chromatic or Percy for visual diffs on PRs.

### Performance Tests
- Lighthouse CI in GitHub Actions
- Bundle size tracking with bundlesize or size-limit
- Fail CI if performance degrades

### Accessibility Tests
- axe-core in Playwright/Cypress
- Manual testing with screen readers
- Keyboard navigation testing

## Trade-offs & Alternatives Considered

### Framework: Next.js vs Astro vs Plain React
**Decision: Next.js**
- ✅ Best Vercel integration
- ✅ Mature ecosystem, great DX
- ✅ Excellent image optimization
- ❌ Heavier than Astro (but not significantly for this use case)

**Alternative: Astro**
- ✅ Lighter JS bundle
- ✅ Great for static sites
- ❌ Less familiar to React developers
- ❌ Smaller ecosystem

### Styling: Tailwind vs CSS Modules vs Styled Components
**Decision: Tailwind**
- ✅ Rapid development
- ✅ Consistent design system
- ✅ Excellent purging (small CSS bundle)
- ❌ Long classNames
- ❌ Learning curve

**Alternative: CSS Modules**
- ✅ Scoped styles
- ✅ Familiar CSS syntax
- ❌ More boilerplate
- ❌ Harder to maintain consistency

### Deployment: Vercel vs Netlify vs GitHub Pages
**Decision: Vercel**
- ✅ Zero-config Next.js optimization
- ✅ Best performance (Edge Network)
- ✅ Preview deployments
- ❌ Vendor lock-in (mitigated by Next.js portability)

**Alternative: Netlify**
- ✅ Similar features
- ✅ Good DX
- ❌ Slightly worse Next.js integration

## Open Design Questions

1. **Logo/Branding**: Does Aissist have an official logo? If not, should we create one or use text-only branding?

2. **Icon Library**: Which icon library should we use?
   - **Lucide React** (recommended): Tree-shakeable, consistent style, MIT license
   - **Heroicons**: Tailwind team's icons, good fit
   - **Custom SVGs**: More control, but more work

3. **Animation Intensity**: How much animation is appropriate?
   - **Minimal**: Hover effects only
   - **Moderate** (recommended): Scroll reveals + hovers
   - **Heavy**: Complex animations, parallax

4. **Demo GIF Strategy**: Should we:
   - **Embed GIFs directly** (simpler, larger page weight)
   - **Convert to videos** (better compression, more work)
   - **Use a video host** (YouTube/Vimeo - conflicts with privacy-first approach)

5. **Documentation Strategy**: Where should "Docs" link point?
   - **GitHub README** (current, easiest)
   - **Separate docs site** (better UX, more work)
   - **Docs section on landing site** (all-in-one, but site gets complex)

6. **Analytics**: Should we include privacy-respecting analytics?
   - **None** (most privacy-respecting)
   - **Plausible/Fathom** (privacy-first, useful insights)
   - **Self-hosted Umami** (full control, more maintenance)

## Future Enhancements (Out of Scope for V1)

- **Interactive Terminal Demo**: In-browser demo of Aissist commands
- **Community Showcase**: User-submitted workflows and use cases
- **Blog Integration**: Tips, tutorials, release notes
- **Video Tutorials**: Screencasts showing advanced features
- **Plugin Marketplace**: If Aissist becomes extensible
- **Internationalization**: Multi-language support
- **Dark/Light Mode Toggle**: Currently dark-only, could add light theme
- **Advanced Animations**: GSAP or Framer Motion for complex interactions
