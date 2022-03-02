module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 2,
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  },
  globals: {
    common: true,
    document: true,
    location: true,
    window: true
  }
}
