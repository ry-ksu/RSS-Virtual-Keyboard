module.exports = {
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true
  },
  extends: 'airbnb-base/legacy',
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'linebreak-style': 0
  }
};
