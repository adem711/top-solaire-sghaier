// Lighthouse on the production build, mobile + desktop, all five categories (CLAUDE.md §8.6).
// Usage: npm run build && npm run audit            (starts `next start` on port 3100 itself)
//        AUDIT_URL=https://… npm run audit           (audits a deployed site instead)
//        AUDIT_FORM=mobile npm run audit             (one form factor only)
// Reports go to .lighthouse/<form>-<page>.html. Chrome: CHROME_PATH, else an installed Chrome/Edge.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";

const PAGES = ["/fr", "/ar", "/fr/projets", "/ar/projets", "/fr/a-propos", "/fr/contact"];
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo", "agentic-browsing"];
const PORT = 3100;
const base = process.env.AUDIT_URL?.replace(/\/$/, "") ?? `http://localhost:${PORT}`;

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    `${process.env.LOCALAPPDATA}/ms-playwright/chromium-1234/chrome-win64/chrome.exe`,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  ];
  return candidates.find((p) => p && existsSync(p));
}

async function waitFor(url, ms = 60000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not answer at ${url}`);
}

let server;
if (!process.env.AUDIT_URL) {
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], { stdio: "ignore" });
  await waitFor(`${base}/fr`);
}

mkdirSync(".lighthouse", { recursive: true });
const chrome = await chromeLauncher.launch({ chromePath: chromePath(), chromeFlags: ["--headless=new"] });
const rows = [];
let worst = 100;

try {
  // One throwaway run first: the first Lighthouse pass after launch is consistently noisy.
  await lighthouse(`${base}/fr`, { port: chrome.port, output: "json", onlyCategories: ["performance"], logLevel: "error" });

  for (const form of process.env.AUDIT_FORM ? [process.env.AUDIT_FORM] : ["mobile", "desktop"]) {
    for (const page of PAGES) {
      const { lhr, report } = await lighthouse(
        `${base}${page}`,
        { port: chrome.port, output: "html", onlyCategories: CATEGORIES, logLevel: "error" },
        form === "desktop" ? desktopConfig : undefined,
      );
      writeFileSync(`.lighthouse/${form}${page.replace(/\//g, "-")}.html`, report);
      const s = Object.fromEntries(CATEGORIES.map((c) => [c, Math.round((lhr.categories[c]?.score ?? 0) * 100)]));
      worst = Math.min(worst, ...Object.values(s));
      const a = lhr.audits;
      rows.push({
        form,
        page,
        perf: s.performance,
        a11y: s.accessibility,
        bp: s["best-practices"],
        seo: s.seo,
        agentic: s["agentic-browsing"],
        LCP: a["largest-contentful-paint"].displayValue,
        TBT: a["total-blocking-time"].displayValue,
        CLS: a["cumulative-layout-shift"].displayValue,
      });
    }
  }
} finally {
  await chrome.kill();
  server?.kill();
}

console.table(rows);
console.log(`Lowest score: ${worst}. Floor is 95 (CLAUDE.md §8). Reports in .lighthouse/`);
process.exitCode = worst < 95 ? 1 : 0;
