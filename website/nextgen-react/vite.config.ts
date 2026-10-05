import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // The client manifest lets scripts/prerender.mjs add <link rel="modulepreload">
    // for each page's own chunk, so it downloads in parallel with the entry.
    manifest: !isSsrBuild,
  },
}));
