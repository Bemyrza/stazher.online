import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bridge from '@vkontakte/vk-bridge'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

bridge
  .send('VKWebAppInit')
  .then((data) => {
    if (data.result) {
      console.log('VKWebAppInit successful:', data)
    }
  })
  .catch((error) => {
    console.error('VKWebAppInit error:', error)
  })
