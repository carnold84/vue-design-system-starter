module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': [
      'error',
      'single'
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ]
  },
  overrides: [
    {
      files: [
        '**/*.test.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
