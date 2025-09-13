import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚡ MUST match the GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/AISCHOOL2/', 
})
