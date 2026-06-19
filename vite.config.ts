import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/lp-cartoes-sementes/' : '/',
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'build'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
