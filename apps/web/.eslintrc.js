/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  plugins: [, '@tanstack/query'],

  extends: [
    '@repo/eslint-config/eslint-next',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
