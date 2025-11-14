# Spec: Features Showcase

## ADDED Requirements

### Requirement: Quick Actions Display
The website MUST provide a Quick Actions section showcasing Aissist's four primary capabilities in an accessible card grid.

#### Scenario: User views Quick Actions on desktop
**Given** a user scrolls to the Quick Actions section on desktop (1024px+)
**When** the section comes into view
**Then** four cards MUST be displayed in a horizontal row
**And** each card MUST show an icon, title, and brief description
**And** the cards MUST represent: "Add Goals", "Track Todos", "Search Memories", "Generate Proposals"
**And** cards MUST have consistent sizing and spacing

#### Scenario: User views Quick Actions on mobile
**Given** a user scrolls to the Quick Actions section on mobile (< 768px)
**When** the section comes into view
**Then** cards MUST be displayed in a 2x2 grid
**And** cards MUST be large enough for easy tapping (minimum 120px height)
**And** spacing between cards MUST prevent accidental taps

#### Scenario: User hovers over Quick Action card
**Given** a user is viewing the Quick Actions on a device with hover capability
**When** they hover over any card
**Then** the card MUST show a visual response (border color change, subtle scale, or shadow)
**And** the transition MUST be smooth (0.2-0.3 seconds)

### Requirement: Feature Grid Display
The website MUST provide a Feature Grid section with comprehensive details about all six major features.

#### Scenario: User views Feature Grid on desktop
**Given** a user scrolls to the Feature Grid section on desktop (1024px+)
**When** the section comes into view
**Then** six feature cards MUST be displayed in a 3-column grid
**And** each card MUST show:
  - A relevant icon
  - Feature title
  - Detailed description (2-3 sentences)
**And** the six features MUST be:
  1. Goals with smart codenames
  2. Todos with auto-history logging
  3. Daily history timeline
  4. Semantic recall (Claude Code)
  5. Action proposals
  6. Guided reflection

#### Scenario: User views Feature Grid on tablet
**Given** a user scrolls to the Feature Grid section on tablet (768-1023px)
**When** the section comes into view
**Then** feature cards MUST be displayed in a 2-column grid
**And** all six cards MUST remain visible without horizontal scrolling
**And** cards MUST maintain consistent height alignment per row

#### Scenario: User views Feature Grid on mobile
**Given** a user scrolls to the Feature Grid section on mobile (< 768px)
**When** the section comes into view
**Then** feature cards MUST be displayed in a single column
**And** cards MUST be stacked vertically with clear separation
**And** scrolling MUST be smooth and not janky

### Requirement: Workflow Steps Display
The website MUST provide a Workflow Section showing Aissist's four-step process with animated demonstrations.

#### Scenario: User views Workflow on desktop
**Given** a user scrolls to the Workflow section on desktop (1024px+)
**When** the section comes into view
**Then** four workflow steps MUST be displayed
**And** steps MUST alternate between left-aligned and right-aligned layouts
**And** each step MUST show:
  - Step number
  - Title ("Capture", "Understand", "Plan", "Reflect")
  - Description
  - Demo GIF showing the step in action
**And** visual connectors MUST link steps sequentially

#### Scenario: User views Workflow on mobile
**Given** a user scrolls to the Workflow section on mobile (< 768px)
**When** the section comes into view
**Then** workflow steps MUST be displayed vertically
**And** all content (text and GIF) MUST be stacked for easy scrolling
**And** step numbers MUST remain visible and prominent

#### Scenario: User views Workflow demo GIFs
**Given** a user scrolls to any workflow step
**When** the step's GIF comes into viewport
**Then** the GIF MUST autoplay (if motion is not reduced)
**And** the GIF MUST loop continuously
**And** the GIF MUST be lazy-loaded (only load when near viewport)
**And** the GIF MUST have alt text describing the demonstrated action

### Requirement: Features Content Accuracy
All feature descriptions MUST accurately represent Aissist's actual capabilities as documented in the GitHub repository.

#### Scenario: User reads Goals feature description
**Given** a user views the "Goals with smart codenames" feature card
**When** they read the description
**Then** the description MUST mention AI-generated codenames
**And** the description MUST explain that goals track objectives with deadlines
**And** the description MUST be verifiable against the Aissist README

#### Scenario: User reads Semantic Recall feature description
**Given** a user views the "Semantic recall (Claude Code)" feature card
**When** they read the description
**Then** the description MUST explain that semantic search uses Claude Code
**And** the description MUST clarify this is more powerful than keyword search
**And** the description MUST mention searching across memories/history

### Requirement: Features Accessibility
All feature showcase sections MUST be accessible to keyboard and screen reader users.

#### Scenario: Screen reader user accesses features
**Given** a screen reader user navigates to feature sections
**When** the screen reader reads a feature card
**Then** the card MUST be announced with proper heading levels
**And** icons MUST have appropriate alt text or be marked decorative
**And** descriptions MUST be fully readable
**And** the reading order MUST be logical (top to bottom, left to right)

#### Scenario: Keyboard user navigates workflow GIFs
**Given** a keyboard user navigates through the workflow section
**When** focus moves to a GIF element
**Then** the GIF container MUST be focusable if it has interactive controls
**And** the alt text MUST be readable by assistive tech
**And** focus indicators MUST be visible

---

## MODIFIED Requirements

None (new feature).

---

## REMOVED Requirements

None (new feature).
