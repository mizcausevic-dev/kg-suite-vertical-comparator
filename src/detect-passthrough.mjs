// detect-passthrough.mjs — Local mini-detect for artifact-kind classification.
//
// Mirrors the kg-suite-vertical-router detection logic but kept local to
// avoid hard cross-repo dependency. If you have kg-suite-vertical-router
// installed, replace this with `import { detect } from "kg-suite-vertical-router/detect"`.

export function detect(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return { kind: "unknown" };
  }
  if (typeof obj.decision_card_profile_version === "string")  return { kind: "profile", profile_kind: "decision-card-vault-contract" };
  if (typeof obj.incident_card_profile_version === "string")  return { kind: "profile", profile_kind: "incident-card" };
  if (typeof obj.evidence_bundle_profile_version === "string")return { kind: "profile", profile_kind: "evidence-bundle-profile" };
  if (typeof obj.decision_card_version === "string")          return { kind: "instance", artifact_kind: "decision-card-vault-contract" };
  if (typeof obj.incident_card_version === "string")          return { kind: "instance", artifact_kind: "incident-card" };
  if (typeof obj.evidence_bundle_version === "string")        return { kind: "instance", artifact_kind: "evidence-bundle-manifest" };
  if (typeof obj.event_id === "string" && typeof obj.kind === "string" && typeof obj.prev_hash === "string" && typeof obj.hash === "string") {
    const prefixMatch = obj.kind.match(/^([a-z0-9-]+)\./);
    return {
      kind: "instance",
      artifact_kind: "audit-stream-event",
      event_kind: obj.kind,
      audit_kind_prefix_hint: prefixMatch ? prefixMatch[1] + "." : null,
      regulatory_basis_code_hint: obj.regulatory_basis?.code
    };
  }
  if (typeof obj.event_id === "string" && (typeof obj.state === "string" || typeof obj.jurisdiction === "string") && typeof obj.lifecycle_state === "string") {
    return { kind: "instance", artifact_kind: "state-tracker-event" };
  }
  return { kind: "unknown" };
}
