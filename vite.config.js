import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // eslint-disable-next-line no-undef
      include: path.resolve(__dirname, './locales/**'),
      compositionOnly: false,
    })
  ]
})
