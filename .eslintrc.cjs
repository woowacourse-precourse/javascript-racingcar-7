module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
    'import/extensions': ['error', 'ignorePackages'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
