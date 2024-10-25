import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
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
  })
);
