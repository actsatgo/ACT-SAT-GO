import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['dompurify'],
  },
  build: {
    rolldownOptions: {
      output: {
        // Vendor chunking. The previous `manualChunks` function let the
        // `charts` group (checked first) recursively pull React itself into the
        // recharts chunk, so the 420 kB charts bundle was modulepreloaded on
        // every page — including login and the test interface. Explicit groups
        // with priorities keep React in its own chunk and recharts/d3 lazy.
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: /node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|cookie|set-cookie-parser)[\\/]/,
              priority: 30,
            },
            {
              name: 'charts',
              test: /node_modules[\\/](recharts|d3-[^\\/]+|victory-vendor|internmap|react-redux|@reduxjs|redux|redux-thunk|reselect|immer|es-toolkit|decimal\.js-light|eventemitter3|tiny-invariant)[\\/]/,
              priority: 20,
            },
            {
              // Small helpers shared by recharts and tiptap; keep them out of the
              // charts chunk so the admin editor doesn't drag recharts in.
              name: 'vendor-shared',
              test: /node_modules[\\/](use-sync-external-store|react-is|clsx)[\\/]/,
              priority: 25,
            },
            {
              name: 'icons',
              test: /node_modules[\\/]lucide-react[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})
