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
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/prefer-optional-chain": "off",
    "eslint-disable-next-line": "off",
    "no-unused-vars": "off"
  },
  // 针对特定文件做规则定制
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}
