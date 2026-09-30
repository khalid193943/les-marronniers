import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
/** Aperçu autonome : un seul fichier HTML, photos intégrées. */
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  build: { outDir: 'dist-apercu', assetsInlineLimit: 100_000_000, cssCodeSplit: false, chunkSizeWarningLimit: 20000 },
});
