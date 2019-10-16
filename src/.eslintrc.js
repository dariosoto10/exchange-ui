module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jest: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'eol-last': ['error', 'always'],
    'semi': ["error", "never"],
    'eqeqeq': ['error', 'always'],
    'max-len': ["error", { "code": 180 }]
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
};
