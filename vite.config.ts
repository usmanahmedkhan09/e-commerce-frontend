import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from "vite-plugin-require";
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), vitePluginRequire({
    // @fileRegex RegExp
    // optional：default file processing rules are as follows
    // fileRegex:/(.jsx?|.tsx?|.vue)$/

    // Conversion mode. The default mode is import
    // importMetaUrl | import
    // importMetaUrl see https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url 
    // translateType: "importMetaUrl" | "import";
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      }
    }
  }
})
