import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "js/main.js",
  output: {
    dir: "dist/js", // <-- use dir instead of file
    format: "es",
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs()
  ]
};
