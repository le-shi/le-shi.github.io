# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Hugo Extended with the Oink `v0.4.1` theme, pinned as a Hugo Module and deployed to GitHub Pages through GitHub Actions. The consuming repository has no Node.js frontend toolchain.

## Users

The repository owner and visitors looking for practical Linux Mint, Windows, software installation, and development-environment notes.

## Product Purpose

Turn the repository's existing Markdown knowledge base into an approachable, searchable website while keeping the source documents intact and useful on GitHub.

## Positioning

The website presents real, long-lived personal setup notes as a navigable cross-platform field guide instead of rewriting them into a separate CMS or blog.

## Operating Context

Readers browse long technical documents, jump between headings, copy commands, and switch between Linux and Windows guidance on desktop or mobile.

## Capabilities and Constraints

- Existing Markdown files remain unchanged and are the content source.
- The site builds to static files and deploys on GitHub Pages.
- Oink provides navigation, offline search, responsive documentation, print views, theme selection, Markdown output, and page actions.
- Root `README.md` and `README-windows.md` remain the single content sources and are included at Hugo build time.
- No backend, database, Node.js, npm, PostCSS, or CDN runtime dependency.

## Evidence on Hand

- `README.md`: Linux Mint setup, software installation, and troubleshooting notes.
- `README-windows.md`: Windows 11 migration, software, and configuration notes.
- No testimonials, usage metrics, or external product claims are available or required.

## Product Principles

- Preserve the original knowledge base.
- Make long technical content easy to scan and search.
- Keep deployment simple and dependencies minimal.
- Treat potentially destructive commands with clear context.
- Provide a complete experience across desktop and mobile.

## Accessibility & Inclusion

Use semantic HTML, visible keyboard focus, sufficient contrast, reduced-motion support, and layouts that remain usable at narrow widths and increased text sizes.
