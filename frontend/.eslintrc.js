module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'jest', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off',
        'no-param-reassign': [2, { props: false }],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/prop-types': 'off',
    },
};
