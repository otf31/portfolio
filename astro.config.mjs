// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://otf31.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});