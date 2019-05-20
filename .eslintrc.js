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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  }
}
