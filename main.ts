// SPDX-License-Identifier: MIT
// The Vacuum's Alibi — one line, 200 characters max.
// A robot vacuum's deadpan excuse for missing a spot, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss that spot. My lidar measured the dust at 0.4 millimetres, " +
  "which under my warranty reclassifies it as a rug, and rugs are your job, not mine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly one line of at most 200 chars.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
console.log(LINE);
