module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    semi: ['error', 'never'],
    "react/function-component-definition": [ enabled, 'arrow-function' ],
  }
}