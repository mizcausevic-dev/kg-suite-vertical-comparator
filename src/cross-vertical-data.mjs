// cross-vertical-data.mjs — Canonical "6 verticals × 6 shapes" matrix.
//
// Captured from the actual 36 sibling spec repos shipped across the
// kinetic-gain-protocol-suite, plus the kg-suite-vertical-router manifest.
//
// This is the data source for the cross-vertical comparison table that
// surfaces SAME vs DIFFERENT design contributions across the 6 verticals.

export const VERTICALS = [
  {
    code: "healthtech",
    name: "HealthTech",
    federal_floor: "FDA SaMD + HIPAA + Section 1557 + IMDRF",
    canonical_buyer: "St Mary Hospital",
    canonical_vendor: "VendorH AIClinician v7.x",
    canonical_decision_id: "STMARY-DEC-2026-HEALTH-0042"
  },
  {
    code: "edtech",
    name: "EdTech",
    federal_floor: "FERPA + COPPA + IDEA / Section 504 + ESSA",
    canonical_buyer: "Lincoln Unified School District",
    canonical_vendor: "VendorT MathBuddy v3.x",
    canonical_decision_id: "LINCOLN-DEC-2026-EDTECH-0019"
  },
  {
    code: "proptech",
    name: "PropTech / Real Estate",
    federal_floor: "RESPA + ECOA Reg B + Fair Housing Act + HMDA + GLBA + CFPB UDAAP",
    canonical_buyer: "Pacific Coast Mortgage Holdings",
    canonical_vendor: "VendorR LoanDecision v5.2",
    canonical_decision_id: "PACIFIC-COAST-DEC-2026-PROPTECH-0027"
  },
  {
    code: "insurtech",
    name: "Insurance / InsurTech",
    federal_floor: "NAIC AI Model Bulletin (Nov 2023) + NY DFS CL 7 + CO SB 21-169 + CA DOI Bulletin 2022-5 + FCRA",
    canonical_buyer: "Coastguard Insurance",
    canonical_vendor: "VendorI ClaimsTriage v3.x",
    canonical_decision_id: "COASTGUARD-DEC-2026-INSURTECH-0014"
  },
  {
    code: "hrtech",
    name: "HR Tech / Employment AI",
    federal_floor: "EEOC AI Guidance (May 2023) + Title VII + ADA + ADEA + GINA + OFCCP + NYC LL 144 + IL 820 ILCS 42 + MD HB 1202",
    canonical_buyer: "MomentumHR Inc.",
    canonical_vendor: "VendorE HireAssess v2.x",
    canonical_decision_id: "MOMENTUMHR-DEC-2026-HRTECH-0021"
  },
  {
    code: "fintech",
    name: "FinTech",
    federal_floor: "CFPB + OCC / FRB / FDIC joint AI + ECOA Reg B + FCRA Reg V + GLBA + BSA/AML + Section 1071 + Section 1033",
    canonical_buyer: "Meridian Financial",
    canonical_vendor: "VendorF CreditMind v4.x",
    canonical_decision_id: "MERIDIAN-DEC-2026-FINTECH-0033"
  },
  {
    code: "govtech",
    name: "GovTech / Public Sector AI",
    federal_floor: "OMB M-24-10 (Mar 2024) + OMB M-24-18 + AI Bill of Rights blueprint + Section 508 + Privacy Act of 1974 + FOIA + NIST AI RMF 1.0 + GenAI Profile + EO 14110 (rescinded by EO 14179) + FedRAMP + state government AI laws",
    canonical_buyer: "Pacific Region Federal Services Agency (PRFSA)",
    canonical_vendor: "VendorG GovDecide v3.x",
    canonical_decision_id: "PRFSA-DEC-2026-GOVTECH-0017"
  },
  {
    code: "legaltech",
    name: "LegalTech / AI in the Practice of Law",
    federal_floor: "ABA Model Rules 1.1 Comment 8 + 1.6 + 1.6(c) + 1.7 + 1.9 + 3.3 + 5.3 + 5.5 + attorney-client privilege (common law) + work-product doctrine (Fed. R. Civ. P. 26(b)(3)) + state bar formal opinions (CA / NY / FL / DC / PA / TX / IL) + ABA Formal Op 512 + Mata v. Avianca-era federal court standing orders",
    canonical_buyer: "Anchor & Reef LLP",
    canonical_vendor: "VendorL MatterMind v4.x",
    canonical_decision_id: "AR-DEC-2026-MATTER-0042"
  },
  {
    code: "energytech",
    name: "EnergyTech / Grid + Pipeline Operations",
    federal_floor: "NERC Reliability Standards CIP-002 through CIP-014 + NERC operating procedures + FERC Orders 2222 + 715 + Form 715 + TSA Security Directives SD-2021-02 / SD-2021-02C + DOE EO 14028 implementation + EPA Clean Air Act Section 114 + state PUC tariff + prudency review (CA D.24-06-008, NY 15-E-0751, TX PUCT 55718, MA DPU 24-15, IL ICC 24-0589, WA UE-240122) + ISO/RTO Business Practice Manuals",
    canonical_buyer: "Continental Grid Operator (CGO)",
    canonical_vendor: "VendorE GridSense v6.x",
    canonical_decision_id: "CGO-DEC-2026-GRID-0117"
  },
  {
    code: "defensetech",
    name: "DefenseTech / DIB AI Tooling",
    federal_floor: "DFARS 252.204-7012 (CDI safeguarding + 72-hour cyber incident reporting) + DFARS 252.204-7019/7020/7021 (NIST 800-171 self-assessment + CMMC certification) + CMMC 2.0 L1/L2/L3 (32 CFR 170) + NIST SP 800-171 r2 + NIST SP 800-172 + ITAR (22 CFR 120-130) + EAR (15 CFR 730-774) + EAR deemed export (22 CFR 120.50) + E.O. 13526 + ICD 705 + DoDI 5230.24 distribution statements + CUI Notice 2020-04 + NISPOM 32 CFR 117 + FAR 52.204-21 + False Claims Act 31 USC 3729 (post-Aerojet Rocketdyne)",
    canonical_buyer: "Stratos Aerospace (DIB Tier 2 contractor)",
    canonical_vendor: "VendorD GuardianAI v3.x",
    canonical_decision_id: "STRATOS-DEC-2026-DEF-0084"
  },
  {
    code: "retailtech",
    name: "RetailTech / Consumer AI",
    federal_floor: "FTC Section 5 + EU Omnibus 2019/2161 Art 6a + NY S365A ATBP + CA SB-892 + CCPA / CPRA + BIPA + PCI DSS",
    canonical_buyer: "Parkway Marketplace, Inc.",
    canonical_vendor: "VendorR PriceRunner v3.7.2",
    canonical_decision_id: "PARKWAY-DEC-2026-RETAILTECH-0042"
  }
];

export const SHAPES = [
  { code: "audit-stream",     name: "Operator audit-stream",            description: "Per-decision hash-chained AI-tool-access events" },
  { code: "state-tracker",    name: "Operator state-tracker",            description: "Per-jurisdiction regulatory-lifecycle ledger" },
  { code: "compliance-bundle",name: "Evidence Bundle (compliance)",     description: "Evidence-bundle profile mapped to vertical's federal-floor obligation families" },
  { code: "bias-bundle",      name: "Evidence Bundle (bias)",            description: "Evidence-bundle profile for pre-deployment + ongoing bias / equity coverage" },
  { code: "incident-card",    name: "Incident Card",                     description: "AI Incident Card profile for consumer-harm events" },
  { code: "vault-contract",   name: "Decision Card vault contract",      description: "AI Procurement Decision Card vault-contract profile" }
];

// The 6 × 6 matrix: each cell names the actual repo + its key innovation.
export const MATRIX = {
  healthtech: {
    "audit-stream":      { repo: "fhir-resource-access-audit",         innovation: "FHIR-bridged audit events; HIPAA permissible-purpose required on every PHI access" },
    "state-tracker":     { repo: "fda-samd-classification-board",      innovation: "FDA SaMD lifecycle (510(k) / De Novo / PMA + PCCP per Dec 2024 final)" },
    "compliance-bundle": { repo: "hipaa-readiness-evidence-bundle",    innovation: "18 HIPAA Security Rule standards across Admin / Physical / Technical safeguards" },
    "bias-bundle":       { repo: "clinical-bias-cohort-coverage-lab",   innovation: "OMB SPD 15 + Section 1557 + Fitzpatrick skin-type-classifier dimension" },
    "incident-card":     { repo: "medical-adverse-event-incident-card", innovation: "FDA MedWatch + EU MDR vigilance + IMDRF AE Terminology + CTCAE severity scale" },
    "vault-contract":    { repo: "phi-vault-contract-profile",         innovation: "HIPAA 18 Safe Harbor identifier categories" }
  },
  edtech: {
    "audit-stream":      { repo: "student-data-access-audit-stream",   innovation: "CEDS + Ed-Fi semantics; FERPA school-official-or-consent-basis required" },
    "state-tracker":     { repo: "state-ai-disclosure-state-tracker",  innovation: "50-state student-data-privacy laws (IL SOPPA, CA AB 1584 + AB 2876, TX HB 18, NY ED Law 2-d, VA ChAIPA)" },
    "compliance-bundle": { repo: "ferpa-readiness-evidence-bundle",    innovation: "8 FERPA obligation families (annual notification, school-official exception, directory info, consent, RoD, amendment, breach response, vendor procurement)" },
    "bias-bundle":       { repo: "student-cohort-bias-coverage-lab",    innovation: "ESSA accountability subgroups + EdTech additional dimensions (Fitzpatrick analog: EL WIDA proficiency, foster, homeless, primary home language)" },
    "incident-card":     { repo: "ai-student-record-incident-card-profile", innovation: "FERPA + COPPA + IDEA + Section 504 + Title VI/IX/504 + CTCAE-analog instructional-impact severity scale" },
    "vault-contract":    { repo: "pii-student-vault-contract-profile", innovation: "FERPA 7 §99.3 PII categories + COPPA 10 §312.2 PI categories (2025 refresh) + 4-doctrine consent_basis" }
  },
  proptech: {
    "audit-stream":      { repo: "mortgage-decision-record-audit-stream", innovation: "MISMO + Fannie Mae URLA semantics; human_underwriter_required = true (universal)" },
    "state-tracker":     { repo: "state-real-estate-ai-disclosure-tracker", innovation: "50-state real-estate AI laws (CA SB 942, CO SB 24-205, IL HB 3773, NY S 1169, TX HB 1709)" },
    "compliance-bundle": { repo: "respa-readiness-evidence-bundle",    innovation: "10 obligation families (RESPA, ECOA Reg B, TRID, FHA, HMDA, GLBA Safeguards, CFPB UDAAP, ALTA Best Practices, NAR 2024 Settlement, state laws)" },
    "bias-bundle":       { repo: "mortgage-applicant-bias-coverage-lab", innovation: "ECOA Reg B 9 protected classes + Fair Housing Act 7 classes + mortgage dimensions (LTV/DTI bands, MSA, census tract, majority-minority-tract flag); four-fifths-rule canonical threshold" },
    "incident-card":     { repo: "title-chain-evidence-incident-card-profile", innovation: "CFPB UDAAP + ECOA + Fair Housing + RESPA Section 8 + title-chain integrity event taxonomies" },
    "vault-contract":    { repo: "mls-data-access-vault-contract-profile", innovation: "RESPA + ECOA + Fair Housing + MLS + GLBA data categories + 7-doctrine consent_basis" }
  },
  insurtech: {
    "audit-stream":      { repo: "insurance-decision-record-audit-stream", innovation: "ACORD-bridged; covers underwriting + claims + pricing under one schema; human_adjudicator_required scoped to adverse-action-capable kinds + recommendations only (vs PropTech's universal)" },
    "state-tracker":     { repo: "state-insurance-ai-disclosure-tracker", innovation: "Per-state DOI bulletins + NAIC adoptions (CT first; NY DFS CL 7; CO 3 CCR 702-10 / SB 21-169; CA Bulletin 2022-5; WA TAA 2024-04)" },
    "compliance-bundle": { repo: "naic-ai-bulletin-readiness-evidence-bundle", innovation: "6 obligation families: governance (NAIC §2) + risk-management (§3) + third-party-AI (§4) + testing-validation + consumer-protection + state-DOI examination" },
    "bias-bundle":       { repo: "insurance-applicant-bias-coverage-lab", innovation: "Adds `actuarial-soundness-defended` coverage status — insurance regulators recognize some apparent gaps are actuarially required (CO SB 21-169 §10-3-1104.9(7) defense)" },
    "incident-card":     { repo: "unfair-discrimination-incident-card-profile", innovation: "10 event types + 4-tier severity + 6 regulator-referral pathways with evaluation-state tracking (filed / scheduled / evaluated-not-applicable / evaluated-not-required + reasons)" },
    "vault-contract":    { repo: "policyholder-data-vault-contract-profile", innovation: "15 insurance-data categories incl. telematics + smart-home sensor + medical-record summary; protected-class data default `tokenized-and-not-as-model-input-by-default`" }
  },
  hrtech: {
    "audit-stream":      { repo: "employment-decision-record-audit-stream", innovation: "First audit stream with TWO orthogonal invariants: human-hiring-decision + NYC LL 144 candidate-notice (independent of human-in-loop)" },
    "state-tracker":     { repo: "state-employment-ai-disclosure-tracker", innovation: "First Suite tracker supporting sub-state jurisdictions (US-XX-CITY pattern, needed because NYC LL 144 is THE headline)" },
    "compliance-bundle": { repo: "eeoc-readiness-evidence-bundle",      innovation: "6 obligation families: Title VII disparate-impact (UGESP) + ADA accommodation + ADEA + GINA + EEOC recordkeeping + OFCCP (conditional)" },
    "bias-bundle":       { repo: "employment-candidate-bias-coverage-lab", innovation: "Adds `accommodation-pathway-impairment` coverage status (captures ADA pathway not working independent of disparate-impact analysis) AND `two-sd-violation` (UGESP §1607.5(D) practical-significance)" },
    "incident-card":     { repo: "employment-ai-incident-card-profile", innovation: "13 event types incl. ai-nyc-ll-144-audit-failure + ai-il-820-ilcs-42-violation + ai-md-hb-1202-facial-recognition-violation + ai-ofccp-finding + ai-class-action-plaintiff-filing" },
    "vault-contract":    { repo: "candidate-data-vault-contract-profile", innovation: "Strictest default-deny posture across all 5 6-packs: 6 of 19 data categories default `tokenized-and-not-as-model-input-by-default` (biometric features, credit-check, social-media, protected-class self-ID, accommodation request, ADA medical doc); ADA accommodation pathway 5-flag block including `accommodation-decision-not-bound-to-original-ai-tool-output`" }
  },
  fintech: {
    "audit-stream":      { repo: "financial-decision-record-audit-stream", innovation: "TWO orthogonal invariants: human-credit-officer + FCRA permissible-purpose required (every credit-bureau pull cites FCRA §604)" },
    "state-tracker":     { repo: "state-financial-ai-disclosure-tracker", innovation: "First Suite tracker supporting multi-regulation per state (CA CCFPL statute + CA DFPI 10 CCR 1060-1077 implementation as parallel lifecycle streams)" },
    "compliance-bundle": { repo: "cfpb-readiness-evidence-bundle",      innovation: "8 obligation families: MRM (OCC 2011-12 + FRB SR 11-7) + ECOA Reg B + FCRA Reg V + GLBA Safeguards + BSA/AML + Section 1071 + Section 1033 + CFPB UDAAP" },
    "bias-bundle":       { repo: "financial-applicant-bias-coverage-lab", innovation: "Adds `business-necessity-defended` AND `redlining-pattern-flagged` coverage statuses; Section 1071 minority/women/LGBTQI-owned business demographic dimensions" },
    "incident-card":     { repo: "financial-ai-incident-card-profile", innovation: "primary-federal-supervisor-notification regulator referral routing (OCC for national banks / FRB for member SHCs / FDIC for state non-member / NCUA for credit unions); fincen-sar-narrative-update; cfpb-fair-lending-referral" },
    "vault-contract":    { repo: "financial-customer-data-vault-contract-profile", innovation: "17 categories incl. alternative-data feeds (Plaid, MX, Yodlee, Klarna, Afterpay, Affirm, UltraFICO) under Section 1033; section-1033-data-portability-window in retention envelope; vendor-occ-frb-fdic-supervisory-readiness-attestation" }
  },
  govtech: {
    "audit-stream":      { repo: "government-decision-record-audit-stream", innovation: "FIRST Suite audit stream with THREE orthogonal invariants: human-agency-officer-required + Federal AI Use Case Inventory entry required + classification-clearance (ordered UNCLASSIFIED<CUI<CONFIDENTIAL<SECRET<TOP-SECRET enforcement per E.O. 13526). Agency block with is_safety_impacting + is_rights_impacting flags drive OMB M-24-10 §5(c)/(d) minimum-practices triggers" },
    "state-tracker":     { repo: "state-government-ai-disclosure-tracker", innovation: "Per-jurisdiction lifecycle ledger covering federal EOs + OMB memos + state government AI laws + local AI ordinances. Includes GovTech-unique `rescinded` lifecycle state (executive orders + memos uniquely susceptible). Tracks government's OWN AI use rules — distinct from prior 6 state trackers which cover regulator-side rules" },
    "compliance-bundle": { repo: "omb-m24-10-readiness-evidence-bundle",  innovation: "8 obligation families: ai-governance (OMB §2) + Federal AI Use Case Inventory (§3(a)) + rights-impacting minimum practices (§5(d)) + safety-impacting minimum practices (§5(c)) + OMB M-24-18 procurement + Section 508 accessibility + Privacy Act/FOIA + NIST AI RMF. Safety-impacting P30D monitoring cadence is shortest of any vertical (safety > everything)" },
    "bias-bundle":       { repo: "government-applicant-bias-coverage-lab", innovation: "Adds GovTech-unique Title VI Limited English Proficiency (LEP) subgroup dimension (no equivalent in private-sector verticals). Coverage statuses include `accessibility-pathway-impairment` (ADA Title II / Title VI LEP failure) + `agency-civil-rights-finding-pending` (federal agencies have OWN internal civil rights offices)" },
    "incident-card":     { repo: "government-ai-incident-card-profile",   innovation: "18 event types — most extensive across the prior 7 verticals — because government AI has widest event-type surface area (multiple internal regulators + multiple external regulators + congressional oversight + state-AG overlay + Federal AI Use Case Inventory inaccuracy as distinct event). Includes GovTech-unique federal-ai-use-case-inventory-correction referral pathway" },
    "vault-contract":    { repo: "citizen-data-vault-contract-profile",    innovation: "15 categories + REQUIRED `ai_use_case_inventory_block` (OMB M-24-10 §3(a) inventory-publication requirement encoded into the Decision Card itself — NO other vertical has this). Protection levels include GovTech-unique `clearance-gated` (REQUIRES matching agent_clearance_level) + `tokenized-with-foia-exemption-tagging` + `tokenized-with-language-code-cleartext` (Title VI LEP routing). Retention envelope includes NARA records-management schedule + Privacy Act SORN URI + classification-declassification schedule" }
  },
  legaltech: {
    "audit-stream":      { repo: "matter-decision-record-audit-stream", innovation: "FIRST Suite audit stream where `resource.privilege_tier` is REQUIRED on every event — 8-value taxonomy (privileged · work-product · joint-defense · common-interest · public-record · pre-litigation-investigative-privilege · tribunal-disclosure-required · opposing-party-quarantine). Three invariants: privilege-tier consistency on work-product-aware kinds + engagement-letter binding (ABA 1.7/1.9 conflict check) + citation-validation-before-production-ready (anti-Mata-v-Avianca). conflict_check block bound to engagement_letter_url (not generic procurement)." },
    "state-tracker":     { repo: "state-bar-ai-disclosure-tracker", innovation: "Tracks ABA + state bar formal opinions (CA, NY-COSAC, FL, DC, PA, TX, IL) + federal court standing orders in the SAME field (`bar_jurisdiction` pattern accepts both `US-XX-BAR` and `SDNY` etc.). SDNY's Mata v. Avianca sanction is the historical anchor that motivates the citation-validation invariant on the sibling audit-stream. Lifecycle includes LegalTech-distinct `court-standing-order-issued` + `mandatory-cle-required` states." },
    "compliance-bundle": { repo: "aba-rule-1-6-readiness-evidence-bundle", innovation: "8 obligation families × 35 required evidence kinds. Treats attorney-client privilege preservation + work-product doctrine preservation as TWO separate families (privilege has waiver mechanics confidentiality doesn't). LegalTech-distinctive: candor-toward-tribunal as its own family driven by post-Mata-v-Avianca state-bar opinions." },
    "bias-bundle":       { repo: "legal-applicant-bias-coverage-lab", innovation: "Three LegalTech-unique subgroup taxonomies: indigent_defendant_status (Sixth Amendment / Gideon), immigration_status_disclosed, criminal_history_band. Two unique coverage statuses: compas-cautionary-pattern-detected (ProPublica 2016 two-sided asymmetry) + batson-pattern-detected (Batson v. Kentucky). Plus indigent-defendant-disparity-detected (Sixth Amendment effective assistance). Supervising-attorney review REQUIRED on four trigger categories — bias lab doesn't just measure, it gates." },
    "incident-card":     { repo: "legal-ai-incident-card-profile", innovation: "18 event types incl. Mata-v-Avianca-class court-sanctioned-hallucination. 6-code privilege_waiver_risk_taxonomy (no other vertical Incident Card has anything analogous; encodes Fed. R. Evid. 502(d) clawback as a distinct rung). ed25519 signature REQUIRED (not optional, unlike sibling Incident Cards). LegalTech-unique referral pathways: outside ethics counsel, state bar disciplinary counsel, court disclosure, professional liability insurer, criminal-defense Sixth-Amendment effective-assistance." },
    "vault-contract":    { repo: "attorney-client-data-vault-contract-profile", innovation: "Design centerpiece. 18 data categories × 8 privilege tiers (SAME 8 enum as the audit-stream's resource.privilege_tier — typed cross-repo binding). 4 LegalTech-unique runtime invariants: cross-matter-firewall, privilege-marker stamping, opposing-party-quarantine enforcement, no-training-data-use vendor contract clause REQUIRED. Two unique protection levels: tokenized-and-not-as-model-input-by-default-cross-matter + privilege-marker-required-on-every-disclosure." }
  },
  energytech: {
    "audit-stream":      { repo: "grid-decision-record-audit-stream", innovation: "FIRST Suite audit stream where resource.bes_cyber_system_categorization (HIGH/MEDIUM/LOW/NONE/PHYSICAL-SECURITY-PERIMETER-ONLY per CIP-002-5.1a) AND resource.ot_it_boundary (OT/IT/OT-IT-CROSSING) are BOTH REQUIRED on every event — first vertical with physical-realm-vs-data-realm distinction. Three invariants including the FIRST Suite invariant enforcing a regulatory wall-clock numerically: CIP-008 incident reporting MUST be within 1 hour of event timestamp. Plus human-operator-in-loop on HIGH-IMPACT+OT (NERC-certified operator required on transmission switching) and TSA pipeline disclosure on energytech.pipeline.* kinds." },
    "state-tracker":     { repo: "state-puc-ai-disclosure-tracker", innovation: "Mixed-authority shape: state PUC + FERC + NERC + ISO/RTO + TSA/DOE/EPA all in one `jurisdiction` field — collapsing them reflects the energy sector's actual multi-layered regulatory geography (FERC preempts state in wholesale markets, NERC standards apply continent-wide, TSA owns pipeline cybersecurity, state PUCs own retail). Per-(jurisdiction, docket) lifecycle threading — same state PUC can have multiple parallel AI dockets without pollution. 10 jurisdictions seeded across 6 state PUCs + FERC + NERC + TSA + CAISO." },
    "compliance-bundle": { repo: "nerc-cip-readiness-evidence-bundle", innovation: "12 obligation families × 53 required evidence kinds — LARGEST evidence bundle in the Suite (reflects energy sector's four peer-level regulators each with mandatory standards: NERC + TSA + FERC + state PUCs). Two parallel regulatory clocks as separately-named required drill records (CIP-008 1-hour + TSA 12-hour). AI model version change explicitly treated as CIP-010 configuration change requiring change-management process. DER aggregation fairness metrics by customer class + geography + DER type (FERC Order 2222 mandate)." },
    "bias-bundle":       { repo: "grid-operator-bias-coverage-lab", innovation: "UNIQUE FRAMING: population-level equity in essential service delivery — not individual decisioning bias. Harm pattern is uneven distribution of critical infrastructure outcomes across census tracts + EJ communities, not uneven treatment of individuals. 9 subgroup taxonomies anchored to EPA EJSCREEN + Justice40 + state DAC designations + DOE LEAD energy-burden bands. 3 EnergyTech-unique coverage statuses: load-shed-disparity-pattern-detected, restoration-priority-disparity-pattern-detected, critical-medical-equipment-response-time-violation. 7-day freshness window for load shed events (shortest in Suite — energy emergencies don't tolerate quarterly review)." },
    "incident-card":     { repo: "grid-operations-incident-card-profile", innovation: "20 event types — MOST EXTENSIVE Incident Card across all 9 verticals — including regulatory-clock meta-violations as first-class event types (cip-008-1-hour-notification-window-missed + tsa-sd-2021-02c-12-hour-window-missed). Missing the window IS its own separately-enforceable violation, stacked on the underlying incident. 12 regulator referral pathways — most extensive in Suite — covering NERC E-ISAC + CISA + TSA + DOE CESER + FERC + ISO/RTO Market Monitor + state PUC + EPA EJ + DOJ Civil Rights + FBI Cyber Division. 7-code regulatory_reporting_clock_compliance REQUIRED field tracks two parallel clocks separately." },
    "vault-contract":    { repo: "grid-asset-data-vault-contract-profile", innovation: "Design centerpiece. 20 data categories × 5 BES tiers × 3 OT/IT codes — bes_cyber_system_categorization + ot_it_boundary are SAME enums cross-bound across THREE EnergyTech repos (vault + audit-stream + incident card) — strongest typed cross-repo binding in the Suite to date. 7 EnergyTech-unique protection levels: bes-categorization-gated (+ write-locked variant), ot-it-data-diode-required (+ write-locked variant), bcsi-protected-cip-011, physical-security-perimeter-gated, medical-baseline-tokenized-with-flag (ONLY place in Suite where per-record flag remains accessible alongside opaque identity — outage-prioritization AI must honor critical-medical-equipment registry without learning who the customer is). 5 unique runtime invariants including asymmetric OT→IT data-diode enforcement (IT→OT FORBIDDEN by default)." }
  },
  defensetech: {
    "audit-stream":      { repo: "defense-decision-record-audit-stream", innovation: "FIRST Suite audit stream with THREE first-class required fields on resource — cui_categorization (9 tiers PUBLIC→SCI) + export_control_status (4 tiers NOT-CONTROLLED→ITAR) + foreign_person_access_restriction (5 tiers US-PERSON-ONLY→NO-RESTRICTION). Three invariants: CUI distribution-statement on CUI-Specified+ (DoDI 5230.24); export-control gating (ITAR requires us_person_status verification + DDTC license number on AUTHORIZED-FOREIGN-PERSON); DFARS 252.204-7012(c)(1)(ii) 72-hour wall-clock — SECOND Suite vertical with numeric regulatory wall-clock invariant (after EnergyTech CIP-008 1-hour). 21-value regulatory_basis enum + 18-kind event taxonomy + 10-scheme subject_ref + 8-value clearance taxonomy." },
    "state-tracker":     { repo: "dod-cmmc-disclosure-tracker", innovation: "10 federal authorities — DoD CIO + Cyber AB + DIBCAC + DDTC + BIS + NIST + GSA + DCMA + DCSA + NARA-ISOO. 8 distinct enforcement modes (contract-clause-flowdown / ecosystem-accreditation / government-direct-assessment / license-pre-authorization / license-pre-authorization-plus-screening / standards-incorporation-by-reference / schedule-pre-vetting / contract-administration-oversight / facility-personnel-clearance / registry-curation-plus-agency-oversight) — most diverse enforcement-mode diversity of any state-tracker in the Suite, reflecting that no two federal-defense authorities work the same way. AI-specific position captured for all 10 authorities as_of seed date." },
    "compliance-bundle": { repo: "cmmc-l2-l3-readiness-evidence-bundle", innovation: "18 control families × 48 evidence kinds — 14 NIST 800-171 families + 4 CMMC-program-specific (Program Mgmt, POA&M, SPRS Scoring, C3PAO Assessment Artifacts). Three invariants: L3+DIBCAC mode requires dibcac confidence score; DFARS 7019/7020 in scope requires cmmc-sprs-scoring evidence; every not-satisfied outcome must carry a poam_ref (orphan failures break POA&M traceability). DefenseTech-unique evidence kinds: ai-tool-control-attestation, controlled-technical-data-handling-record, us-person-status-verification-record, deemed-export-screening-record, fso-cosign-record, scif-physical-control-evidence, ddtc-registration-evidence, shared-responsibility-evidence-aws-govcloud-azure-government." },
    "bias-bundle":       { repo: "defense-contractor-bias-coverage-lab", innovation: "15 dimensions × 8 metric kinds × 14 regulatory bases × 8 decision domains. Population-level only (per OFCCP guidance, counts below 20 reported as insufficient-data to avoid de-anonymization). DefenseTech-unique dimensions: protected-veteran-status-vevraa-4212, security-clearance-tier-distribution, clearance-denial-rate, polygraph-success-rate, subcontractor-sb-sdb-vosb-classification, insider-threat-flag-rate. Three invariants: veteran dimensions require vevraa-38-usc-4212 basis; clearance dimensions require BOTH eo-12968-personnel-security-access AND adjudicative-guidelines-32-cfr-147; adverse-impact-ratio metric requires both comparator and reference subgroups." },
    "incident-card":     { repo: "defense-ai-incident-card-profile", innovation: "22 event types — LARGEST Incident Card profile in the Suite. Spans DFARS cyber incidents, CUI handling (spillage/marking/mishandling), ITAR+EAR violations (license-mismatch + Entity List screening), foreign-person access (unauthorized + blocked), classified-environment misuse + SCIF policy violations + AI-generated classified-marking errors, NISPOM insider-threat flags, personnel clearance mishandling, CMMC L2/L3 gaps + POA&M failures + SPRS discrepancies, AI-tool supply-chain compromise, AI-output on unverified US-person systems. Three invariants: DFARS 72-hour clock at the published-Card level (mirrors audit-stream invariant); export-control basis matching (ITAR cites ITAR, EAR cites EAR); DoDI 5230.24 distribution-statement obligation persists through CUI-Specified+ S1/S2 incident response." },
    "vault-contract":    { repo: "cui-data-vault-contract-profile", innovation: "DESIGN CENTERPIECE. FIRST Suite vault contract with 3 ORTHOGONAL TYPED POLICY AXES (cui_handling_policy 9 tiers × export_control_handling_policy 4 tiers × foreign_person_handling_policy 5 tiers). resolvePolicy() intersects all 3 axes at runtime — most-restrictive axis wins. vs LegalTech 1-axis (privilege_tier), EnergyTech 2-axis (bes_categorization + ot_it_boundary), every other vertical 1-axis equivalent. Defense regulators don't compose: DDTC, DoD CIO, and foreign-person verification each enforce independently. 4 invariants: CUI-Specified+ requires distribution_statement (DoDI 5230.24); ITAR requires us-person-verified minimum (22 CFR 120.62); CLASSIFIED-* requires BOTH audit_stream_event AND fso_cosign; AUTHORIZED-FOREIGN-PERSON requires audit_stream_event (per-event DDTC license review). cross_binding_refs as REQUIRED schema fields publish sibling repos — DefenseTech is the first vertical where the vault contract is the explicit cross-binding centerpiece of the 6-pack." }
  },
  retailtech: {
    "audit-stream":      { repo: "retail-decision-record-audit-stream", innovation: "16-kind event taxonomy across 12 commerce surfaces (web / mobile-app / in-store-pos / in-store-kiosk / call-center / chatbot / marketplace-listing / partner-portal / connected-tv / voice-assistant / sms / mobile-web). 20 resource types, 14 regulatory doctrines. TWO retail-specific invariants: personalized-pricing-transparency (pricing_transparency.disclosure_present + disclosure_artifact_url REQUIRED on personalized-pricing kinds — EU Omnibus 2019/2161 Art 6a + FTC Section 5) + biometric-consent (biometric_governance.consent_artifact_ref + retention_envelope_id REQUIRED on face/voice/gait/palm/retina template resources — BIPA §15(b)+(c)). No federal adverse-action statute equivalent to ECOA — invariants are driven by EU + state law + FTC §5 enforcement posture rather than required-notice obligations." },
    "state-tracker":     { repo: "state-retail-ai-disclosure-tracker", innovation: "Per-state retail AI lifecycle ledger. 17 obligation kinds across personalized-pricing disclosure / ADM opt-out / annual bias audit / biometric consent + retention / dark patterns prohibition / data broker registration / minor targeting restriction / sensitive PI opt-in. 15 covered-decision types from dynamic-pricing to biometric-identification. Seed: IL BIPA + 2024 SB 2979 amendment (per-scan-stacking remediation), CA CCPA → CPRA → CPPA ADMT (effective 2026-01-01), NY S365A ATBP (in-comm) + NYC §22-1201 biometric ordinance (effective). Convention: per-regulation-per-file (US-NY-atbp.ndjson vs US-NY-nyc-biometric.ndjson) — verifier catches illegal lifecycle transitions when multiple regs share a state." },
    "compliance-bundle": { repo: "ftc-algorithmic-pricing-readiness-evidence-bundle", innovation: "12-section bundle: AI system inventory + personalized-pricing disclosure artifacts + annual algorithmic bias audit reports + vendor AI due-diligence dossiers + ADM opt-out evidence + right-to-explanation logs + consumer notice exemplars + biometric consent + retention records + dark patterns review + incident response log + training data provenance + external audit results. Aligned with FTC Section 5 + 2023 algorithmic-pricing guidance + FTC Operation AI Comply (2024) + EU Omnibus 2019/2161 + state retail AI laws. Section 8 (biometric records) cross-binds to shopper-pii-vault-contract-profile via consent_artifact_path_pattern." },
    "bias-bundle":       { repo: "consumer-pricing-bias-coverage-lab", innovation: "6 cohort dimensions: income-proxy (ZIP-median tertile), language-locale (Accept-Language header), device-class (premium/mid/budget phone + desktop), time-of-day (local-hour buckets), geographic (state + urban/rural), loyalty-tenure (new <3mo / established 3-24mo / long-tenure >24mo). 4-band verdict (within-tolerance 0.95-1.05× / watchlist / investigate / remediate). RetailTech-unique: time-of-day + loyalty-tenure dimensions — neither proxies race or income, but BOTH proxy customer-acquisition cohorts where personalized pricing can become discriminatory in ways the protected-class lens misses." },
    "incident-card":     { repo: "retail-ai-incident-card-profile", innovation: "12 RetailTech-specific event types (pricing discrimination complaint, recommendation-bias surface, loyalty-tier discrimination, fraud false-positive harm, biometric misidentification, biometric consent violation, refund discrimination, ad-personalization harm, dark-patterns enforcement event, deceptive AI output, minor-targeting violation, data-broker exposure). 8 reason codes (proxy-feature-overweighted, training-data-skew, vendor-model-substitution, disclosure-gap, consent-flow-failure, biometric-template-collision, human-review-bypass, cross-state-misapplication). 4-band severity (informational / monitor / escalate / crisis). Referral pathways: FTC §5 complaint, state AG inquiry, EU AI Act Art 73 serious-incident report. RetailTech-unique: BIPA per-scan-stacking remediation context post-IL SB 2979." },
    "vault-contract":    { repo: "shopper-pii-vault-contract-profile", innovation: "7 data classes (identity PII / payment data / biometric templates / purchase history / browsing history / loyalty data / location data) × 4 tokenization methods (format-preserving / random-opaque / redacted / hashed) × 6 retention envelopes (transaction-only / short / medium / long / until-relationship-ends / biometric-special). RetailTech-unique: biometric-special envelope (365-day BIPA-aligned hard-delete on T+366); location-data redacted-by-default with opt-in fine-geo as CCPA Sensitive Personal Information; payment-data NEVER appears in audit-stream events (PCI DSS scope segregation). Global obligations block: CCPA Do-Not-Sell + Global Privacy Control honor + under-18 tokenization + data-broker-relationship disclosure." }
  }
};

// Cross-cutting invariants — same concept named/scoped differently per vertical
export const CROSS_CUTTING_INVARIANTS = [
  {
    concept: "Human-in-loop on adverse-action-capable AI decisions",
    vertical_naming: {
      healthtech: "human_clinician_required (when adverse clinical outcome)",
      edtech: "N/A (FERPA architecture doesn't bind on AI-driven decisions the same way)",
      proptech: "human_underwriter_required (universal on adverse-action events)",
      insurtech: "human_adjudicator_required (scoped to adverse-action-capable kinds AND recommendations: decline / rate-up / approve-with-conditions)",
      hrtech: "human_hiring_decision_required (scoped to adverse-action-capable kinds AND recommendations: decline / do-not-promote / performance-below / terminate-recommended)",
      fintech: "human_credit_officer_required (scoped to adverse-action-capable kinds AND recommendations: decline / approve-with-conditions / counter-offer / freeze / reduce-line)",
      govtech: "human_agency_officer_required (scoped to adverse-action-capable kinds AND recommendations: deny / approve-with-conditions / withhold-fully / withhold-partially) + Federal AI Use Case Inventory entry required + classification-clearance enforcement (THREE orthogonal invariants — the FIRST Suite audit stream with three)",
      legaltech: "supervising_attorney_bar_id_required on every event + conflict_check.passed_at bound to engagement_letter_url (ABA 1.7/1.9) + citation-validation-before-production-ready (anti-Mata-v-Avianca) — THREE invariants with the supervising-attorney as named principal, not an abstract role",
      energytech: "human-operator-in-loop REQUIRED on HIGH-IMPACT BES Cyber System + OT (or OT-IT-CROSSING) events; transmission-switching events ADDITIONALLY require NERC System Operator certification. THREE invariants including the FIRST Suite invariant enforcing a regulatory wall-clock numerically (CIP-008 1-hour reporting window). outcome.recommendation value 'auto-execute-within-envelope' is permitted ONLY for LOW-impact + IT-only events; HIGH-impact never permits auto-execute",
      defensetech: "Three independent gating mechanisms enforced at runtime by vault contract intersection — none compose: (a) per-event US-person verification on every ITAR resource (22 CFR 120.62 + 22 CFR 120.50 deemed-export); (b) minimum clearance level enforced per CUI tier (secret-clearance on CLASSIFIED-CONFIDENTIAL/SECRET, top-secret on CLASSIFIED-TOP-SECRET, ts-sci on SCI); (c) FSO co-sign required on every CLASSIFIED-* action + per-event DDTC license number on AUTHORIZED-FOREIGN-PERSON access. SECOND Suite vertical with numeric regulatory wall-clock invariant (DFARS 252.204-7012(c)(1)(ii) 72-hour cyber-incident reporting to dibnet.dod.mil). Encoded in cui-data-vault-contract-profile schema as REQUIRED 3-axis policy slots with resolvePolicy() runtime intersection.",
      retailtech: "human_pricing_reviewer_required (on high-stakes personalized-pricing events flagged by bias-coverage lab as approaching watchlist threshold) + human_review_required on every retail.biometric.face-template-matched + retail.refund.discrimination-claim event. Distinct from FinTech/InsurTech: no statutory adverse-action equivalent — driven by FTC §5 + state UDAP exposure rather than ECOA-style required notices."
    }
  },
  {
    concept: "Adverse-action notice",
    vertical_naming: {
      healthtech: "Adverse clinical outcome notification (HIPAA breach pathway + clinical documentation)",
      edtech: "FERPA Records of Disclosure + breach notification (state-specific)",
      proptech: "ECOA 12 CFR §1002.9 30-day adverse-action notice + RESPA-specific overlays",
      insurtech: "FCRA §615 + state DOI partial-claim-denial notice rules",
      hrtech: "Adverse employment action (rescinded offer + reasons reconciled against EEOC sample list)",
      fintech: "ECOA 12 CFR §1002.9 + FCRA §615 risk-based-pricing / adverse-action notice",
      govtech: "Statutory appeals pathway (5 USC §555 + agency-specific appeal rules) + agency civil rights office referral + OMB notification on §5(d) impact-assessment trigger",
      legaltech: "ABA Rule 1.4 client notification (always) + ABA Rule 3.3 tribunal disclosure (when AI output influenced filed material) + state bar disciplinary counsel notification (S3+) + criminal-defense Sixth-Amendment effective-assistance disclosure to defendant + appellate counsel",
      energytech: "CIP-008 1-hour wall-clock notification to NERC E-ISAC + TSA SD-2021-02C 12-hour wall-clock notification to CISA + TSA (two parallel regulatory clocks, both as required drill records). Missing either window IS its own separately-enforceable violation, stacked on the underlying incident. State PUC consumer-notification for critical-medical-equipment household outage response failures.",
      defensetech: "DFARS 252.204-7012(c)(1)(ii) **72-hour wall-clock** report to dibnet.dod.mil (filed under contractor's DoD-approved Medium Assurance Certificate). Plus DDTC voluntary disclosure (optional but expected for ITAR breaches), BIS voluntary disclosure (optional but expected for EAR breaches), FSO notification (always required on cleared facilities), and NISPOM-required reporting at cleared facilities for personnel-clearance-affecting events. False Claims Act exposure (post-Aerojet Rocketdyne) — false certification of DFARS 7019/7020 self-assessment carries 31 USC 3729 treble-damages exposure separate from the underlying cyber-incident.",
      retailtech: "EU Omnibus Directive 2019/2161 Art 6a personalized-pricing disclosure modal (REQUIRED inside the audit event itself via pricing_transparency.disclosure_artifact_url); CCPA / CPRA right-to-explanation on Automated Decisionmaking; state retail AI laws layer per-state disclosure obligations (NY S365A ATBP, CA SB-892, CO ADMT). No federal statutory equivalent to ECOA 1002.9 — non-disclosure is FTC §5 deceptive-practices exposure rather than a denied right."
    }
  },
  {
    concept: "Disparate-impact / bias measurement threshold",
    vertical_naming: {
      healthtech: "Per-cohort performance gap + Section 1557-aligned equity metrics",
      edtech: "ESSA subgroup gap + EL WIDA proficiency gap + accommodation-related gap",
      proptech: "EEOC four-fifths-rule (selection-rate ratio < 0.80) — canonical threshold",
      insurtech: "EEOC four-fifths-rule (where applicable) + actuarial-soundness defense framework",
      hrtech: "EEOC four-fifths-rule + UGESP §1607.5(D) 2-standard-deviation practical-significance test",
      fintech: "EEOC four-fifths-rule + business-necessity defense + redlining-pattern flagging",
      govtech: "EEOC four-fifths-rule where applicable + Title VI Limited English Proficiency dimension (GovTech-unique) + OMB M-24-10 §5(d) rights-impacting impact-assessment trigger + accessibility-pathway-impairment + agency-civil-rights-finding-pending coverage statuses",
      legaltech: "Title VI + Sixth Amendment + Batson v. Kentucky + ABA Criminal Justice Standards. LegalTech-unique COMPAS-cautionary-pattern-detected (ProPublica 2016 two-sided asymmetry) + batson-pattern-detected + indigent-defendant-disparity-detected (Sixth Amendment effective-assistance at the AI tool ACCESS layer, not just output)",
      energytech: "POPULATION-LEVEL equity in essential service delivery — first Suite vertical to reframe bias measurement from individual decisioning to uneven distribution of critical infrastructure outcomes. EPA Title VI + Justice40 + state PUC EJ orders. 3 EnergyTech-unique pattern detectors: load-shed-disparity-pattern-detected + restoration-priority-disparity-pattern-detected + critical-medical-equipment-response-time-violation. 7-day freshness window for load shed (shortest in Suite).",
      defensetech: "OFCCP 4/5ths-rule on DIB workforce dimensions + VEVRAA-38-USC-4212 protected-veteran preference + Section 503 7%-utilization-goal on disability + Equal Pay Act compensation gap + ADEA age + EO 12968 + 32 CFR 147 adjudicative-guidelines disparity tracking on security clearances + NISPOM insider-threat-flag-rate per-1000 + SBA SB/SDB/VOSB/SDVOSB sub-contractor flow-down coverage %. 15 dimensions × 8 metric kinds × 8 decision domains. Population-level only — counts below 20 reported as insufficient-data per OFCCP guidance to avoid de-anonymization. DefenseTech-unique dimensions: protected-veteran-status-vevraa-4212, security-clearance-tier-distribution, clearance-denial-rate, polygraph-success-rate, subcontractor-sb-sdb-vosb-classification, insider-threat-flag-rate.",
      retailtech: "EEOC four-fifths-rule applied to proxy-protected-class cohorts (income via ZIP-median, language via Accept-Language, device class). 4-band verdict (within-tolerance / watchlist / investigate / remediate) from consumer-pricing-bias-coverage-lab. RetailTech-unique: 6 cohort dimensions including time-of-day + loyalty-tenure (which proxy NEITHER race NOR income but DO proxy customer-acquisition cohorts where pricing can become discriminatory). FTC §5 disparate-impact framing under 2023 algorithmic-pricing guidance."
    }
  },
  {
    concept: "Protected-class data handling in vault contract",
    vertical_naming: {
      healthtech: "PHI (Protected Health Information) under HIPAA 18 Safe Harbor categories",
      edtech: "Student PII under FERPA 7 §99.3 + COPPA 10 §312.2 categories",
      proptech: "ECOA + Fair Housing protected classes (RESPA + GLBA additional)",
      insurtech: "CO SB 21-169-named classes; default `tokenized-and-not-as-model-input-by-default`",
      hrtech: "EEOC + OFCCP segregation requirements; default `tokenized-and-not-as-model-input-by-default`",
      fintech: "ECOA Reg B protected classes + Section 1071 demographic data; default `tokenized-and-not-as-model-input-by-default` with firewall pathway",
      govtech: "REQUIRED `ai_use_case_inventory_block` (OMB M-24-10 §3(a) encoded into Decision Card itself — no other vertical has this); classified-data + CUI clearance-gated; protected-class self-ID default NOT a model input; Privacy Act SORN URI + NARA records-management schedule required",
      legaltech: "8-value privilege_tier taxonomy as FIRST-CLASS field on every audit event (same enum cross-bound to the vault contract). 4 LegalTech-unique runtime invariants: cross-matter-firewall + privilege-marker stamping + opposing-party-quarantine enforcement + no-training-data-use vendor contract clause REQUIRED. Two unique protection levels: tokenized-and-not-as-model-input-by-default-cross-matter + privilege-marker-required-on-every-disclosure",
      energytech: "5-tier bes_cyber_system_categorization + 3-code ot_it_boundary taxonomies BOTH as FIRST-CLASS fields on every audit event — SAME enums cross-bound across THREE EnergyTech repos (vault + audit-stream + incident card). Strongest typed cross-repo binding in the Suite to date. 5 EnergyTech-unique runtime invariants including asymmetric OT→IT data-diode enforcement (IT→OT FORBIDDEN by default) + critical-medical-equipment flag preservation (only place in Suite where per-record flag remains accessible alongside opaque identity). 7 unique protection levels including bes-categorization-gated + bcsi-protected-cip-011 + medical-baseline-tokenized-with-flag.",
      defensetech: "FIRST Suite vault contract with **3 orthogonal typed policy axes** (cui_handling_policy 9 tiers × export_control_handling_policy 4 tiers × foreign_person_handling_policy 5 tiers) — vs EnergyTech 2-axis, LegalTech 1-axis (privilege_tier), every other vertical 1-axis equivalent. resolvePolicy() intersects all 3 axes at runtime to produce the operative policy for a (CUI tier, export tier, foreign tier) tuple — most-restrictive axis wins. cross_binding_refs as REQUIRED schema fields publish sibling repos (audit-stream + evidence-bundle + incident-card) — DefenseTech is the first vertical where the vault contract is the explicit cross-binding centerpiece of the 6-pack. 4 runtime invariants: CUI-Specified+ requires distribution_statement (DoDI 5230.24); ITAR requires us-person-verified minimum (22 CFR 120.62); CLASSIFIED-* requires BOTH audit_stream_event AND fso_cosign; AUTHORIZED-FOREIGN-PERSON requires audit_stream_event (per-event DDTC license review).",
      retailtech: "7 data classes × 4 tokenization methods × 6 retention envelopes. RetailTech-unique: biometric-special retention envelope (365-day BIPA-aligned hard-delete on T+366); location-data redacted-by-default with opt-in fine-geo as CCPA Sensitive Personal Information; payment-data NEVER appears in audit-stream events (PCI DSS scope segregation). Closest sibling: financial-customer-data-vault-contract-profile's Section-1033 portability window — RetailTech borrows the per-class-retention-envelope pattern but adds biometric-special as a 7th envelope."
    }
  },
  {
    concept: "Regulator-referral pathway evaluation discipline",
    vertical_naming: {
      healthtech: "FDA MedWatch + EU MDR + state health-department pathways",
      edtech: "DoE OCR + FTC (COPPA) + state-AG pathways",
      proptech: "CFPB + DOJ Civil Rights + HUD + state DFPI/DFS/DSML pathways",
      insurtech: "State DOI + NAIC MCAS + CFPB (FCRA) + DOJ + state-AG pathways (6 pathways with evaluation-state tracking)",
      hrtech: "EEOC + state civil-rights agencies + NYC DCWP + OFCCP + DOJ + ADA-Rehab-Section-503-DOJ + state-AG (7 pathways)",
      fintech: "CFPB + primary federal supervisor (OCC/FRB/FDIC/NCUA) + state banking regulator + FinCEN + OFAC + CFPB OFL + DOJ + state-AG + FTC (9 pathways with institution-type-aware routing)",
      govtech: "Agency Office of Civil Rights + OMB + OIG + GAO + DOJ Civil Rights + Section 508 OMB + congressional + state-AG + Federal AI Use Case Inventory correction (10 pathways — most extensive across the prior 7 verticals). 18 event types — most extensive across the prior 7",
      legaltech: "Outside ethics counsel + state bar disciplinary counsel + court disclosure (where AI reached a tribunal) + professional liability insurer + criminal-defense Sixth-Amendment effective-assistance to defendant+appellate counsel + DOJ Civil Rights + AI vendor incident-coordination + foreign-data-protection-authority. 10 pathways with REQUIRED ed25519 signature (LegalTech makes signature mandatory; sibling verticals leave it optional). 18 event types incl Mata-v-Avianca court-sanctioned-hallucination class.",
      energytech: "NERC E-ISAC + CISA + TSA + DOE CESER + FERC Office of Enforcement + ISO/RTO Market Monitor (independent) + state PUC + EPA Title VI EJ + DOJ Civil Rights + NERC regional entity + energy-sector cyber insurer + FBI Cyber Division — **12 pathways** (most extensive in Suite — reflects energy sector having more peer-level regulators than any other vertical). **20 event types** — most extensive Incident Card across all 9 verticals — including regulatory-clock meta-violations as first-class event types: cip-008-1-hour-notification-window-missed + tsa-sd-2021-02c-12-hour-window-missed. 7-code regulatory_reporting_clock_compliance REQUIRED field tracks two parallel clocks separately. ed25519 signature REQUIRED.",
      defensetech: "DoD CIO (DFARS 7012 cyber incident via dibnet.dod.mil) + Cyber AB (CMMC ecosystem accreditation) + DIBCAC (DCMA government-led L3 assessment) + DDTC (ITAR voluntary disclosure + license review) + BIS (EAR voluntary disclosure + Entity List + deemed-export evaluation) + NIST (standards-incorporation-by-reference — AI RMF + SP 800-218A) + GSA (FAR + GSA Schedule + FedRAMP joint authorization) + DCMA (Contractor Purchasing System Review) + DCSA (NISPOM + personnel + facility clearance + Continuous Vetting) + NARA-ISOO (CUI Registry custody + CUI Notice 2020-04) — **10 federal authorities × 8 distinct enforcement modes** (most diverse state-tracker in Suite). **22 event types** on Incident Card — LARGEST Incident Card profile in Suite — including DFARS 72-hour clock + CUI-spillage + ITAR-deemed-export-violation + foreign-person-unauthorized-access + classified-environment-ai-misuse + scif-policy-violation + nispom-insider-threat-flag + cmmc-l2-l3-readiness-gap + ai-tool-supply-chain-compromise. Plus False Claims Act exposure (post-Aerojet Rocketdyne) on false 7019/7020 self-assessment certification.",
      retailtech: "12 RetailTech-specific incident event types (pricing-discrim, biometric-misidentification, fraud-false-positive, refund-discrim, dark-patterns enforcement, minor-targeting, data-broker-exposure) × 8 reason codes (proxy-feature-overweighted, vendor-model-substitution, disclosure-gap, consent-flow-failure, biometric-template-collision, human-review-bypass, cross-state-misapplication, training-data-skew). 4-band severity (informational / monitor / escalate / crisis). Referral pathways: FTC §5 complaint, state AG inquiry, EU AI Act Art 73 serious-incident report (when applicable). RetailTech-unique: BIPA per-scan-stacking remediation context — post-IL SB 2979 (2024 amendment) the legal exposure is bounded per-person-per-data-kind, changing the incident response calculus."
    }
  }
];
