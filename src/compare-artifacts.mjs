// compare-artifacts.mjs — Compare 2+ Suite artifacts side-by-side.
//
// Use cases:
//   1. Compare two audit-stream events from different verticals — same hash-chain
//      pattern, different invariants, different regulator basis taxonomy.
//   2. Compare two Decision Cards across verticals — same shape, different data
//      categories + consent_basis.
//   3. Compare two Incident Cards — same severity scale, different event_type
//      taxonomy + regulator-referral pathways.
//
// Output: structured "shared shape / different content" report.

import { detect } from "./detect-passthrough.mjs";

function summarizeArtifact(parsed) {
  const detection = detect(parsed);
  const summary = { artifact_kind: detection.artifact_kind || detection.kind };

  if (detection.artifact_kind === "audit-stream-event") {
    summary.event_kind = detection.event_kind;
    summary.audit_kind_prefix = detection.audit_kind_prefix_hint;
    summary.regulatory_basis_code = detection.regulatory_basis_code_hint;
    summary.has_ai_recommendation = !!parsed.ai_recommendation;
    summary.has_fcra_governance = !!parsed.fcra_governance;
    summary.has_candidate_notice = !!parsed.candidate_notice_provided;
    summary.has_accommodation_pathway = !!parsed.accommodation_pathway;
    summary.has_records_of_disclosure_status = !!parsed.records_of_disclosure_status;
    summary.hash_chain_position = parsed.prev_hash === "0".repeat(64) ? "genesis" : "linked";
  } else if (detection.artifact_kind === "decision-card-vault-contract") {
    summary.decision_id = parsed.decision_id;
    summary.profile = parsed.vault_contract?.profile;
    summary.data_category_count = parsed.vault_contract?.data_category_access?.length || 0;
    summary.has_signature = !!parsed.publishing?.signed_by_key_uri;
  } else if (detection.artifact_kind === "incident-card") {
    summary.incident_id = parsed.incident_id;
    summary.event_type = parsed.event_type;
    summary.severity = parsed.severity;
    summary.referral_pathway_count = parsed.regulator_referral_evaluation?.length || 0;
    summary.has_signature = !!parsed.signed_by_key_uri;
  } else if (detection.artifact_kind === "evidence-bundle-manifest") {
    summary.bundle_id = parsed.bundle?.id;
    summary.profile = parsed.bundle?.labels?.profile;
    summary.item_count = parsed.items?.length || 0;
    summary.has_signature = !!parsed.signature?.signature_b64;
  }

  return { detection, summary };
}

export function compareArtifacts(parsed_a, parsed_b) {
  const a = summarizeArtifact(parsed_a);
  const b = summarizeArtifact(parsed_b);

  const shape_match = a.summary.artifact_kind === b.summary.artifact_kind;

  const shared_fields = [];
  const different_fields = [];

  // Compute keys present in both summaries
  const all_keys = new Set([...Object.keys(a.summary), ...Object.keys(b.summary)]);
  for (const k of all_keys) {
    if (k === "artifact_kind") continue;
    const va = a.summary[k], vb = b.summary[k];
    if (va === vb && va !== undefined) {
      shared_fields.push({ field: k, value: va });
    } else if (va !== undefined && vb !== undefined && va !== vb) {
      different_fields.push({ field: k, value_a: va, value_b: vb });
    } else if (va === undefined || vb === undefined) {
      different_fields.push({ field: k, value_a: va ?? "(absent)", value_b: vb ?? "(absent)" });
    }
  }

  return {
    shape_match,
    artifact_kind_a: a.summary.artifact_kind,
    artifact_kind_b: b.summary.artifact_kind,
    a: a.summary,
    b: b.summary,
    shared_fields,
    different_fields,
    interpretation: shape_match
      ? `Both artifacts share the same canonical Suite shape ("${a.summary.artifact_kind}"). The Suite's parallel-structure thesis means tooling that handles one handles the other; differences are in per-vertical content (data categories, regulatory basis, invariants).`
      : `Artifacts are different canonical shapes ("${a.summary.artifact_kind}" vs "${b.summary.artifact_kind}"). They are not directly comparable; they represent different points in the Suite's six-shape vocabulary.`
  };
}
