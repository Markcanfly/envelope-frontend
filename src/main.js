import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const pinia = createPinia();

const App = createApp(App);

App.use(pinia);
App.use(router);
App.mount('#app');
