import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import ignore from './rollup-plugins/ignore';
// import { ignoreTextfieldFiles } from './elements/ignore/textfield';
// import { ignoreSelectFiles } from './elements/ignore/select';
// import { ignoreSwitchFiles } from './elements/ignore/switch';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  file: "sidebar-card.js",
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  sourcemap: false
};

const plugins = [
  nodeResolve({sourcemap: false}),
  commonjs({sourcemap: false}),
  typescript({
    typescript: require('typescript'),
    objectHashIgnoreUnknownHack: true,
  }),
  json({sourcemap: false}),
  babel({
    exclude: 'node_modules/**',
    sourcemap: false
  }),
  dev && serve(serveopts),
  !dev && terser(),
  // ignore({
  //   files: [...ignoreTextfieldFiles, ...ignoreSelectFiles, ...ignoreSwitchFiles].map((file) => require.resolve(file)),
  // }),
];

export default [
  {
    input: 'src/sidebar-card.ts',
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: false
    },
    plugins: [...plugins],
  }
];
