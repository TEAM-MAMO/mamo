module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in Node.js 모듈
          'external', // 외부 패키지
          'internal', // 내부 모듈이나 디렉토리
          'parent', // 상위 디렉토리
          'sibling', // 동일한 디렉토리의 다른 파일
          'index', // index 파일
          'type', // 타입 import (TypeScript)
        ],
        pathGroups: [
          {
            pattern: '@/**', // 별도의 디렉토리 구조에 따라 처리
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'], // 제외할 import 유형
        'newlines-between': 'always', // 항상 새 줄을 추가하여 그룹 간의 구분
        alphabetize: {
          order: 'asc', // 알파벳 순서로 정렬
          caseInsensitive: true, // 대소문자 구분 없이 정렬
        },
      },
    ],

    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    'no-unused-vars': 'error', // 사용되지 않는 변수에 대해 오류로 표시

    'no-alert': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    // react
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',

    //typescript
    '@typescript-eslint/no-unused-vars': 'off',

    // next
    '@next/next/no-html-link-for-pages': 'off',
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
};
