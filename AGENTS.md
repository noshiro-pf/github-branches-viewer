# Repository Guidelines

## Project Structure & Module Organization

- `src/` – React + TypeScript source.
    - `components/`, `utils/`, `types/`, `styles/`, `app.tsx`
- `public/` – Static assets served by Vite.
- `configs/` – Tooling configs (Vitest, TS).
- `scripts/` – Maintenance and helper scripts.
- `dist/` – Production build output (generated).
- Root: `index.html`, `vite.config.js`, lint/format configs.

## Build, Test, and Development Commands

- `pnpm run dev` – Start Vite dev server with HMR.
- `pnpm run build` – Production build to `dist/`.
- `pnpm run preview` – Preview the production build locally.
- `pnpm run check` – Type-check (`tsc --noEmit`) and lint.
- `pnpm run lint` / `pnpm run lint:fix` – ESLint check/fix.
- `pnpm run fmt` / `pnpm run fmt:full` – Prettier format (diff-only/full repo).
- Testing (Vitest): `pnpm exec vitest --run` (see `configs/vitest.config.ts`).

Examples:

- Start dev: `pnpm run dev`
- Full build then preview: `pnpm run build && pnpm run preview`
- Type-check only: `pnpm run tsc`

## Coding Style & Naming Conventions

- TypeScript strict mode; React with JSX.
- Prettier: 2-space indent, LF EOL, single quotes, semicolons.
- ESLint: `eslint-config-typed` for TS/React/Vitest.
- Exports: prefer named exports; avoid default exports except in `configs/` and `scripts/` where allowed.
- Filenames: use `kebab-case` for all project files (e.g., `my-widget.tsx`), matching import paths.

## Testing Guidelines

- Framework: Vitest. Config at `configs/vitest.config.ts`.
- Place tests near source as `*.test.ts`/`*.test.tsx` or under `src/**/__tests__/`.
- Run unit tests: `pnpm exec vitest --run`.
- Coverage: `pnpm exec vitest --run --coverage` (V8, HTML/LCOV/text).

## Commit & Pull Request Guidelines

- Commits: short, imperative subject; scope optional (e.g., `feat(ui): add branch tabs`).
- Keep changes focused; include rationale in body when non-trivial.
- PRs must include:
    - Clear description of intent, approach, and impact.
    - Linked issue (if any) and screenshots/GIFs for UI changes.
    - Checklist: dev server runs, lints cleanly, type-check passes, build succeeds.

## Security & Configuration Tips

- Environment: copy `.env.example` to `.env`.
    - `VITE_GITHUB_TOKEN` (optional) to raise API rate limits.
    - `VITE_ADDITIONAL_REPOS` to add repos (comma-separated `owner/name`).
- Do not commit secrets. Verify `.gitignore` covers local files.
