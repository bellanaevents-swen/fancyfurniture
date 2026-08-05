import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function copyImagesPlugin() {
  return {
    name: 'copy-images',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'images');
      const destDir = path.resolve(__dirname, 'dist/images');
      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        fs.readdirSync(srcDir).forEach(file => {
          fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        });
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [copyImagesPlugin()]
});