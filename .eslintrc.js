module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['gatsby-config.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: 'module',
  },
  rules: {
    // Disable prop-types as we use TypeScript for type checking
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Enable prettier rules
    'prettier/prettier': ['error', {singleQuote: true, bracketSpacing: false}],
    'quote-props': ['error', 'as-needed'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-new-object': 'error',
    'object-shorthand': 'error',
    'no-prototype-builtins': 'error',
    'prefer-object-spread': 'warn',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-destructuring': 'warn',
    quotes: ['error', 'single'],
    'prefer-template': 'warn',
    'template-curly-spacing': 'error',
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'func-style': 'error',
    'wrap-iife': 'warn',
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    'default-param-last': 'warn',
    'no-new-func': 'error',
    'space-before-function-paren': 'error',
    'space-before-blocks': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'warn',
    'function-paren-newline': 'warn',
    'prefer-arrow-callback': 'warn',
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'arrow-body-style': 'error',
    'no-confusing-arrow': 'error',
    'implicit-arrow-linebreak': 'error',
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',
    'class-methods-use-this': 'error',
    'no-duplicate-imports': 'warn',
    'object-curly-newline': 'warn',
    'no-iterator': 'error',
    'no-restricted-syntax': 'error',
    'dot-notation': 'warn',
    'no-restricted-properties': 'warn',
    'no-undef': 'error',
    'one-var': ['warn', 'never'],
    'no-multi-assign': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'operator-linebreak': ['error', 'none'],
    'no-unused-vars': ['error'],
    eqeqeq: 'error',
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'nonblock-statement-body-position': 'error',
    'brace-style': 'error',
    'no-else-return': 'error',
    'spaced-comment': 'warn',
    indent: ['warn', 2],
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'eol-last': 'warn',
    'newline-per-chained-call': 'warn',
    'no-whitespace-before-property': 'error',
    'padded-blocks': ['warn', 'never'],
    'no-multiple-empty-lines': 'error',
    'space-in-parens': 'error',
    'array-bracket-spacing': 'error',
    'object-curly-spacing': 'error',
    'block-spacing': 'error',
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'comma-style': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    semi: 'error',
    'no-new-wrappers': 'error',
    radix: 'warn',
    'id-length': 'warn',
    camelcase: 'error',
    'new-cap': 'error',
    'no-underscore-dangle': 'error',
    'no-restricted-globals': 'error',
    'react/no-multi-comp': ['error', {ignoreStateless: true}],
  },
};
