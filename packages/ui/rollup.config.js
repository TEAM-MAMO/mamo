import svgr from '@svgr/rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';

export default {
  input: [
    './src/components/index.ts',
    './src/styles/index.ts',
    './src/tokens/index.ts',
  ],
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // 외부 의존성을 처리
    resolve(), // Node 모듈을 번들링할 수 있도록 설정
    commonjs(), // CommonJS 모듈을 ES6로 변환
    typescript(), // TypeScript 파일을 번들링
    svgr({
      svgoConfig: {
        plugins: [{ removeViewBox: false }],
      },
      exportType: 'named',
      namedExport: 'ReactComponent',
    }), // SVG 파일을 React 컴포넌트로 변환
    json(), // JSON 파일을 가져올 수 있도록 설정
    terser(), // 번들 파일을 압축
  ],
  external: ['react', 'react-dom'], // 외부 패키지를 번들에서 제외
};
