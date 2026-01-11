// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Cloudflare Pages deployment configuration
export default defineConfig({
  site: 'https://safetypunks.com',
  output: 'server',
  adapter: cloudflare(),
});