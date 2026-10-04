// Lists demo placeholders still in the code (CLAUDE.md §13). Warns, never fails the build.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOTS = ["app", "components", "content", "lib"];
const hits = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(p);
    else if (/\.(tsx?|mjs)$/.test(entry.name)) {
      const lines = (await readFile(p, "utf8")).split("\n");
      lines.forEach((line, i) => {
        if (/demo:\s*true|data-demo=/.test(line)) hits.push(`${p}:${i + 1}  ${line.trim()}`);
      });
    }
  }
}

for (const r of ROOTS) await walk(r);

if (hits.length) {
  console.warn(`\n⚠ ${hits.length} demo placeholder(s) remain (see DEMO.md):`);
  for (const h of hits) console.warn(`  ${h}`);
  console.warn("");
} else {
  console.log("✓ No demo placeholders left.");
}
