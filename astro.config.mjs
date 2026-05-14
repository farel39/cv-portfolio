// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to Vercel (pure static, no adapter needed).
// `site` populates <link rel="canonical">, Open Graph URLs, and any
// future @astrojs/sitemap output. Update if you move to a custom domain.

export default defineConfig({
  site: 'https://portfolio-argya-farel-kasyara.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
