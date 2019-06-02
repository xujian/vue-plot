module.exports = {
  presets: [
    'vue',
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    [
      'transform-imports',
      {
        quasar: {
          transform: 'quasar/dist/babel-transforms/imports.js',
          preventFullImport: true
        }
      }
    ]
  ],
}
