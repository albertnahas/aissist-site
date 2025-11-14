# Spec: Installation

## ADDED Requirements

### Requirement: Installation Section Display
The website MUST provide a clear, actionable installation section that enables users to quickly install and start using Aissist.

#### Scenario: User views Installation section on desktop
**Given** a user scrolls to the Installation section
**When** the section comes into view
**Then** a terminal-style code block MUST display three installation commands:
  ```
  npm install -g aissist
  aissist init
  aissist goal add "Start using Aissist"
  ```
**And** each command MUST be on a separate line with proper formatting
**And** the code block MUST use monospace font (Geist Mono or similar)
**And** the styling MUST resemble a terminal (dark background, light text, optional syntax highlighting)

#### Scenario: User copies install command
**Given** a user is viewing the Installation section
**When** they hover over the first command (`npm install -g aissist`)
**Then** a "Copy" button or icon MUST appear
**When** they click the copy button
**Then** the command MUST be copied to their clipboard
**And** visual feedback (tooltip, checkmark, or text change) MUST confirm the copy
**And** the feedback MUST display for at least 2 seconds

#### Scenario: User copies each command individually
**Given** a user wants to copy commands one at a time
**When** they interact with the Installation section
**Then** each of the three commands MUST have its own copy button
**And** clicking any copy button MUST copy only that specific command
**And** the user MUST be able to copy all three commands sequentially

#### Scenario: User views entire code block
**Given** a user views the Installation section
**When** they see the terminal-style code block
**Then** the code block MUST have:
  - Dark background (#1e1e1e or similar)
  - Light text (#e3e2e0 or similar)
  - Monospace font
  - Optional shell prompt indicator ($ or >)
  - Clear visual distinction from surrounding content

### Requirement: Installation Documentation Link
The website MUST provide a link to comprehensive installation and usage documentation.

#### Scenario: User clicks documentation CTA
**Given** a user views the Installation section
**When** they see the "View full documentation" button or link
**Then** the button MUST be prominently displayed below the install commands
**And** the button MUST have clear visual styling (primary or secondary CTA style)
**When** they click the documentation button
**Then** the link MUST navigate to full documentation (GitHub README or dedicated docs site)
**And** the link MUST open in a new tab (target="_blank")
**And** the link MUST include rel="noopener noreferrer" for security

### Requirement: Installation Prerequisites
The website MUST clearly communicate any prerequisites for installing Aissist.

#### Scenario: User checks system requirements
**Given** a user views the Installation section
**When** they look for prerequisites
**Then** the section MUST mention or link to requirements:
  - Node.js and npm installed
  - Claude Code CLI required for AI features
**And** optional tips MUST be provided (e.g., "Run `claude login` after installing Aissist")

### Requirement: Installation Accessibility
The Installation section MUST be accessible to keyboard users, screen readers, and assistive technologies.

#### Scenario: Screen reader user accesses installation instructions
**Given** a screen reader user navigates to the Installation section
**When** the screen reader reads the section
**Then** the section heading MUST be announced properly
**And** each command MUST be readable as plain text
**And** the code block MUST be announced as a code region
**And** copy buttons MUST have descriptive aria-labels (e.g., "Copy npm install command")

#### Scenario: Keyboard user copies commands
**Given** a keyboard user navigates to the Installation section
**When** they tab through interactive elements
**Then** each copy button MUST be keyboard-focusable
**And** focus indicators MUST be clearly visible
**When** they press Enter or Space on a focused copy button
**Then** the command MUST be copied to clipboard
**And** visual feedback MUST confirm the action

### Requirement: Installation Responsiveness
The Installation section MUST display correctly across all device sizes.

#### Scenario: User views Installation on mobile (< 768px)
**Given** a user views the Installation section on mobile
**When** the section renders
**Then** the code block MUST fit within the screen width
**And** long commands MUST wrap or scroll horizontally without breaking layout
**And** copy buttons MUST remain visible and tappable
**And** the "View full documentation" button MUST be easily tappable (44x44px minimum)

#### Scenario: User views Installation on desktop (1024px+)
**Given** a user views the Installation section on desktop
**When** the section renders
**Then** the code block MUST be centered with appropriate maximum width
**And** copy buttons MUST appear on hover or always be visible
**And** the layout MUST have generous padding and spacing
**And** the section MUST be visually distinct from adjacent sections

### Requirement: Installation Copy Functionality
The copy-to-clipboard feature MUST work reliably across all modern browsers.

#### Scenario: User copies command in Chrome
**Given** a user is using Google Chrome
**When** they click a copy button in the Installation section
**Then** the command MUST be copied to the clipboard
**And** the feature MUST work without requiring additional permissions
**And** the clipboard content MUST exactly match the displayed command

#### Scenario: User copies command in Safari
**Given** a user is using Safari
**When** they click a copy button in the Installation section
**Then** the command MUST be copied to the clipboard
**And** the feature MUST work without showing permission prompts

#### Scenario: Copy feature fails gracefully
**Given** a user is on a browser that doesn't support clipboard API
**When** they click a copy button
**Then** the website MUST either:
  - Fallback to alternative copy method (execCommand)
  - Show error message: "Please copy manually"
**And** the website MUST not break or throw JavaScript errors

---

## MODIFIED Requirements

None (new feature).

---

## REMOVED Requirements

None (new feature).
