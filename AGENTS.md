# Repository Guidelines

## Project Structure & Module Organization

This repository is a Hugo documentation site built with the OINK theme. Root Markdown files remain the canonical content sources:

- `README.md` contains the primary Linux Mint setup, software installation, and troubleshooting notes.
- `README-windows.md` contains Windows 11 migration and configuration notes.
- `content/` defines Hugo sections and page metadata. Linux and Windows pages include the root guides through `layouts/shortcodes/root-markdown.html`.
- `data/home/zh.yaml` configures the OINK landing page; `static/` contains the logo and favicon assets.
- `hugo.yaml` configures navigation, search, theme behavior, and the pinned Hugo Module declared in `go.mod`.
- `AGENTS.md` defines contribution expectations for maintainers and automated agents.

Keep new material in the most relevant existing document. Add a separate Markdown file only when the topic is large enough to stand alone, and link it from the main README when appropriate.

## Build, Test, and Development Commands

Install Go and Hugo Extended 0.160.1 or newer, then run:

```powershell
hugo server --disableFastRender
hugo --gc --minify
git diff --check
git diff -- README.md README-windows.md
rg "TODO|Pending" *.md
```

`hugo server` starts the local preview, while the minified build matches the GitHub Pages workflow and downloads OINK through Hugo Modules. `git diff --check` catches whitespace errors. Review navigation, search, table of contents, code blocks, and both desktop and mobile layouts.

## Writing Style & Naming Conventions

Use UTF-8 Markdown and preserve the document's existing language: most operational notes are in Chinese, while repository-level guidance may be in English. Use ATX headings (`## Heading`), fenced code blocks with a language tag such as `bash` or `powershell`, and backticks for commands, paths, package names, and registry keys. Keep headings descriptive and group instructions by platform or tool. Prefer ordered steps for procedures and bullets for inventories. Name new topic files with lowercase, hyphen-separated names, for example `linux-mint-backup.md`.

Do not copy root README content into `content/`; use the `root-markdown` shortcode so GitHub and the website share one source. Keep theme-specific configuration in `hugo.yaml` or `data/`, and avoid modifying generated `public/` or `resources/_gen/` files.

## Testing Guidelines

There is no unit-test suite. A change is ready when `hugo --gc --minify` and `git diff --check` pass. For UI changes, inspect `/`, `/docs/linux/`, and `/docs/windows/` at desktop and mobile widths, test offline search and theme switching, and check the browser console. For content changes, verify commands, URLs, headings, and tested software versions.

## Commit & Pull Request Guidelines

History uses short messages such as `upgrade`, dated `update ...`, and Chinese descriptions. Prefer a clearer imperative summary, for example `docs: update Sogou Pinyin installation steps`. Keep commits focused on one platform or topic. Pull requests should describe the affected guide, tested versions, validation performed, and any commands requiring elevated privileges. Include screenshots only when formatting or GUI steps materially change.
