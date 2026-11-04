// @ts-check
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://otf31.github.io',
  base: '/portfolio',
  integrations: [
    expressiveCode({
      themes: ['github-light', 'github-dark'],
      styleOverrides: {
        borderRadius: '8px',
        codeFontSize: '0.8rem',
        codeLineHeight: '1.6',
        frames: {
          frameBoxShadowCssValue: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          editorTabBarBackground: 'rgb(var(--bg) / 0.9)',
          editorTabBarBorderBottomColor: 'rgb(var(--border))',
        },
        uiLineHeight: 'inherit',
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});