# Proposal: Build Landing Website

## Meta
- **Change ID**: `build-landing-website`
- **Status**: DRAFT
- **Created**: 2025-11-13
- **Author**: Albert Nahas
- **Related Changes**: None

## Problem Statement

Aissist currently lacks a public-facing website to showcase its capabilities, onboard new users, and establish its brand identity. The tool's GitHub README serves as the primary documentation, but this doesn't provide an engaging first impression for potential users or effectively communicate the tool's value proposition.

Without a dedicated website:
- Potential users have no visual introduction to Aissist's capabilities
- The installation and onboarding process lacks a clear entry point
- There's no showcase of real-world usage through demos and GIFs
- The local-first philosophy and privacy guarantees aren't prominently highlighted
- Users can't quickly understand the workflow and benefits before installing

## Proposed Solution

Build a professional, developer-focused landing website for Aissist inspired by Warp.dev's design aesthetic. The website will be a Next.js application deployed on Vercel, featuring:

**Core Components:**
1. **Navigation** - Minimal, dev-friendly navigation with Logo, Features, Docs, GitHub, Install
2. **Hero Section** - Bold headline explaining Aissist's purpose with prominent install command and demo GIF
3. **Quick Actions** - 4-card showcase of primary capabilities (Add Goals, Track Todos, Search Memories, Generate Proposals)
4. **Value Proposition** - Clear explanation of local-first, Markdown-based architecture
5. **Feature Grid** - 6-card detailed feature breakdown
6. **Workflow Section** - 4-step process with animated GIFs showing real usage
7. **Deep-Dive Sections** - Technical details on local-first architecture, Claude Code integration, monorepo support
8. **Privacy & Philosophy** - Bold claims about data ownership and privacy
9. **Installation** - Simple command showcase with link to full docs
10. **Footer** - Links to GitHub, docs, license, contact

**Technical Approach:**
- Next.js 14+ with App Router for modern React patterns and performance
- Tailwind CSS for utility-first styling matching dark theme aesthetic
- Responsive design supporting mobile to desktop (360px to 1500px+)
- Static generation for optimal performance
- Vercel deployment for zero-config hosting
- Demo assets sourced from Aissist GitHub repository

**Design Principles:**
- Dark theme (#121212 base) with high-contrast typography
- Warp-inspired aesthetic without direct cloning
- Developer-focused messaging and technical accuracy
- GIF/video demonstrations of actual usage
- Clean, minimal interface with generous whitespace
- Fast loading and optimal accessibility

## Success Criteria

1. **Functional Website**
   - All 10 sections implemented and responsive
   - Navigation works across all breakpoints
   - All links (GitHub, docs) are functional
   - Install command is copy-pasteable

2. **Visual Quality**
   - Matches Warp-inspired dark aesthetic
   - Smooth animations and transitions
   - Demo GIFs display correctly
   - Typography hierarchy is clear
   - Accessible (WCAG 2.1 AA minimum)

3. **Performance**
   - Lighthouse score 90+ on all metrics
   - First Contentful Paint < 1.5s
   - Total page weight < 3MB

4. **Deployment**
   - Live on Vercel with custom domain
   - Automated deployments from main branch
   - SSL/HTTPS enabled
   - CDN distribution

5. **Content Accuracy**
   - All feature descriptions match actual Aissist capabilities
   - Installation instructions are current
   - Philosophy accurately represents local-first approach
   - Links to GitHub and documentation work

## Scope & Boundaries

**In Scope:**
- Landing website frontend (10 sections as described)
- Responsive design for mobile, tablet, desktop
- Dark theme implementation
- Basic SEO optimization (meta tags, OpenGraph)
- Demo asset integration from GitHub
- Vercel deployment configuration
- Custom domain setup (aissist.dev or aissist.albertnahas.com)

**Out of Scope:**
- Full documentation site (separate from landing)
- User authentication or accounts
- Backend API or database
- Interactive demos or sandboxes
- Blog or content management system
- Analytics or tracking (maintaining privacy-first approach)
- Multi-language support (English only initially)
- E-commerce or payment processing

**Future Considerations:**
- Interactive terminal demo
- Community showcase section
- Blog integration
- Video tutorials
- Integration examples library

## Impact Assessment

**User Impact:**
- **High Positive**: Provides clear, engaging entry point for discovering Aissist
- **Discoverability**: Improves SEO and shareability of the project
- **Onboarding**: Streamlines the path from discovery to installation
- **Trust**: Professional website increases credibility and trust

**Technical Impact:**
- **Low Risk**: Separate repository from main CLI tool
- **Maintenance**: Standard Next.js maintenance, low ongoing effort
- **Dependencies**: Standard npm packages, well-supported ecosystem

**Business Impact:**
- **Growth**: Expected increase in installations and GitHub stars
- **Brand**: Establishes Aissist as a polished, professional tool
- **Community**: Creates shareable asset for social media and developer communities

**Timeline:**
- Initial setup: 1-2 hours
- Content creation: 4-6 hours
- Design implementation: 8-12 hours
- Asset integration: 2-4 hours
- Testing & refinement: 2-4 hours
- Deployment: 1 hour
- **Total estimated**: 18-29 hours (2-4 days)

## Open Questions

1. **Domain Name**: Confirm domain preference - aissist.dev or aissist.albertnahas.com?
2. **Demo Assets**: Which specific GIFs from the demos directory should be featured?
3. **Documentation Link**: Where should "Docs" navigation link point? (GitHub README or separate docs site?)
4. **Contact Method**: What contact method for footer? (Email, Twitter, GitHub Issues?)
5. **Analytics**: Should we include privacy-respecting analytics (Plausible/Fathom) or none at all?
6. **GitHub Topics**: Should the website explain how to contribute or link to contribution guidelines?

## Dependencies

**External:**
- Domain registration (if using aissist.dev)
- Vercel account for deployment
- Access to Aissist GitHub repository for demo assets

**Internal:**
- Next.js 14+
- React 18+
- Tailwind CSS 3+
- TypeScript 5+

**Assets:**
- Demo GIFs from https://github.com/albertnahas/aissist/tree/main/demos
- Logo/branding assets (if available)
- Iconography (using Lucide React or similar)

## Related Changes

None - this is a new standalone project.

## Notes

- The website repository should be separate from the main Aissist CLI repository
- GitHub repo "About" section should link to the live website once deployed
- Consider adding a "Built with Aissist" badge or showcase section for future user projects
- Website should be referenced in the main CLI tool's README
- Initial version prioritizes speed to market; can iterate on design and features post-launch
