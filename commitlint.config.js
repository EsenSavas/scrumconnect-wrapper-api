const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 256],
    'scope-case': [0, 'always', 'pascal-case']
  }
};
module.exports = config;
