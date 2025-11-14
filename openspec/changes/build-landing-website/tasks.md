# Tasks: Build Landing Website

## Overview
Implementation tasks for building the Aissist landing website, organized in delivery order to maximize user-visible progress and enable parallel work where possible.

## Phase 1: Foundation & Infrastructure (2-3 hours)

### 1.1 Repository Setup
- [ ] Create new GitHub repository (`aissist-site` or `aissist.dev`)
- [ ] Initialize Next.js 14+ project with TypeScript
- [ ] Configure Tailwind CSS with custom dark theme tokens
- [ ] Set up base project structure (components/, app/, public/, lib/)
- [ ] Configure ESLint, Prettier, and TypeScript strict mode
- [ ] Create initial README with setup instructions

**Validation**: `npm run dev` starts successfully, Tailwind classes work

### 1.2 Deployment Pipeline
- [ ] Connect repository to Vercel
- [ ] Configure automatic deployments from main branch
- [ ] Set up preview deployments for pull requests
- [ ] Configure custom domain (aissist.dev or aissist.albertnahas.com)
- [ ] Enable HTTPS/SSL
- [ ] Test deployment with minimal page

**Validation**: Website accessible via custom domain with HTTPS

### 1.3 Design System Setup
- [ ] Define color palette tokens (dark theme: #121212 base, #e3e2e0 text)
- [ ] Configure typography scale (Inter/Matter for text, Geist Mono for code)
- [ ] Create spacing and sizing utilities
- [ ] Set up responsive breakpoints (360px, 768px, 1024px, 1500px)
- [ ] Build base component primitives (Button, Card, Container)
- [ ] Create layout components (Section, Grid, Flex)

**Validation**: Storybook or test page shows all design tokens working

**Dependencies**: Must complete 1.1 before starting

---

## Phase 2: Core Layout & Navigation (2-3 hours)

### 2.1 Layout Structure
- [ ] Create root layout with metadata (SEO, OpenGraph)
- [ ] Implement responsive container system
- [ ] Build sticky header component
- [ ] Create footer component structure
- [ ] Set up smooth scroll behavior
- [ ] Add skip-to-content accessibility link

**Validation**: Basic page structure renders with header and footer

**Dependencies**: 1.3 (Design System)

### 2.2 Navigation Component
- [ ] Build navigation bar with logo and menu items
- [ ] Implement responsive mobile menu (hamburger → overlay)
- [ ] Add smooth scroll to section anchors
- [ ] Style active states and hover effects
- [ ] Ensure keyboard navigation works
- [ ] Test across all breakpoints

**Validation**: Navigation works on mobile and desktop, links scroll to sections

**Dependencies**: 2.1 (Layout Structure)

**Spec Reference**: `openspec/changes/build-landing-website/specs/navigation/spec.md`

---

## Phase 3: Hero & Value Proposition (3-4 hours)

### 3.1 Hero Section
- [ ] Build hero layout with centered content
- [ ] Add headline and subheadline typography
- [ ] Create copy-to-clipboard install command component
- [ ] Build primary CTA button with visual feedback
- [ ] Implement responsive video/GIF container
- [ ] Add goal creation + recall demo GIF
- [ ] Optimize hero image/video loading (lazy, preload)
- [ ] Add subtle background gradient or pattern

**Validation**: Hero displays correctly, install command copies, GIF plays

**Dependencies**: 2.1 (Layout Structure)

**Spec Reference**: `openspec/changes/build-landing-website/specs/hero-section/spec.md`

### 3.2 Quick Actions Cards
- [ ] Design 4-card grid layout (2x2 on mobile, 4x1 on desktop)
- [ ] Build card component with icon, title, description
- [ ] Source or create icons for: Add Goals, Track Todos, Search Memories, Generate Proposals
- [ ] Add hover effects and transitions
- [ ] Ensure cards are keyboard-accessible
- [ ] Test responsive behavior

**Validation**: 4 cards display and are interactive across all screen sizes

**Dependencies**: 1.3 (Design System)

### 3.3 Core Value Proposition
- [ ] Create centered content block with headline
- [ ] Write and style 3 bullet points (100% local, Human-readable, AI-powered)
- [ ] Add supporting visuals or icons
- [ ] Implement reveal animation on scroll (optional)

**Validation**: Value proposition is clear and readable

**Dependencies**: 2.1 (Layout Structure)

---

## Phase 4: Feature Showcase (4-5 hours)

### 4.1 Feature Grid
- [ ] Build 6-card grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Create feature card component (icon + title + description)
- [ ] Write content for all 6 features:
  - Goals with smart codenames
  - Todos with auto-history logging
  - Daily history timeline
  - Semantic recall (Claude Code)
  - Action proposals
  - Guided reflection
- [ ] Source or design icons for each feature
- [ ] Add subtle hover animations
- [ ] Ensure proper spacing and alignment

**Validation**: All 6 features display accurately with correct descriptions

**Dependencies**: 1.3 (Design System)

**Spec Reference**: `openspec/changes/build-landing-website/specs/features-showcase/spec.md`

### 4.2 Workflow Section (4 Steps)
- [ ] Build 4-step vertical timeline layout
- [ ] Create alternating left-right layout for desktop
- [ ] Add step numbers and titles
- [ ] Source/prepare 4 GIFs from demos directory:
  - Capture (goal + todo creation)
  - Understand (recall search)
  - Plan (propose command)
  - Reflect (reflection prompt)
- [ ] Implement lazy loading for GIFs
- [ ] Add captions and descriptions
- [ ] Style step connectors/lines
- [ ] Test responsive collapse to vertical on mobile

**Validation**: 4 workflow steps display with working GIFs

**Dependencies**: 4.1 (Feature Grid)

**Assets Required**: Download 4 specific GIFs from Aissist demos

---

## Phase 5: Deep Content Sections (3-4 hours)

### 5.1 Local-First Architecture Section
- [ ] Create two-column layout (text + visual)
- [ ] Write content explaining Markdown storage, Git-friendly, offline-first
- [ ] Add code snippet showing file structure
- [ ] Create diagram or illustration of data flow
- [ ] Style code blocks with syntax highlighting

**Validation**: Section clearly explains local-first approach

**Dependencies**: 2.1 (Layout Structure)

**Spec Reference**: `openspec/changes/build-landing-website/specs/content-sections/spec.md`

### 5.2 Global + Project Storage Section
- [ ] Explain .aissist/ and ~/.aissist/ hierarchy
- [ ] Show visual diagram of storage locations
- [ ] Include code example of monorepo structure
- [ ] Add callout for monorepo advanced use case

**Validation**: Storage hierarchy is clear with examples

**Dependencies**: 5.1

### 5.3 Claude Code Integration Section
- [ ] Explain semantic recall capability
- [ ] Show before/after comparison (keyword vs semantic search)
- [ ] Include command example with output
- [ ] Link to Claude Code documentation
- [ ] Add note about graceful fallback

**Validation**: Integration benefits are clear

**Dependencies**: 5.1

---

## Phase 6: Privacy & Installation (2-3 hours)

### 6.1 Privacy & Philosophy Section
- [ ] Create prominent callout/banner design
- [ ] Write 3 bold statements:
  - Your data never leaves your computer
  - No tracking. No telemetry
  - Built for productivity, not addiction
- [ ] Add privacy badge or icon
- [ ] Style with high visual weight

**Validation**: Privacy claims are prominent and clear

**Dependencies**: 2.1 (Layout Structure)

**Spec Reference**: `openspec/changes/build-landing-website/specs/content-sections/spec.md`

### 6.2 Installation Section
- [ ] Build terminal-style code block component
- [ ] Show 3-step installation:
  ```bash
  npm install -g aissist
  aissist init
  aissist goal add "Start using Aissist"
  ```
- [ ] Add copy-to-clipboard for each command
- [ ] Create "View full documentation" CTA button
- [ ] Link to GitHub README or docs site

**Validation**: Commands are copy-pasteable, link works

**Dependencies**: 1.3 (Design System)

**Spec Reference**: `openspec/changes/build-landing-website/specs/installation/spec.md`

---

## Phase 7: Footer & Polish (2-3 hours)

### 7.1 Footer Component
- [ ] Build footer layout with links
- [ ] Add navigation: GitHub, Docs, MIT License, Contact
- [ ] Include copyright: © 2025 Albert Nahas
- [ ] Add social links if applicable
- [ ] Ensure all links are functional
- [ ] Style with subtle background differentiation

**Validation**: All footer links work, proper spacing

**Dependencies**: 2.1 (Layout Structure)

### 7.2 Asset Integration
- [ ] Download all required demo GIFs from GitHub
- [ ] Optimize images (compress, convert to WebP where beneficial)
- [ ] Ensure all GIFs are properly attributed
- [ ] Add loading states for media
- [ ] Test media loading on slow connections

**Validation**: All assets load correctly and are optimized

**Dependencies**: Can be done in parallel with most tasks

**Spec Reference**: `openspec/changes/build-landing-website/specs/content-sections/spec.md`

### 7.3 Animations & Transitions
- [ ] Add scroll-reveal animations for sections
- [ ] Implement smooth fade-ins for cards
- [ ] Add micro-interactions for buttons and links
- [ ] Test animation performance
- [ ] Ensure animations respect prefers-reduced-motion
- [ ] Test on low-end devices

**Validation**: Animations are smooth, respect accessibility preferences

**Dependencies**: All previous UI components

---

## Phase 8: Quality Assurance (3-4 hours)

### 8.1 Responsive Testing
- [ ] Test on mobile (360px, 375px, 414px)
- [ ] Test on tablet (768px, 834px, 1024px)
- [ ] Test on desktop (1280px, 1440px, 1920px)
- [ ] Test on ultra-wide (2560px+)
- [ ] Verify no horizontal scroll issues
- [ ] Check touch targets are 44x44px minimum

**Validation**: Perfect rendering across all breakpoints

**Dependencies**: All UI components complete

### 8.2 Accessibility Audit
- [ ] Run axe DevTools accessibility scan
- [ ] Verify all images have alt text
- [ ] Test keyboard navigation (Tab order)
- [ ] Check color contrast ratios (WCAG AA)
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Ensure focus indicators are visible
- [ ] Add ARIA labels where needed

**Validation**: Zero critical accessibility issues

**Dependencies**: All UI components complete

### 8.3 Performance Optimization
- [ ] Run Lighthouse audit (target 90+ all metrics)
- [ ] Optimize images (lazy loading, compression)
- [ ] Add preload hints for critical assets
- [ ] Minimize bundle size (analyze with webpack-bundle-analyzer)
- [ ] Enable Next.js image optimization
- [ ] Add proper caching headers
- [ ] Test on 3G network throttling

**Validation**: Lighthouse score 90+ on Performance, Accessibility, Best Practices, SEO

**Dependencies**: All content and assets complete

### 8.4 SEO & Meta Tags
- [ ] Add descriptive meta title and description
- [ ] Create OpenGraph tags for social sharing
- [ ] Add Twitter Card meta tags
- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD)
- [ ] Set canonical URLs
- [ ] Add favicon and app icons

**Validation**: Preview in social media debuggers (Facebook, Twitter)

**Dependencies**: All content complete

### 8.5 Content Review
- [ ] Proofread all copy for typos and grammar
- [ ] Verify all feature descriptions match actual Aissist capabilities
- [ ] Check all links are functional
- [ ] Ensure installation commands are current
- [ ] Verify demo GIFs accurately represent features
- [ ] Confirm contact information is correct

**Validation**: Content is accurate and professional

**Dependencies**: All content written

---

## Phase 9: Launch Preparation (1-2 hours)

### 9.1 Final Deployment
- [ ] Merge to main branch
- [ ] Verify production build succeeds
- [ ] Test live site on all devices
- [ ] Verify custom domain is working
- [ ] Check SSL certificate is valid
- [ ] Test all external links on production

**Validation**: Website is live and fully functional

**Dependencies**: 1.2 (Deployment Pipeline), all QA complete

**Spec Reference**: `openspec/changes/build-landing-website/specs/deployment/spec.md`

### 9.2 Documentation
- [ ] Update main Aissist CLI README with website link
- [ ] Add website URL to GitHub repository "About" section
- [ ] Create landing website repo README
- [ ] Document deployment process
- [ ] Add contribution guidelines if open source

**Validation**: All documentation is current and accurate

**Dependencies**: 9.1 (Final Deployment)

### 9.3 Promotion
- [ ] Share on Twitter/X with demo
- [ ] Post to relevant subreddits (r/commandline, r/productivity)
- [ ] Share in dev communities (Hacker News, Dev.to)
- [ ] Update personal portfolio/website
- [ ] Announce in GitHub discussions

**Validation**: Website is publicly announced

**Dependencies**: 9.1 (Final Deployment)

---

## Parallel Work Opportunities

The following tasks can be worked on simultaneously:

**Stream A (Layout & Structure):**
- Phase 2: Layout & Navigation → Phase 3: Hero → Phase 4: Features → Phase 5: Content

**Stream B (Assets & Media):**
- Phase 7.2: Asset Integration (can start after Phase 1.1)

**Stream C (Infrastructure):**
- Phase 1.2: Deployment Pipeline (parallel with 1.3)

## Summary

**Total Estimated Time**: 22-31 hours (3-4 days)

**Critical Path**:
1.1 → 1.3 → 2.1 → 2.2 → 3.1 → 4.1 → 4.2 → 5.x → 6.x → 7.1 → 8.x → 9.1

**Key Milestones**:
- End of Phase 1: Infrastructure working, can deploy basic page
- End of Phase 3: Hero visible, value proposition clear
- End of Phase 4: All features showcased with demos
- End of Phase 6: Complete user journey from discovery to installation
- End of Phase 8: Production-ready quality
- End of Phase 9: Live and promoted
