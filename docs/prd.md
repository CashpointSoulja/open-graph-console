# PRD - Open Graph Console

## Problem

An insurance product graph is only useful if it is current, accurate and explainable. Insurers change products constantly; a stale graph makes every downstream agent answer wrong, and an unexplainable score makes the product unsellable to regulated buyers.

## Goal

Hold 99.9% of products current within 24 hours of an insurer change, keep every agent answer traceable to a record, and keep every score explainable to a regulator.

## Users

- AI product manager (primary operator)
- Data ops (feeds, review queue)
- Distribution owners (Companion, chat app, quote integrations)
- Compliance (explainability, incident log)

## Scope (v1 concept)

1. The graph - products, insurers and structured attributes as a product surface; coverage measured against what customers can actually ask about.
2. Accuracy ops - feed cadence, change detection, a human review queue on a 4-hour clock, drift alerts on real agent answers.
3. Scoring - coverage, price and claims record as code; every score explainable; eval suite with rollback.
4. Distribution - every channel the graph feeds, its state, and what it needs next; beta channels stay gated on the freshness guarantee.
5. Safety - evaluate, monitor, manage: accuracy probes, compliance wording, adversarial questions, and an incident log where every miss ends in a changed system.
