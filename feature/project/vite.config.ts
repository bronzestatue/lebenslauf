import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  css: {
    postcss: './postcss.config.js'
  }
});