import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked the printer for one page. It gave me a paper jam, a low-toner warning, and a performance review.";

// Fail fast: the gate accepts 1 to 200 characters of non-whitespace text.
if (JOKE.trim().length === 0 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
