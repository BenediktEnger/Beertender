import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import noAutofix from 'eslint-plugin-no-autofix';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  { files: ['**/*.ts'] },
  { ignores: ['**/.eslintrc.js', '**/*.js', '**/dist/**/*.js'] },
  includeIgnoreFile(gitignorePath), ...compat.extends('plugin:@typescript-eslint/recommended'), {
    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin,
      'unused-imports': unusedImports,
      'no-autofix': noAutofix,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
    },

    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      'no-autofix/unused-imports/no-unused-imports': ['error'],
      'no-constant-condition': ['error'],
      'no-constructor-return': ['error'],
      'no-duplicate-case': ['error'],
      'no-fallthrough': ['error'],
      'no-import-assign': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': ['error'],

      camelcase: ['error', {
        properties: 'always',
        ignoreImports: true,
      }],

      'class-methods-use-this': 'error',
      complexity: ['error', 6],
      'consistent-return': ['error'],
      curly: ['error', 'all'],
      'default-param-last': ['error'],
      'dot-notation': ['error'],
      eqeqeq: ['error', 'always'],
      'logical-assignment-operators': ['error', 'always'],
      'max-classes-per-file': ['error', 3],
      'max-depth': ['error', 3],
      'max-nested-callbacks': ['error', 4],

      'max-params': ['error', { max: 5 }],

      'multiline-comment-style': ['error', 'separate-lines'],
      'no-delete-var': ['error'],
      'no-else-return': ['error'],
      'no-eq-null': ['error'],
      'no-extra-semi': ['error'],
      'no-floating-decimal': ['error'],
      'no-multi-assign': ['error'],
      'no-multi-str': ['error'],
      'no-nested-ternary': ['error'],
      'no-new-object': ['error'],
      'no-param-reassign': ['error'],
      'no-redeclare': ['error'],
      'no-return-await': ['error'],
      'no-script-url': ['error'],
      'no-shadow': ['error'],
      'no-throw-literal': ['error'],
      'no-undef-init': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-useless-return': ['error'],
      'no-var': ['error'],
      'no-void': ['error'],

      'no-warning-comments': ['warn', { terms: ['todo', 'fixme'] }],

      'prefer-const': ['error'],
      'prefer-template': ['error'],
      'require-await': ['warn'],
      'require-yield': ['error'],
      'no-duplicate-imports': ['error'],
      'spaced-comment': ['error', 'always'],
      yoda: ['error'],
      'array-bracket-spacing': ['error'],

      'array-bracket-newline': ['error', { minItems: 4 }],

      'arrow-parens': ['error'],
      'arrow-spacing': ['error'],
      'block-spacing': ['error'],
      'brace-style': ['error'],

      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],

      'comma-spacing': ['error'],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error'],
      'dot-location': ['error', 'property'],
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'generator-star-spacing': ['error'],
      'implicit-arrow-linebreak': ['error', 'beside'],
      indent: ['error', 2],
      'key-spacing': ['error'],
      'keyword-spacing': ['error'],
      'linebreak-style': ['error', 'unix'],

      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

      'max-len': ['error', {
        code: 160,
        tabWidth: 2,
      }],

      'no-extra-parens': ['error'],
      'no-mixed-spaces-and-tabs': ['error'],
      'no-multi-spaces': ['error'],
      'no-multiple-empty-lines': ['error'],
      'no-tabs': ['error'],
      'no-whitespace-before-property': ['error'],
      'nonblock-statement-body-position': ['error', 'below'],

      'object-curly-newline': ['error', { multiline: true }],

      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': ['error'],
      'padded-blocks': ['error', 'never'],
      quotes: ['error', 'single'],
      semi: ['error'],
      'semi-spacing': ['error'],
      'semi-style': ['error', 'last'],
      'space-in-parens': ['error'],
      'switch-colon-spacing': ['error'],
      'template-curly-spacing': ['error', 'never'],
    },
  },
];