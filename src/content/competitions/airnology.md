---
title: Network Threat Detection via ML Traffic Classification
team: Maya Tilis
event: AIRNOLOGY 3.0 DataQuest 2024 · Fasilkom UI
kind: competition
award: 🏅 Finalist · 2nd on Private LB (0.88461)
pdf: /pdf/maya-tilis-airnology.pdf
tags: [CatBoost, Feature Engineering, Imbalanced Data, EDA]
order: 1
---

Multi-class classification of network flow traffic (Benign, Probing, Bruteforce, XMRIGCC CryptoMiner, …) on a highly-imbalanced 416k-row dataset. Engineered ratio + aggregation features over raw flow stats, used error-analysis-driven feature engineering to fix Benign/Probing confusion, and trained CatBoost / LightGBM / XGBoost. The final CatBoost model scored **0.88461** on the custom metric → 2nd on the private leaderboard.
