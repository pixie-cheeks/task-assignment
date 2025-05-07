import pixie from '@pixie-cheeks/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['dist'] },
  ...pixie.base,
  {
    languageOptions: {
      globals: pixie.globals.browser,
    },
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['*.js'] },
      ],
    },
  },
  {
    files: ['{eslint,vite}.config.js'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  pixie.prettier,
]);
