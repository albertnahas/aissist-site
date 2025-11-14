# Project Context

## Purpose

This project is the landing website for **Aissist**, a local-first AI-powered CLI tool for tracking goals, todos, history, and memory. The website serves as the primary public-facing resource to:
- Introduce new users to Aissist's capabilities
- Provide a clear onboarding path from discovery to installation
- Showcase the tool's workflow through visual demonstrations
- Communicate Aissist's privacy-first philosophy and local-first architecture
- Establish Aissist as a professional, polished developer tool

**Target Audience**: Developers and productivity-focused users who value privacy, local-first tools, and CLI workflows.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+
- **Deployment**: Vercel (zero-config hosting with global CDN)
- **Font Stack**: Inter (body text), Geist Mono (code blocks)
- **Icons**: Lucide React or similar tree-shakeable icon library
- **Image Optimization**: Next.js Image component
- **Package Manager**: npm

## Project Conventions

### Code Style

- **TypeScript**: Strict mode enabled, no implicit any
- **Component Structure**: Functional components with TypeScript interfaces for props
- **File Naming**:
  - Components: PascalCase (e.g., `HeroSection.tsx`)
  - Utilities: camelCase (e.g., `formatDate.ts`)
  - Constants: UPPER_SNAKE_CASE (e.g., `FEATURES.ts`)
- **Formatting**: Prettier with 2-space indentation, single quotes, no semicolons (standard Next.js defaults)
- **Linting**: ESLint with Next.js recommended rules
- **Component Organization**:
  ```
  components/
  ├── layout/      (Navigation, Footer, Section, Container)
  ├── hero/        (Hero-specific components)
  ├── features/    (Feature cards and grids)
  ├── content/     (Value prop, privacy sections)
  ├── install/     (Installation section)
  └── ui/          (Reusable primitives: Button, Card, Icon)
  ```

### Architecture Patterns

- **Server-First**: Use Server Components by default; Client Components only for interactivity
- **Composition over Configuration**: Build complex UIs from small, reusable components
- **Static Generation**: Entire site is statically generated at build time (no runtime data fetching)
- **Colocation**: Keep related components, styles, and tests close together
- **Prop Interfaces**: Every component must have explicit TypeScript props interface
- **No Global State**: Site is stateless; only ephemeral UI state (mobile menu open/closed, copy feedback)

**Example Component Pattern**:
```typescript
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 hover:border-accent-primary transition-colors">
      <Icon name={icon} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-light-secondary">{description}</p>
    </Card>
  );
}
```

### Testing Strategy

**Phase 1 (MVP)**: Manual testing across browsers and devices
- Visual testing on Chrome, Firefox, Safari
- Responsive testing at key breakpoints (360px, 768px, 1024px, 1500px)
- Accessibility testing with axe DevTools and screen readers
- Performance testing with Lighthouse

**Phase 2 (Future)**: Automated testing
- Unit tests with Jest and React Testing Library
- Visual regression tests with Chromatic or Percy
- Performance monitoring with Lighthouse CI
- Accessibility tests with @axe-core/react

### Git Workflow

- **Branching**: Feature branches off `main` (e.g., `feat/hero-section`, `fix/mobile-nav`)
- **Commits**: Conventional Commits format
  - `feat:` new features
  - `fix:` bug fixes
  - `docs:` documentation changes
  - `style:` formatting, no code change
  - `refactor:` code restructuring
  - `test:` adding tests
  - `chore:` maintenance tasks
- **Pull Requests**: Required for all changes; preview deployments on Vercel
- **Merging**: Squash and merge to keep history clean
- **Main Branch Protection**: Direct pushes blocked; must go through PR

## Domain Context

### Aissist CLI Tool

**What it is**: A privacy-first, local-first CLI tool for personal productivity and memory management.

**Core Concepts**:
- **Goals**: Long-term objectives tracked with AI-generated codenames and deadlines
- **Todos**: Quick tasks that auto-log to history when completed
- **History**: Daily activity log with retroactive date support
- **Context**: Categorized notes (work, diet, fitness, etc.)
- **Recall**: Semantic search using Claude Code for natural language queries
- **Propose**: AI-generated action plans based on goals and history
- **Reflect**: Guided introspection prompts

**Storage**:
- All data stored in Markdown files locally
- Dual storage: `~/.aissist/` (global) and `./.aissist/` (project-specific)
- Git-friendly format for version control
- Hierarchical configuration for monorepos

**Privacy Philosophy**:
- No cloud storage
- No user accounts
- No tracking or telemetry
- All AI processing via Claude Code (user's own API)

### Design Inspiration

The website draws design inspiration from **Warp.dev**:
- Dark theme with high-contrast typography
- Terminal/code-focused aesthetic
- Generous use of demo GIFs showing real usage
- Feature cards with icons and concise descriptions
- Step-by-step workflow presentation
- Developer-friendly, technical but approachable

## Important Constraints

### Technical Constraints

- **No Backend**: Fully static site, no API or database
- **No User Authentication**: Public-facing marketing site only
- **No Runtime State**: All content is static HTML/CSS/JS generated at build time
- **Performance Budget**: Total JS < 150KB gzipped, Lighthouse 90+ on all metrics
- **Browser Support**: Modern browsers only (Chrome, Firefox, Safari, Edge - last 2 versions)

### Content Constraints

- **Accuracy**: All feature descriptions must match actual Aissist capabilities
- **Privacy**: No third-party analytics or tracking (or privacy-respecting only)
- **Simplicity**: Keep messaging clear and jargon-free for broad audience
- **Demo Assets**: Use actual demos from Aissist GitHub repository

### Design Constraints

- **Accessibility**: WCAG 2.1 AA compliance minimum
- **Responsive**: Full support for 360px to 1920px+ viewports
- **Dark Theme**: Primary design aesthetic (no light mode in v1)
- **Performance**: Images optimized, lazy loading, minimal JS

## External Dependencies

### Required

- **GitHub Repository**: Source of truth for Aissist documentation and demo assets
  - URL: https://github.com/albertnahas/aissist
  - Used for: Demo GIFs, feature accuracy verification, links to docs
- **Vercel**: Hosting and deployment platform
  - Free tier sufficient for static site
  - Handles SSL, CDN, preview deployments
- **npm Registry**: For Next.js, React, Tailwind, and other dependencies

### Optional (Future Considerations)

- **Analytics**: Plausible or Fathom for privacy-respecting analytics
- **Domain Registrar**: For custom domain (aissist.dev)
- **Icon Library**: Lucide React or Heroicons from npm

### Not Used

- **CMS**: No content management system (all content hard-coded)
- **Backend Services**: No databases, authentication, or APIs
- **Third-Party Scripts**: No Google Analytics, social widgets, or tracking pixels
