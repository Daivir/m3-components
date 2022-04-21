import { createApp } from 'vue'
import App from './App.vue'
import m3 from '@/plugins/m3'

createApp(App)
  .use(m3)
  .mount('#app')
