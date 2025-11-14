# Spec: Hero Section

## ADDED Requirements

### Requirement: Hero Visual Hierarchy
The hero section MUST immediately communicate Aissist's value proposition through clear visual hierarchy and prominent calls-to-action.

#### Scenario: User lands on the website
**Given** a user visits the Aissist landing page for the first time
**When** the page loads
**Then** the hero section MUST be the first visible content
**And** the headline "Your local-first AI assistant for goals, todos, and memory" MUST be prominently displayed
**And** the subheadline "Organize your past, manage your present, and plan your future—all in Markdown on your machine" MUST appear below the headline
**And** the install command `npm install -g aissist` MUST be displayed in a terminal-style code block
**And** a demo GIF showing goal creation and recall MUST be visible

#### Scenario: User interacts with install command
**Given** a user is viewing the hero section
**When** they hover over the install command
**Then** a "Copy" button or icon MUST appear
**When** they click the copy button
**Then** the install command MUST be copied to their clipboard
**And** visual feedback (e.g., "Copied!" tooltip or checkmark) MUST confirm the action
**And** the feedback MUST disappear after 2 seconds

#### Scenario: User clicks primary CTA
**Given** a user is viewing the hero section
**When** they click the "Install Aissist" primary CTA button
**Then** the page MUST scroll smoothly to the installation section
**And** the installation section MUST display detailed setup instructions

### Requirement: Hero Responsiveness
The hero section MUST adapt to different screen sizes while maintaining visual impact.

#### Scenario: User views hero on mobile (360-767px)
**Given** a user visits the website on a mobile device
**When** the hero section renders
**Then** content MUST be vertically stacked
**And** the headline MUST use a smaller font size appropriate for mobile
**And** the demo GIF MUST scale to fit the screen width
**And** the install command and CTA button MUST remain fully visible and tappable

#### Scenario: User views hero on tablet (768-1023px)
**Given** a user visits the website on a tablet
**When** the hero section renders
**Then** content MUST use medium-sized typography
**And** the demo GIF MUST be sized appropriately for tablet viewport
**And** adequate padding MUST maintain comfortable reading width

#### Scenario: User views hero on desktop (1024px+)
**Given** a user visits the website on a desktop browser
**When** the hero section renders
**Then** content MUST be centered with maximum width constraint
**And** the headline MUST use the largest font size
**And** the demo GIF MUST display at optimal size without pixelation
**And** generous whitespace MUST frame the content

### Requirement: Hero Demo Asset Performance
The hero demo GIF MUST load efficiently without blocking page render.

#### Scenario: User loads page on slow connection
**Given** a user visits the website on a slow network (3G)
**When** the page loads
**Then** the hero text content MUST render immediately
**And** the demo GIF MUST load asynchronously without blocking text
**And** a placeholder or skeleton screen MUST show while the GIF loads
**And** the total hero section (including GIF) MUST load within 3 seconds on 3G

#### Scenario: User has reduced motion preference
**Given** a user has enabled "prefers-reduced-motion" in their system settings
**When** the page loads
**Then** the demo GIF MUST be paused or replaced with a static image
**And** no auto-playing animations MUST occur in the hero section

### Requirement: Hero Accessibility
The hero section MUST be accessible to all users including keyboard and screen reader users.

#### Scenario: Screen reader user accesses hero
**Given** a screen reader user lands on the page
**When** the screen reader reads the hero section
**Then** the headline MUST be announced as a level 1 heading
**And** the subheadline MUST be announced as descriptive text
**And** the demo GIF MUST have descriptive alt text (e.g., "Demo showing goal creation and semantic recall in Aissist")
**And** the install command MUST be readable
**And** the CTA button MUST have clear action text

#### Scenario: Keyboard user interacts with hero
**Given** a keyboard user navigates to the hero section
**When** they tab through interactive elements
**Then** the copy button MUST receive focus
**And** the primary CTA button MUST receive focus
**And** pressing Enter or Space on focused elements MUST trigger their actions
**And** focus indicators MUST be clearly visible

---

## MODIFIED Requirements

None (new feature).

---

## REMOVED Requirements

None (new feature).
