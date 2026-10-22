# Five whys - why do agent answers go stale?

1. Why? The underlying product record changed and the agent did not know.
2. Why? The feed picked up the change late, or not at all.
3. Why? Change detection relied on diffs the insurer's page structure broke.
4. Why? Detection was built per-site instead of per-meaning, so reworded exclusions slipped through.
5. Why? Freshness was treated as a data-pipeline metric, not a product promise with an owner.

Root cause: freshness had no owner and no customer-facing definition. Fix: a 24-hour freshness guarantee, measured against real agent answers, with a named operator - the PM this console is built for.
