import buble from 'rollup-plugin-buble'

export default {
  entry: 'index.js',
  dest: 'dist/vuea.js',
  format: 'umd',
  moduleName: 'Vuea',
  exports: 'named',
  plugins: [buble()]
}
