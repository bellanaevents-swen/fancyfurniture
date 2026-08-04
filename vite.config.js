import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/fancyfurniture/', // Ensures relative path resolution when hosted on GitHub Pages
=======
  base: './', // Ensures relative path resolution when hosted on GitHub Pages
>>>>>>> ebbc304b4c0735547fd74bef7ac8eeb59b6114f1
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
