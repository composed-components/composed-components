module.exports = {
  plugins: ['react-hooks'],
  extends: ['eslint-config-airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-props-no-spreading': ['off'],
    'import/extensions': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    indent: 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-hooks'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'eslint-config-airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/indent': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'import/extensions': ['off'],
        'react/jsx-indent': ['off'],
        'react/jsx-indent-props': ['off'],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        indent: 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/function-component-definition': ['off'],
        'import/no-extraneous-dependencies': ['off'], // need a better solution
      },
    },
  ],
};
