import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Indentation with 2 spaces
      indent: ['error', 2],

      // Use single quotes for strings
      quotes: ['error', 'single'],

      // Require semicolons at the end of statements
      semi: ['error', 'always'],

      // Maximum one statement per line
      'max-statements-per-line': ['error', { max: 1 }],

      // Avoid unused variables
      'no-unused-vars': 'warn',

      // Avoid multiple variable declarations
      'no-multi-assign': 'error',

      // Require space before and after operators
      'space-infix-ops': 'error',

      // Avoid spaces at the beginning and end of parentheses
      'space-in-parens': ['error', 'never'],

      // Require space after comma, but not before
      'comma-spacing': ['error', { before: false, after: true }],

      // Avoid using var
      'no-var': 'error',

      // Prefer const over let where possible
      'prefer-const': 'error',

      // Maximum 2 consecutive empty lines
      'no-multiple-empty-lines': ['error', { max: 2 }],

      // Avoid using console.log in production
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

      // Require type for function parameters
      '@typescript-eslint/explicit-function-return-type': 'warn',

      // Avoid any for types
      '@typescript-eslint/no-explicit-any': 'warn',

      // Require types for class properties
      '@typescript-eslint/explicit-member-accessibility': 'error',

      // Ensure errors are always rejected in promises
      'prefer-promise-reject-errors': 'error',

      // Avoid empty async functions
      'require-await': 'error',

      // Require a space before function blocks
      'space-before-blocks': 'error',

      // Require a space before function parentheses
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      // Limit line length to 100 characters
      'max-len': ['error', { code: 100 }],

      'import/no-default-export': 'off',
    },
  },
];
