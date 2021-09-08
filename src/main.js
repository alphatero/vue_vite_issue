import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
//import messages from '@intlify/vite-plugin-vue-i18n/messages'


import './index.css'
import ch from './locales/ch.json'
import en from './locales/en.json'

import router from './router'



const i18n = createI18n({
    legacy: true,
    locale: (localStorage.getItem('locale')) || 'ch',
    messages: {
        ch,
        en, 
    }
})



const app = createApp(App);

app.use(router);
app.use(i18n);





app.mount('#app');
