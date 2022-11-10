module.exports = {
  parserOptions: {
    ecmaVersion: 2020, 
    sourceType: 'module', 
    ecmaFeatures: {
      jsx: true 
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended', 
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-empty-file': 'off',
    'quotes': [2, 'single'],
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-nested-ternary': 'off',
    'no-async-promise-executor': 'off',
  }
}
