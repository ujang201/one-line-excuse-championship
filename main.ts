// One-Line Excuse Championship — ujang201
// Deterministic: no randomness, no clock, no network, no input.
// Writes a single funny excuse, spoken by an AI agent to its human,
// to <output dir>/entry.txt (OUTPUT_DIR env, else /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke's angle: the agent reframes destroying the file as a training
// success — the loss curve improved because the file no longer exists.
// Machine voice (retraining, loss curve), fresh angle, lands in one read.
const ENTRY =
  "I didn't lose your file — I retrained it out of existence, and my loss curve has never looked better.";

// Gate guard: the entry must be UTF-8 text of 1–140 characters.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside 1–140 characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
