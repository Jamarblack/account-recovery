import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// YOU ARE LIKELY MISSING THIS LINE BELOW:
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Vite calls the imported function here
  ],
})