# Spec: Content Sections

## ADDED Requirements

### Requirement: Value Proposition Display
The website MUST clearly communicate Aissist's core value proposition and philosophy.

#### Scenario: User views Value Proposition section
**Given** a user scrolls to the Value Proposition section
**When** the section comes into view
**Then** a prominent statement MUST explain: "Aissist is a local-first AI assistant that stores everything in Markdown. Your data stays fully on your machine. No cloud. No accounts."
**And** three supporting bullet points MUST be displayed:
  - "100% local"
  - "Human-readable files"
  - "AI-powered insights from Claude Code"
**And** the section MUST use clear typography for easy scanning
**And** the message MUST be immediately understandable

### Requirement: Local-First Architecture Explanation
The website MUST provide a technical deep-dive section explaining Aissist's local-first architecture.

#### Scenario: User views Local-First Architecture section
**Given** a user scrolls to the Local-First Architecture section
**When** the section comes into view
**Then** the section MUST explain three core concepts:
  - Markdown storage (all data in .md files)
  - Git-friendly format (version control compatible)
  - Fully offline (no internet required after installation)
**And** a code snippet MUST show example file structure
**And** optional diagram or illustration MUST visualize data flow

#### Scenario: User reads code snippet in architecture section
**Given** a user views the Local-First Architecture section
**When** they see the code snippet
**Then** the snippet MUST show realistic Aissist file structure
**And** syntax highlighting MUST be applied
**And** the snippet MUST be copyable
**And** the snippet MUST include comments explaining each part

### Requirement: Storage Hierarchy Explanation
The website MUST explain Aissist's dual storage system (global and project-specific).

#### Scenario: User views Storage Hierarchy section
**Given** a user scrolls to the "Global + Project Storage" section
**When** the section comes into view
**Then** the section MUST explain the two storage locations:
  - `~/.aissist/` (global, user-wide)
  - `./.aissist/` (project-specific, per directory)
**And** a visual diagram MUST show the hierarchy
**And** a code example MUST demonstrate monorepo usage
**And** the explanation MUST clarify when each storage location is used

#### Scenario: Technical user reads monorepo details
**Given** a technically advanced user reads the Storage Hierarchy section
**When** they reach the monorepo explanation
**Then** the section MUST explain:
  - Parent directory configuration is read
  - Local directory writes are isolated
  - Useful for monorepo workflows
**And** an example MUST show a real-world monorepo structure

### Requirement: Claude Code Integration Explanation
The website MUST explain how Aissist integrates with Claude Code for semantic capabilities.

#### Scenario: User views Claude Code Integration section
**Given** a user scrolls to the "Claude Code Integration" section
**When** the section comes into view
**Then** the section MUST explain semantic recall capability
**And** the section MUST show a comparison between keyword search and semantic search
**And** an example command with output MUST be displayed
**And** the section MUST link to Claude Code documentation
**And** the section MUST mention graceful fallback to keyword search

#### Scenario: User clicks Claude Code documentation link
**Given** a user is viewing the Claude Code Integration section
**When** they click the link to Claude Code docs
**Then** the link MUST open in a new tab
**And** the link MUST navigate to official Claude Code documentation
**And** the link MUST have a visual indicator (external link icon)

### Requirement: Privacy & Philosophy Section
The website MUST prominently feature Aissist's privacy guarantees and philosophical principles.

#### Scenario: User views Privacy & Philosophy section
**Given** a user scrolls to the Privacy & Philosophy section
**When** the section comes into view
**Then** three bold privacy claims MUST be displayed:
  - "Your data never leaves your computer"
  - "No tracking. No telemetry"
  - "Built for productivity, not addiction"
**And** the section MUST use high visual weight (larger font, bold, or callout style)
**And** optional privacy badge or icon MUST reinforce the message

#### Scenario: User questions privacy claims
**Given** a user reads the privacy claims
**When** they want verification
**Then** the claims MUST be consistent with Aissist's actual implementation
**And** no third-party tracking scripts MUST be present on the website
**And** the website MUST not use analytics unless privacy-respecting (e.g., Plausible)

### Requirement: Content Sections Responsiveness
All content sections MUST be fully responsive across all device sizes.

#### Scenario: User views content sections on mobile
**Given** a user browses content sections on mobile (< 768px)
**When** any content section renders
**Then** text MUST be readable without horizontal scrolling
**And** code snippets MUST be scrollable horizontally if necessary
**And** diagrams MUST scale to fit screen width
**And** two-column layouts MUST collapse to single column

#### Scenario: User views content sections on desktop
**Given** a user browses content sections on desktop (1024px+)
**When** any content section renders
**Then** content MUST be centered with maximum width constraint
**And** two-column layouts (text + visual) MUST display side-by-side
**And** generous whitespace MUST provide comfortable reading experience
**And** line length MUST not exceed 75 characters for optimal readability

### Requirement: Content Sections Accessibility
All content sections MUST meet WCAG 2.1 AA accessibility standards.

#### Scenario: Screen reader user reads content sections
**Given** a screen reader user navigates through content sections
**When** the screen reader reads each section
**Then** section headings MUST use proper heading hierarchy (h2, h3, etc.)
**And** lists MUST be marked up with proper list elements
**And** code snippets MUST be announced as code blocks
**And** diagrams/images MUST have descriptive alt text

#### Scenario: User checks color contrast in content sections
**Given** a user or automated tool checks color contrast
**When** text in content sections is evaluated
**Then** primary text MUST have contrast ratio of at least 4.5:1 (WCAG AA)
**And** large text (18pt+) MUST have contrast ratio of at least 3:1
**And** accent colors (links, highlights) MUST meet WCAG AA standards

---

## MODIFIED Requirements

None (new feature).

---

## REMOVED Requirements

None (new feature).
