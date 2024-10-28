module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-alert': 'warn',
    // 상수명을 SNAKE_CASE로 강제
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
  },
};
