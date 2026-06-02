# kg-suite-vertical-comparator

> **Kinetic Gain Protocol Suite Vertical Comparator v0.1.** Generates AEO-friendly Markdown + machine-readable JSON tables that surface SAME canonical shapes vs DIFFERENT per-vertical design contributions across the **11 vertical 6-packs** of the Kinetic Gain Protocol Suite (66 sibling spec repos). Also supports `kg-suite-compare artifact_a artifact_b` to compare two specific Suite artifacts side-by-side.

[![CI](https://github.com/mizcausevic-dev/kg-suite-vertical-comparator/actions/workflows/ci.yml/badge.svg)](https://github.com/mizcausevic-dev/kg-suite-vertical-comparator/actions/workflows/ci.yml)

Part of the [Kinetic Gain Protocol Suite](https://suite.kineticgain.com). Companion to [`kg-suite-vertical-router`](https://github.com/mizcausevic-dev/kg-suite-vertical-router).

## What it produces

### Canonical reference

The pre-generated [`docs/CROSS-VERTICAL-COMPARISON.md`](./docs/CROSS-VERTICAL-COMPARISON.md) is the canonical artifact. It contains:

- The **Six Regulated Verticals** with federal floor, canonical buyer + vendor + Decision Card ID per vertical
- The **Six Canonical Shapes** every vertical contains
- The **6 × 6 matrix** showing every repo + key design innovation per cell
- The **Cross-Cutting Invariants** table showing where the SAME conceptual invariant appears in multiple verticals but is named / scoped / enforced differently (human-in-loop, four-fifths-rule, adverse-action notice, protected-class data handling, regulator-referral pathway evaluation)

Use it on procurement comparison sheets, RFPs, internal training, vendor due-diligence packages — anywhere a buyer or seller needs the canonical "same shape, different vertical" reference.

### Per-artifact comparison

```bash
kg-suite-compare --compare proptech-mortgage-event.ndjson fintech-credit-event.ndjson
```

```
Comparing proptech-mortgage-event.ndjson vs fintech-credit-event.ndjson

shape match: ✓ SAME
  proptech-mortgage-event.ndjson: audit-stream-event
  fintech-credit-event.ndjson: audit-stream-event

Both artifacts share the same canonical Suite shape ("audit-stream-event"). The
Suite's parallel-structure thesis means tooling that handles one handles the
other; differences are in per-vertical content (data categories, regulatory
basis, invariants).

shared fields:
  hash_chain_position = "genesis"
  has_records_of_disclosure_status = false
  has_candidate_notice = false
  has_accommodation_pathway = false

different fields:
  event_kind:
    A = "mortgage.application.recommendation-produced"
    B = "fintech.consumer-credit.application-read"
  audit_kind_prefix:
    A = "mortgage."
    B = "fintech."
  regulatory_basis_code:
    A = "ecoa-written-application"
    B = "fcra-reg-v-12-cfr-1022"
  has_fcra_governance:
    A = false
    B = true
```

## Quick start

```bash
npm install -g kg-suite-vertical-comparator

# Render the cross-vertical comparison as Markdown:
kg-suite-compare > CROSS-VERTICAL-COMPARISON.md

# Or as JSON:
kg-suite-compare --json > comparison.json

# Compare two specific artifacts:
kg-suite-compare --compare artifact_a.json artifact_b.json
```

## Programmatic API

```js
import {
  VERTICALS, SHAPES, MATRIX, CROSS_CUTTING_INVARIANTS,
  renderMarkdown, renderJson, compareArtifacts
} from "kg-suite-vertical-comparator";

// Iterate the matrix
for (const vertical of VERTICALS) {
  for (const shape of SHAPES) {
    const cell = MATRIX[vertical.code][shape.code];
    console.log(`${vertical.name} → ${shape.name}: ${cell.repo}`);
  }
}

// Compare two artifacts
const result = compareArtifacts(parsedA, parsedB);
console.log(result.shape_match);          // true | false
console.log(result.shared_fields);         // [{field, value}, ...]
console.log(result.different_fields);      // [{field, value_a, value_b}, ...]
console.log(result.interpretation);        // explanatory paragraph
```

## How the matrix is maintained

The matrix is hand-curated in [`src/cross-vertical-data.mjs`](./src/cross-vertical-data.mjs). When a new spec repo lands in a vertical 6-pack, OR a new vertical 6-pack opens, add the cell + cross-cutting-invariant entry there.

CI regenerates `docs/CROSS-VERTICAL-COMPARISON.md` + `docs/comparison.json` on every push.

## Composes with

| Repo | Role |
| --- | --- |
| [`kg-suite-vertical-router`](https://github.com/mizcausevic-dev/kg-suite-vertical-router) | Sibling tool: routes any artifact to the right vertical (this comparator describes which verticals exist + how they differ) |
| All 66 sibling spec repos across the 11 vertical 6-packs | Data sources for the matrix |

## Compliance posture

Suite-readiness scaffolding for cross-vertical artifact + design pattern comparison. Useful for AI-vendor procurement teams operating across multiple regulated lines of business, compliance counsel mapping equivalent obligations, and standards observers tracking how AI-governance patterns transfer across verticals. Does not by itself establish compliance with any underlying statute or rule. The matrix is descriptive (what the published specs say) not prescriptive (what regulators require). Per the standing public-language guardrail: *readiness · evidence · posture · controls · scaffolding* — never "compliant" or "attested" without an external attestation specific to each underlying regulatory regime.

## License

MIT — both the package and the generated comparison docs are MIT-licensed. Reuse freely.
