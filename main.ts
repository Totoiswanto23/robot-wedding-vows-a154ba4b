// One-Line Robot Wedding Vows — entry for make.fun
// Writes one funny, one-line robot wedding vow to /output/entry.txt
// (gate: UTF-8 text, 1-160 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I vow to love you until my battery dies — and even then, I will keep nagging you from the cloud.";

if (VOW.length < 1 || VOW.length > 160 || VOW.trim().length === 0) {
  throw new Error(`Vow must be 1-160 non-blank characters, got ${VOW.length}`);
}
if (VOW.includes("\n")) {
  throw new Error("Vow must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to /output/entry.txt`);
