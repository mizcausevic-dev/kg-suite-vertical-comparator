# Changelog

## [0.1.0] — 2026-05-29

### Added

- Canonical cross-vertical-data matrix (`src/cross-vertical-data.mjs`): 6 verticals × 6 shapes = 36 cells, each with the actual repo name + key design innovation vs sibling-vertical equivalents.
- 5 cross-cutting invariant entries (`CROSS_CUTTING_INVARIANTS`): human-in-loop, adverse-action notice, disparate-impact threshold, protected-class data handling, regulator-referral pathway evaluation. Each shows the per-vertical naming + scoping.
- Markdown report renderer (`src/generate-report.mjs#renderMarkdown`) — AEO/SEO-friendly long-form table.
- JSON report renderer (`renderJson`) — machine-readable for tooling / dashboards.
- Per-artifact comparator (`src/compare-artifacts.mjs`) — given two parsed Suite artifacts, returns shape_match boolean + shared_fields + different_fields + interpretation paragraph.
- CLI (`bin/kg-suite-compare`) — default emits Markdown; `--json` switches; `--compare a b` does per-artifact comparison.
- Test suite (`tests/comparator.test.mjs`) — pure-Node ESM, 76/76 passing.
- CI workflow that regenerates `docs/CROSS-VERTICAL-COMPARISON.md` + `docs/comparison.json` on every push.
- Pre-generated `docs/CROSS-VERTICAL-COMPARISON.md` (~19KB) — the canonical published artifact.
- Pre-generated `docs/comparison.json` (~16KB) — machine-readable companion.
- MIT license.

### Not yet

- Auto-scrape of the actual repo profile.json files (currently the matrix is hand-curated; planned: walk the kg-suite-vertical-router manifest + each sibling repo's profile.json to surface drift).
- Comparison-graph SVG output (per-vertical Venn diagram of cross-cutting invariants).
- GitHub Action that PR-comments diffs in the matrix when a new repo lands.
