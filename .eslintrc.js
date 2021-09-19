module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
  },

  extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 12,

    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint', 'jest'],

  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        bracketSpacing: true,
        jsxSingleQuote: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'jest/expect-expect': ['error', { assertFunctionNames: ['isMenuClosed', 'isMenuOpen', 'expect'] }],
  },
};
