import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Permite que los archivos se enlacen con rutas relativas
  build: {
    outDir: 'docs', // Cambiamos para que construya en 'docs' en vez de 'dist'
  }
})
