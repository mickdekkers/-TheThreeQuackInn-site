module.exports = {
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
};
