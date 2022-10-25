module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // ecmaVersion: 'latest',
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
