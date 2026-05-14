// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to Vercel (pure static, no adapter needed).
// If you wire up a custom domain or want canonical URLs in <head>,
// set `site: 'https://your-domain.com'` here.

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
