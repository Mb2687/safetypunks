// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages deployment configuration
export default defineConfig({
  site: 'https://mb2687.github.io',
  base: '/safetypunks',
  output: 'static',
});