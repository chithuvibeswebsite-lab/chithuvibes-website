import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  plugins: [react(), tailwindcss()],

  build: {
    minify: 'oxc',
    cssMinify: true,
  },
  oxc: {
    transform: {
      drop: ['console', 'debugger'],
    },
  },
})