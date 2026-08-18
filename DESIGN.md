---
name: Le-Shi System Field Guide
description: A cross-platform operations console for practical system field notes.
colors:
  console-void: "#0d110f"
  console-surface: "#131916"
  console-raised: "#19211d"
  field-ink: "#f1f4ea"
  telemetry-muted: "#9ca79f"
  seam: "#313b35"
  linux-signal: "#b7f34a"
  windows-signal: "#46c7ff"
  warning-signal: "#ff775f"
  action-ink: "#10150f"
  light-console-void: "#e9eee8"
  light-console-surface: "#f7f9f3"
  light-console-raised: "#dce4dc"
  light-field-ink: "#111713"
  light-telemetry-muted: "#58635c"
  light-seam: "#bdc8c0"
  light-linux-signal: "#4f7f16"
  light-windows-signal: "#007bab"
  light-action-ink: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Noto Sans SC, sans-serif"
    fontSize: "clamp(3.2rem, 5.8vw, 6.2rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, Noto Sans SC, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, Noto Sans SC, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, Noto Sans SC, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Azeret Mono, Noto Sans Mono CJK SC, monospace"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sharp: "0"
  circular: "50%"
spacing:
  compact: "8px"
  control: "12px"
  content: "16px"
  roomy: "22px"
  section: "64px"
components:
  primary-action:
    backgroundColor: "{colors.linux-signal}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.sharp}"
    padding: "0 22px"
    height: "54px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.sharp}"
    size: "38px"
  platform-entry:
    backgroundColor: "{colors.console-void}"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.sharp}"
    padding: "28px 4vw"
  navigation-active:
    backgroundColor: "{colors.linux-signal}"
    textColor: "{colors.action-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
  search-field:
    backgroundColor: "transparent"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.sharp}"
    padding: "18px"
  code-block:
    backgroundColor: "#090c0a"
    textColor: "#d9e4dc"
    rounded: "{rounded.sharp}"
    padding: "48px 22px 22px"
---

# Design System: Le-Shi System Field Guide

## Overview

**Creative North Star: "The Cross-Platform Operations Console"**

The site treats a long-lived personal knowledge base as a live control surface rather than a generic blog. Dark console planes, crisp seams, oversized editorial headings, orbit geometry, and compact telemetry labels make Linux and Windows guidance feel like two coordinated systems inside one maintained field guide.

The system is dense but not cramped: large moments establish hierarchy, while the documentation view becomes quiet, linear, and source-focused. Light mode rebinds the same semantic roles without changing the visual grammar. Motion is sparse and purposeful, with a reduced-motion fallback built into the system.

**Key Characteristics:**

- Dark-first console surfaces with a complete light-theme remap.
- Linux green and Windows blue act as platform signals, not decoration.
- Sharp seams, square controls, circular system diagrams, and almost no ornamental radius.
- Archivo carries editorial hierarchy; Azeret Mono carries metadata and operational state.
- Responsive layouts preserve direct platform access and long-form reading on narrow screens.

## Colors

The palette is an ink-black technical field punctuated by two high-chroma platform signals and restrained mineral neutrals.

### Primary

- **Linux Signal:** The main action, Linux document accent, status light, selection color, and Linux navigation state.

### Secondary

- **Windows Signal:** Windows document accent, platform identification, and the universal keyboard-focus outline.

### Tertiary

- **Warning Signal:** Reserved for manifesto warnings and error states; it does not compete with platform actions.

### Neutral

- **Console Void / Surface / Raised:** Three dark tonal layers establish canvas, persistent navigation, hover, code, and modal structure.
- **Field Ink:** Primary copy, headings, icons, and high-contrast seams.
- **Telemetry Muted:** Supporting copy, metadata, coordinates, and inactive navigation.
- **Seam:** The one-pixel structural line used to divide the console without card clutter.

**The Two Signal Rule.** Linux green means Linux or primary system readiness; Windows blue means Windows or keyboard focus. Do not reuse either as an arbitrary decorative accent.

**The Theme Rebinding Rule.** Light mode changes the values of the semantic CSS custom properties, never the meaning or hierarchy of their roles.

## Typography

- **Display Font:** Archivo with Noto Sans SC fallback.
- **Body Font:** Archivo with Noto Sans SC fallback.
- **Label/Mono Font:** Azeret Mono with Noto Sans Mono CJK SC fallback.

**Character:** Heavy, tightly tracked headlines give the field guide editorial authority; compact monospaced labels make status, provenance, coordinates, and controls feel instrument-like. Chinese and Latin content share the same hierarchy rather than being styled as separate systems.

### Hierarchy

- **Display:** Hero, manifesto, and document masthead statements; heavy, compressed, and allowed to dominate the viewport.
- **Headline:** Major document sections and high-level content divisions.
- **Title:** Subsections, orbit nodes, sidebar titles, and platform entry labels.
- **Body:** Long-form Markdown reading with generous leading and a narrow reading column.
- **Label:** Uppercase telemetry, navigation state, file provenance, progress, and small operational controls.

**The Mono Is Telemetry Rule.** Use the monospaced face for system metadata and controls, not for ordinary paragraphs or expressive headings.

## Layout

The homepage opens as a two-part stage: editorial copy on the left and a diagrammatic platform orbit on the right, separated by a single seam. At `980px`, the stage and platform entries stack; at `720px`, controls compress, actions become vertical, and the orbit nodes remain directly tappable.

Documentation uses a fixed `300px` sidebar and a centered reading column capped at `920px`. The sidebar reduces to `250px` at the intermediate breakpoint, then becomes an off-canvas drawer on mobile while the Linux/Windows switcher moves to a persistent bottom rail. Spacing alternates between tight control intervals and large section pauses; avoid filling those pauses with extra cards.

## Elevation & Depth

Depth is primarily structural: adjacent tonal surfaces, one-pixel seams, and sparse radial fields create layers without turning the interface into floating cards. Shadows appear only where state or physical separation needs reinforcement: the status glow, mobile drawer, and search dialog.

### Shadow Vocabulary

- **Status Glow:** A small platform-colored halo signals live synchronized state.
- **Drawer Shadow:** A broad horizontal shadow separates the open mobile table of contents from the document.
- **Dialog Shadow:** A deep ambient shadow isolates search from the underlying reading surface.

**The Seam Before Shadow Rule.** Use tonal layers and one-pixel borders at rest; reserve shadows for overlays, drawers, and live status.

## Shapes

The default silhouette is square and engineered: buttons, document switchers, cards, fields, code blocks, and dialogs use sharp corners. Circles belong to system diagrams, status dots, and loaders. The rotated three-bar brand mark and orbit geometry provide character without softening the interface.

**The Square Interface Rule.** Do not introduce rounded cards or pill controls; circular geometry must communicate system motion, status, or orbit structure.

## Components

### Buttons

- **Shape:** Sharp rectangular controls with explicit seams; icon controls are fixed square targets.
- **Primary:** Linux signal fill, dark action text, strong weight, and a directional arrow.
- **Hover / Focus:** Hover moves only the arrow; focus uses the Windows signal outline with a clear offset.
- **Secondary:** Text actions use an understated bottom border instead of a filled container.

### Cards / Containers

- **Corner Style:** Square throughout.
- **Background:** Console void at rest, surface layer on hover.
- **Shadow Strategy:** Flat by default; overlays are the exception.
- **Border:** One-pixel semantic seam or platform-colored outline.
- **Internal Padding:** Compact nodes use roughly one roomy spacing step; platform rows expand horizontally with viewport-relative padding.

### Inputs / Fields

- **Style:** Search is a borderless field inside a seamed dialog header, keeping the container responsible for structure.
- **Focus:** The global Windows-blue focus outline remains visible; do not suppress it without a stronger replacement.
- **Error / Disabled:** Errors use the warning signal; muted text denotes inactive or supporting state.

### Navigation

The brand and utility controls occupy a thin top rail. Document tabs use monospaced uppercase labels and a full platform-color active field. The table of contents is quiet by default, then uses a two-pixel platform seam and a very low-chroma wash for hover and active states. On mobile, document tabs become a bottom rail and the table of contents becomes a drawer.

### Platform Orbit

The orbit is the signature system map: two platform-outlined square nodes sit on fine circular guides around a central system count. Keep the diagram functional and sparse; coordinates and motion support the control-console metaphor but never obscure the direct links.

### Code Blocks

Code uses a dedicated near-black plane, a one-pixel seam, a small uppercase language label, and a compact copy control in the top-right corner. Inline code stays on the raised surface layer and inherits the active document platform color.

## Do's and Don'ts

### Do:

- **Do** preserve semantic platform color: Linux green for Linux and primary readiness, Windows blue for Windows and focus.
- **Do** use one-pixel seams and tonal layering to organize dense screens.
- **Do** keep long-form content centered, generously led, and visually quieter than the homepage.
- **Do** retain visible keyboard focus, reduced-motion behavior, and the mobile bottom document switcher.
- **Do** use monospaced uppercase labels for provenance, status, and compact controls.

### Don't:

- **Don't** turn the site into a generic blog grid of rounded cards.
- **Don't** add gradients, glows, or shadows as decoration; the existing radial field and state shadows are sufficient.
- **Don't** use platform colors interchangeably or flood large unrelated surfaces with them.
- **Don't** set paragraphs, long labels, or Chinese reading copy in the monospaced face.
- **Don't** add motion that competes with reading or ignores the reduced-motion override.
