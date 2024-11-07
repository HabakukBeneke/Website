import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { defineConfig } from 'vite';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

export default defineConfig({
  base: './',
  test: {
    coverage: {
      provider: 'v8'
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    vueI18n({
      include: path.resolve(__dirname, './src/i18n/locales/**')
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/main.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/helpers', import.meta.url))
    }
  }
});
