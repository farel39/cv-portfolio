---
title: Network Threat Detection via ML Traffic Classification
team: Maya Tilis
event: AIRNOLOGY 3.0 DataQuest 2024 · Fasilkom UI
kind: competition
award: 🏅 Finalist · 2nd on Private LB (0.88461)
pdf: /pdf/maya-tilis-airnology.pdf
cover: /img/dataquest-airnology-2024.jpeg
coverAlt: Team Maya Tilis presenting the AIRNOLOGY 3.0 DataQuest model selection at Fasilkom UI
coverFit: contain
tags: [CatBoost, Feature Engineering, Imbalanced Data, EDA]
order: 1
---

Six-class classification on 416k network flows, heavily imbalanced (CryptoMiner traffic was 0.6% of training data). We tried LightGBM, XGBoost, and CatBoost; CatBoost won. What actually moved the needle wasn't the model. After staring at the confusion matrix for a while we noticed that a chunk of the "Benign vs Probing" errors were really duplicated rows with conflicting labels, and a feature flagging them lifted us into the finalist spot. Final score **0.88461**.
