import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
  },

  build: {
    outDir: 'dist',
  },
  // Uncomment if needed for SPA fallback (useful on Netlify sometimes)
  // resolve: {
  //   alias: {
  //     '@': '/src',
  //   },
  // },
})
