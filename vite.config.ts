import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  base: "./",
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
