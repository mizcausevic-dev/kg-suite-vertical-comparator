// comparator.test.mjs — Verify the report renders cleanly + compares as expected.

import { VERTICALS, SHAPES, MATRIX, CROSS_CUTTING_INVARIANTS } from "../src/cross-vertical-data.mjs";
import { renderJson, renderMarkdown } from "../src/generate-report.mjs";
import { compareArtifacts } from "../src/compare-artifacts.mjs";

let failed = 0, passed = 0;

function check(name, condition, msg) {
  if (condition) { console.log(`PASS ${name}`); passed++; }
  else            { console.error(`FAIL ${name}${msg ? " — " + msg : ""}`); failed++; }
}

// Matrix sanity: every vertical × every shape has a populated cell
check("VERTICALS count = 6", VERTICALS.length === 6, `got ${VERTICALS.length}`);
check("SHAPES count = 6",     SHAPES.length === 6,    `got ${SHAPES.length}`);

for (const v of VERTICALS) {
  for (const s of SHAPES) {
    const cell = MATRIX[v.code]?.[s.code];
    check(`MATRIX[${v.code}][${s.code}] populated`, !!cell && !!cell.repo && !!cell.innovation);
  }
}

// CROSS_CUTTING_INVARIANTS: each invariant has all 6 verticals named
for (const inv of CROSS_CUTTING_INVARIANTS) {
  for (const v of VERTICALS) {
    const n = inv.vertical_naming[v.code];
    check(`CROSS_CUTTING_INVARIANTS["${inv.concept}"][${v.code}] defined`, typeof n === "string" && n.length > 0);
  }
}

// Render checks
const md = renderMarkdown();
check("renderMarkdown returns non-empty", md.length > 1000, `got ${md.length} chars`);
check("renderMarkdown contains all vertical names", VERTICALS.every((v) => md.includes(v.name)));
check("renderMarkdown contains all shape names",    SHAPES.every((s) => md.includes(s.name)));

const json = JSON.parse(renderJson());
check("renderJson parseable",                       typeof json === "object");
check("renderJson.matrix has all 6 verticals",      Object.keys(json.matrix).length === 6);

// Compare-artifacts checks
const fhirEvent = {event_id:"x","timestamp":"2026-01-01T00:00:00Z",kind:"fhir.observation.read",prev_hash:"0".repeat(64),hash:"a".repeat(64),regulatory_basis:{code:"hipaa-treatment-disclosure"}};
const fintechEvent = {event_id:"y","timestamp":"2026-01-01T00:00:00Z",kind:"fintech.consumer-credit.application-read",prev_hash:"0".repeat(64),hash:"b".repeat(64),regulatory_basis:{code:"fcra-reg-v-12-cfr-1022"},fcra_governance:{permissible_purpose:"credit-transaction-initiated-by-consumer"}};

const sameShape = compareArtifacts(fhirEvent, fintechEvent);
check("compareArtifacts: same artifact_kind detected as SAME shape", sameShape.shape_match === true);
check("compareArtifacts: different audit_kind_prefix detected as DIFFERENT field", sameShape.different_fields.some((f) => f.field === "audit_kind_prefix"));

const decisionCard = {decision_card_version:"0.3",decision_id:"X-001",vault_contract:{profile:"phi-vault-contract-v0.1",data_category_access:[]},publishing:{}};
const diffShape = compareArtifacts(fhirEvent, decisionCard);
check("compareArtifacts: different artifact_kind detected as DIFFERENT shape", diffShape.shape_match === false);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
