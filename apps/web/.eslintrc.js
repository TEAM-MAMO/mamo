/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  plugins: ['@stylexjs'],
  rules: {
    '@stylexjs/valid-styles': 'error',
  },
  extends: ['@repo/eslint-config/eslint-next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
