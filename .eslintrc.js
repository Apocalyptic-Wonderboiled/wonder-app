module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true,
    }
  },
  plugins: [
    'react',
  ],
  "ignorePatterns": [
    ".eslintrc.js"
  ],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': "off",
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  }
}
