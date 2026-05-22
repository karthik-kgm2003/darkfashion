// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace 'your-github-username' with your actual GitHub username
  site: 'https://your-github-username.github.io',
  base: '/dark-fashion',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
