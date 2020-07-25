module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
  },
};
