import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8'
    }
  },
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/main.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@views': path.resolve(__dirname, './src/views'),
      '@helpers': path.resolve(__dirname, './src/helpers')
    }
  }
});
