import { createApp } from 'vue';

import Card from './components/Card.vue';

import App from './App.vue';


import './index.css';


import router from './router';



const app = createApp(App);

app.use(router);

app.component('Card', Card);

app.mount('#app');
