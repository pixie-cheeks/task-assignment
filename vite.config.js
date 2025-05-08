import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/task-assignment/',
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(dirname, 'src/index.html'),
        nested: path.resolve(dirname, 'src/contact-page/index.html'),
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
});
