import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      contexts: fileURLToPath(new URL('./src/contexts', import.meta.url)),
    },
  },
  server: { port: 3000 },
  build: { outDir: 'build' },
})
