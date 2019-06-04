import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import pkg from '../package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      clean: true,
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true
    }),
    terser({
    }),
    vue({
      css: '../src/css/chart.css'
    }),
    postcss({
      extract: true
    })
  ],
}
