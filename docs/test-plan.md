# Test plan

- Graph: coverage counts reconcile against source feeds; spot-check 20 products per insurer weekly.
- Accuracy: replay known insurer changes through detection; review-queue SLA measured hourly; drift alerts fire on seeded wrong answers.
- Scoring: score changes diff against a golden dataset; every score renders its explanation; red eval blocks release.
- Distribution: each channel's state matches its gate; beta channels cannot enable without the freshness guarantee green.
- Safety: adversarial question suite runs on every deploy; incident entries require a linked system change before close.
