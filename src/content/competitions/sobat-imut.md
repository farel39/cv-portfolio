---
title: "E-Commerce Product Retrieval: Dense Retrieval, Cross-Encoder Reranking, and Visual Search"
team: Sobat Imut
event: Datathon RISTEK 2024 · co-authored paper
kind: paper
award: 🥉 3rd place
pdf: /pdf/sobat-imut-ecommerce.pdf
cover: /img/datathon-ristek-2024.jpeg
coverAlt: Team Sobat Imut at the Datathon RISTEK 2024 awards ceremony
tags: [Sentence-Transformers, Cross-Encoder, Contrastive Learning, CLIP, NDCG]
order: 2
---

End-to-end search system on the Wayfair WANDS dataset. Compared BM25, bi-encoder dense retrieval (MiniLM-L6), and cross-encoder reranking (ms-marco MiniLM-L12) fine-tuned with contrastive learning. A 41M-param fine-tuned cross-encoder **beat the 560M BAAI/bge-reranker-large** at NDCG@10 (0.850 vs 0.833). Integrated CLIP for multimodal visual search.
