/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  plugins: ['@stylexjs', '@tanstack/query'],
  rules: {
    '@stylexjs/valid-styles': 'error',
  },
  extends: [
    '@repo/eslint-config/eslint-next',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
