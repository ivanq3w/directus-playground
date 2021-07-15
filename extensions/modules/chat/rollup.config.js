import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import WindiCSS from 'rollup-plugin-windicss'
import vue from 'rollup-plugin-vue'
import styles from 'rollup-plugin-styles'
import { EXTENSION_PKG_KEY, EXTENSION_TYPES, APP_SHARED_DEPS, API_SHARED_DEPS } from '@directus/shared/constants'
console.log('APP_SHARED_DEPS', APP_SHARED_DEPS)

export default defineConfig({
  input: './src/index.js',
  external: APP_SHARED_DEPS,
  plugins: [
    vue({ preprocessStyles: true }),
    nodeResolve(),
    commonjs({ esmExternals: true, sourceMap: false }),
    terser(),
    ...WindiCSS({
      transformCSS: 'pre',
    }),
    styles(),
  ],
  output: {
    file: 'index.js',
    format: 'es',
  }
})
