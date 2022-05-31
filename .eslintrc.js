module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 0,
    'array-callback-return': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react/jsx-one-expression-per-line': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'no-unused-expressions': 0,
    camelcase: 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-no-bind': 0,
    'max-len': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'react/jsx-no-useless-fragment': 0,
  },
};
