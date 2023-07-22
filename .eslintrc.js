module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:playwright/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
    'playwright/no-restricted-matchers': [
      'warn',
      {
        toBeFalsy: 'Use `toBe(false)` instead.',
        toBeTruthy: 'Use `toBe(true)` instead.',
        not: null,
        'not.toHaveText': null,
      },
    ],
  },
};
