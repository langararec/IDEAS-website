import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ViteImageOptimizer({
            png: { quality: 90 },
            jpeg: { quality: 95 },
            webp: { quality: 30 },
            avif: { quality: 90 },
        }),
    
  ],
})
