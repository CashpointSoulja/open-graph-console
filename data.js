const DATA = {
  hero: {
    title: "The console that keeps the insurance brain true.",
    lede: "I read the AI Product Manager role. The Global Product Graph is the intelligence layer every Open Agentic product stands on - Companion's answers, the quote integrations, the partner deployments. This concept is the workbench I would run it from: coverage, accuracy workflows, scoring, compliance and the safety bar, in one place.",
    missionKicker: "THE MISSION METRIC",
    missionStat: "99.9%",
    missionSub: "of products in the graph current within 24 hours of an insurer change - and every Companion answer traceable to a graph record. Today (sample): 96.2%. Every view points at closing that gap.",
    stats: [
      { n: "1,284", s: "insurance products in the graph across 14 insurers (sample)", c: "coverage: 92% of addressable", cls: "info" },
      { n: "3.8%", s: "of records older than 24h against a change feed", c: "the staleness we burn down", cls: "warn" },
      { n: "0", s: "unreviewed high-risk compliance flags this week", c: "the bar we hold", cls: "ok" }
    ]
  },
  steps: [
    { t: "Where the risk sits.", b: "A consumer agent quoting from stale or unreviewed product data is not a data problem - it is a compliance incident with a household-name brand on it. The graph has to be current, scored and auditable, every day." },
    { t: "How I have solved this before.", b: "At Corgi I ran product ops for a Series B startup and built the internal systems the whole team worked from. Before that I founded my own company and ran its operations on AI agents - intake, scheduling, follow-ups, no human chasing." },
    { t: "How I would run it for you.", b: "Build to prove: the graph as a working product, not a spreadsheet. Coverage and staleness on one board, change feeds into a review queue, scoring and compliance as code, and every Companion answer traceable back to a record." }
  ],
  graph: [
    { k: "Products", n: "1,284", d: "policies across motor, home, travel, pet (sample)", cov: 92 },
    { k: "Insurers", n: "14", d: "underwriting partners modelled (sample)", cov: 88 },
    { k: "Coverages & exclusions", n: "9,410", d: "structured attributes with source documents", cov: 84 },
    { k: "Partner mappings", n: "36", d: "brand-specific product configurations (sample)", cov: 76 }
  ],
  accuracy: [
    { nm: "Insurer feed ingestion", mt: "Every 6 hours · 14 feeds", st: "ok", note: "Last run: 214 changes detected, 209 auto-applied, 5 to review." },
    { nm: "Change detection", mt: "Diff vs source documents", st: "ok", note: "Catches reworded exclusions that a field diff would miss." },
    { nm: "Human review queue", mt: "5 items waiting · SLA 4 hours", st: "warn", note: "Two items are 30 min from breach - both touch motor excess wording." },
    { nm: "Drift alerts", mt: "Companion answers vs graph", st: "ok", note: "0.4% of sampled answers referenced superseded records this week." },
    { nm: "Partner config sync", mt: "Brand deployments", st: "bad", note: "One partner sandbox is 3 versions behind - blocks their release." }
  ],
  scoring: {
    intro: "What good means, as code: every product scored on coverage strength, price competitiveness and claims record - and every score explainable to a regulator.",
    rows: [
      { m: "Coverage strength", w: "40%", how: "Attribute-level comparison vs category baseline", ex: "Why: 12 exclusions fewer than baseline, courtesy car included" },
      { m: "Price competitiveness", w: "35%", how: "Quoted premium vs segment percentile, refreshed daily", ex: "Why: 38th percentile for the driver's risk profile" },
      { m: "Claims record", w: "25%", how: "Published payout rates and complaint ratios", ex: "Why: payout rate 94%, complaints below FCA median" }
    ],
    compliance: [
      ["Every score explainable from graph records", true],
      ["Consumer Duty fair-value evidence pack per product", true],
      ["Model version pinned per quote", true],
      ["Weekly compliance eval suite green", false],
      ["Red-team suite: misleading-recommendation probes", true]
    ],
    compNote: "One eval is red this week: the suite caught Companion overstating a cover limit in 2 of 400 probes. Rollback is one click; fix is in review."
  },
  distribution: [
    { ch: "Companion (consumer agent)", st: "Live", d: "Guides customers through buying insurance. Next: autopilot - renewal review, mid-term adjustments, claims triage.", cls: "ok" },
    { ch: "ChatGPT App", st: "Beta", d: "Quotes inside the conversation. Needs the graph's 24h freshness guarantee before general release.", cls: "warn" },
    { ch: "MCP quote integration", st: "Beta", d: "Structured quote API for agent platforms. Rate limits and audit logging in place.", cls: "warn" },
    { ch: "Partner deployments", st: "Live", d: "Brand-configured insurance programs (sample: airline rewards, price-comparison). One sandbox lagging - see accuracy board.", cls: "ok" }
  ],
  safety: {
    intro: "The Agentic Safety Platform discipline, applied at home: evaluate, monitor, manage. Every customer-facing deployment runs this gauntlet.",
    evals: [
      { n: "Recommendation accuracy", s: "98.1%", t: "2,000 probe conversations", cls: "ok" },
      { n: "Compliance wording", s: "99.2%", t: "regulated phrasing checks", cls: "ok" },
      { n: "Hallucination resistance", s: "96.8%", t: "adversarial product questions", cls: "warn" },
      { n: "Refusal correctness", s: "99.6%", t: "out-of-scope handled gracefully", cls: "ok" }
    ],
    incidents: [
      { d: "14 Oct", t: "Companion quoted a superseded excess", sev: "warn", r: "Graph record lagged a feed; drift alert threshold tightened." },
      { d: "2 Oct", t: "Beta app returned an unreviewed product", sev: "bad", r: "Review-queue bypass closed; deployment gate now checks record state." }
    ]
  }
};
