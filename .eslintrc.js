module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  semi: 'never',
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-native'],
  rules: {
    '@typescript-eslint/generic-type-naming': 'error',
    'react/display-name': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/prop-types': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/sort-styles': 'warn',
    'react-native/split-platform-components': 'error',
    'react-native/no-raw-text': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
