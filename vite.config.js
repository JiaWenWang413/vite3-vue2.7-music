import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
 
export default defineConfig({
    base: './',
    css: {
      preprocessorOptions: {
        sass: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/variables.scss')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue2(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      // 端口号
      port: 8080,
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      hmr:true,
      // 自定义代理规则
      proxy: {
        //配置多个跨域
      '/api': {
        target: 'http://localhost:3000', //代理的目标地址
        changeOrigin: true, //是否更新代理后请求的headers中host地址
        // ws: true,//websocket支持
        rewrite: path => path.replace(/^\/api/, '')
      }
      },
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
});