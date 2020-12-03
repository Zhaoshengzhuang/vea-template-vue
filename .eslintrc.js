module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'standard'
  ],
  globals: {
    __static: true
  },
  plugins: [
    'vue'
  ],
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  rules: {
    'vue/html-self-closing': [0],
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 0,
    'new-parens': 0,
    'no-unreachable': 0,
    'no-useless-return': 0,
    'no-unused-vars': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
