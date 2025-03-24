import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [react(), reactRefresh()],
  base: "/",
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example of vendor chunk
        },
      },
    }
  }
})
