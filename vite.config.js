import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚡ IMPORTANT: change 'AI-Education' to match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/AI-Education/', 
})
