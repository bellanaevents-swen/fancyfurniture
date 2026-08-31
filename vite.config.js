import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'public',
  base: './',
  build: {
    // Places the compiled 'dist' folder in the project root instead of inside 'public/dist'
    outDir: path.resolve(process.cwd(), 'dist'),
    emptyOutDir: true
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  }
});