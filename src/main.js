import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './apollo/provider'

createApp(App).use(apolloProvider).use(store).use(router).mount('#app')
