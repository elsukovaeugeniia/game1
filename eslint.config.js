export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'max-len': ['error', { code: 100 }],
      'require-jsdoc': 'off'
    }
  }
];
