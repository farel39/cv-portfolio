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

Product search on Wayfair's WANDS dataset. We compared BM25, a dense bi-encoder (MiniLM-L6), and a cross-encoder reranker (ms-marco MiniLM-L12). After a few epochs of contrastive fine-tuning, our 41M-param cross-encoder **beat the off-the-shelf 560M-param BAAI/bge-reranker-large** on NDCG@10 (0.850 vs 0.833). At least on this dataset, bigger isn't always better. Bolted CLIP on at the end for image queries.
