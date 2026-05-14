---
title: "TRACE: Traceable Real-time Adaptive Continual Explainable Deepfake Detection"
team: TRACE
event: SPARK Telkomsel × ITB × Google · idea proposal
kind: proposal
award: 🏅 Finalist
pdf: /pdf/trace-deepfake.pdf
cover: /img/trace-spark.jpeg
coverAlt: TRACE booth at the SPARK Telkomsel expo
coverFit: contain
tags: [PyTorch, CNN, AVFF, Knowledge Distillation, LIME, Vertex AI]
order: 3
---

A system proposal for real-time deepfake detection across images, prerecorded video, and live capture. The architecture: a CNN image encoder, the AVFF audio-visual fusion pipeline for video, knowledge distillation so the model can keep learning new fake-generation styles without forgetting old ones, and LIME on top to actually show which regions of a face the model thinks are off. We also wired in a Disentanglement Reversing Network so the system can take a guess at what the original face looked like before manipulation.
