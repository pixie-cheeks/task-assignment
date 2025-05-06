import pixie from '@pixie-cheeks/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['dist'] },
  ...pixie.base,
  {
    languageOptions: {
      globals: pixie.globals.browser,
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    languageOptions: {
      globals: pixie.globals.node,
    },
    files: ['postcss.config.cjs'],
  },
  pixie.prettier,
]);
