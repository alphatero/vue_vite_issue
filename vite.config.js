// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    vueI18n({
      // eslint-disable-next-line no-undef
      include: path.resolve(__dirname, './locales/**'),
      compositionOnly: false,
    }),
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
});
