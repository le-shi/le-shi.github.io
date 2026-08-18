# Repository Guidelines

## Project Structure & Module Organization

This repository is a compact documentation site rather than an application. The root files are the content:

- `README.md` contains the primary Linux Mint setup, software installation, and troubleshooting notes.
- `README-windows.md` contains Windows 11 migration and configuration notes.
- `AGENTS.md` defines contribution expectations for maintainers and automated agents.

Keep new material in the most relevant existing document. Add a separate Markdown file only when the topic is large enough to stand alone, and link it from the main README when appropriate.

## Development & Validation Commands

There is no package manager, build process, or automated test suite. Validate documentation changes directly:

```powershell
git diff --check
git diff -- README.md README-windows.md
rg "TODO|Pending" *.md
```

`git diff --check` catches whitespace errors. Review the rendered Markdown in GitHub or an editor preview, especially nested lists, fenced code blocks, tables, and links. Run commands copied into the documentation only in an appropriate disposable environment; many examples modify system packages or configuration.

## Writing Style & Naming Conventions

Use UTF-8 Markdown and preserve the document's existing language: most operational notes are in Chinese, while repository-level guidance may be in English. Use ATX headings (`## Heading`), fenced code blocks with a language tag such as `bash` or `powershell`, and backticks for commands, paths, package names, and registry keys. Keep headings descriptive and group instructions by platform or tool. Prefer ordered steps for procedures and bullets for inventories. Name new topic files with lowercase, hyphen-separated names, for example `linux-mint-backup.md`.

## Testing Guidelines

For each change, verify that commands are syntactically complete, URLs point to the intended source, and version-specific instructions state the tested OS or software version. Do not silently replace known-working commands; explain migrations or deprecations. Never add real credentials, activation keys, tokens, private hosts, or personal paths.

## Commit & Pull Request Guidelines

History uses short messages such as `upgrade`, dated `update ...`, and Chinese descriptions. Prefer a clearer imperative summary, for example `docs: update Sogou Pinyin installation steps`. Keep commits focused on one platform or topic. Pull requests should describe the affected guide, tested versions, validation performed, and any commands requiring elevated privileges. Include screenshots only when formatting or GUI steps materially change.
