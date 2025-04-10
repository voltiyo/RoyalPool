import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: process.env.NODE_ENV === "production" ? {} : {
      "/api": "http://localhost:5000", // Redirect API calls to Express (port 5000)
    },
    host: true
  },
})
