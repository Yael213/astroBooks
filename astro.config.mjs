// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import Input_ from 'postcss/lib/input';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public'}),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' })
    }
  },

  adapter: vercel(),
  integrations: [react()]
});