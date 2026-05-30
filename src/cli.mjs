#!/usr/bin/env node
// cli.mjs — kg-suite-compare CLI

import { readFileSync } from "node:fs";
import { renderMarkdown, renderJson } from "./generate-report.mjs";
import { compareArtifacts } from "./compare-artifacts.mjs";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

function usage() {
  console.error(`kg-suite-compare v${pkg.version}

Usage:
  kg-suite-compare                                        Render cross-vertical comparison as Markdown (stdout)
  kg-suite-compare --json                                 Render as JSON
  kg-suite-compare --compare <artifact_a> <artifact_b>    Compare two specific artifacts
  kg-suite-compare --compare ... --json                   Compare with JSON output
  kg-suite-compare --version

Exit codes: 0=ok, 1=compare-found-meaningful-differences (still ok), 2=usage error, 3=IO error`);
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.includes("-h")) { usage(); process.exit(0); }
  if (args.includes("--version")) { console.log(pkg.version); process.exit(0); }

  const jsonMode = args.includes("--json");

  if (args.includes("--compare")) {
    const idx = args.indexOf("--compare");
    const pathA = args[idx + 1];
    const pathB = args[idx + 2];
    if (!pathA || !pathB || pathA.startsWith("--") || pathB.startsWith("--")) {
      console.error("--compare requires two artifact paths");
      process.exit(2);
    }
    let parsedA, parsedB;
    try { parsedA = JSON.parse(readFileSync(pathA, "utf8").split(/\r?\n/)[0]); }
    catch (e) { console.error(`could not read ${pathA}: ${e.message}`); process.exit(3); }
    try { parsedB = JSON.parse(readFileSync(pathB, "utf8").split(/\r?\n/)[0]); }
    catch (e) { console.error(`could not read ${pathB}: ${e.message}`); process.exit(3); }

    const result = compareArtifacts(parsedA, parsedB);
    if (jsonMode) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(`Comparing ${pathA} vs ${pathB}\n`);
      console.log(`shape match: ${result.shape_match ? "✓ SAME" : "✗ DIFFERENT"}`);
      console.log(`  ${pathA}: ${result.artifact_kind_a}`);
      console.log(`  ${pathB}: ${result.artifact_kind_b}`);
      console.log(`\n${result.interpretation}\n`);
      if (result.shared_fields.length > 0) {
        console.log(`shared fields:`);
        for (const f of result.shared_fields) console.log(`  ${f.field} = ${JSON.stringify(f.value)}`);
      }
      if (result.different_fields.length > 0) {
        console.log(`\ndifferent fields:`);
        for (const f of result.different_fields) console.log(`  ${f.field}:\n    A = ${JSON.stringify(f.value_a)}\n    B = ${JSON.stringify(f.value_b)}`);
      }
    }
    process.exit(result.different_fields.length > 0 ? 1 : 0);
  }

  // Default: render the cross-vertical comparison
  if (jsonMode) console.log(renderJson());
  else          console.log(renderMarkdown());
  process.exit(0);
}

main();
