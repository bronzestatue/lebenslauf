import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'js/main.js',
  output: {
    file: 'dist/js/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs()
  ]
};
