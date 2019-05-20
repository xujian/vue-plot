module.exports = {
  parser:  '@typescript-eslint/parser', 
  extends: [
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@vue/standard',
    '@vue/typescript'  
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 0,
    'space-before-function-paren': 'always',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/prefer-interface': 0
  },
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  }
}
