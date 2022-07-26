module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'testing-library', 'jest-dom'],

    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off'
    }
};
