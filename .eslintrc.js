module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
	  'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jsx-a11y', 'import', 'eslint-plugin-import-helpers', 'react-hooks'
  ],
  rules: {
    'react/jsx-curly-spacing': [2, { 'when': 'always', 'allowMultiline': true }],
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    // 'semi': ['error', 'never'],
    'no-console': ['error', { 'allow': ['log', 'error', 'tron'] }],
    'template-curly-spacing': ['error', 'always'],
    'no-use-before-define': ['error', { 'variables': false }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
    'import/no-named-as-default': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePatter': '^_' }],
    'consistent-return': 'off',
    'no-useless-return': 'off',
    'no-debugger': 'off',
    'react/state-in-constructor': 'off',
    'max-len': ['error', { 'code': 120 }],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
          newlinesBetween: 'always',
          groups: [
              '/\b(?!react-icons|react-native-vector-icons)\b^react/',
              'module',
              '/^@rocketseat/',
              '/^react-icons/',
              '/^react-native-vector-icons/',
              '/^date-fns/',
              '/services/',
              '/pages/',
              '/components/',
              '/styles/',
              '/^~/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
};
