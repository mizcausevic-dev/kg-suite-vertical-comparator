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
      fintech: "human_credit_officer_required (scoped to adverse-action-capable kinds AND recommendations: decline / approve-with-conditions / counter-offer / freeze / reduce-line)"
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
      fintech: "ECOA 12 CFR §1002.9 + FCRA §615 risk-based-pricing / adverse-action notice"
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
      fintech: "EEOC four-fifths-rule + business-necessity defense + redlining-pattern flagging"
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
      fintech: "ECOA Reg B protected classes + Section 1071 demographic data; default `tokenized-and-not-as-model-input-by-default` with firewall pathway"
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
      fintech: "CFPB + primary federal supervisor (OCC/FRB/FDIC/NCUA) + state banking regulator + FinCEN + OFAC + CFPB OFL + DOJ + state-AG + FTC (9 pathways with institution-type-aware routing)"
    }
  }
];
