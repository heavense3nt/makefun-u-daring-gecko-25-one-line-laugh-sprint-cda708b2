import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "My fitness tracker congratulated me on 10,000 steps today — 9,000 of them were pacing while the microwave ran.";

// Output contract: the grader sets MAKEFUN_OUTPUT_DIR to an absolute
// directory (e.g. /output) that stays writable while the bot dir is
// read-only, so an absolute value is used as-is and never joined under
// the repo root; a relative value falls back to under the repo root.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);

mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), line, "utf8");
