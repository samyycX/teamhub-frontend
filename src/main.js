import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/aura-dark-pink/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

const routes = [
  {
    path: '/', component: () => import("./pages/MainPage.vue")
  },
  {
    path: '/test', component: () => import("./components/activity/ActivityPost.vue")
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

app.use(PrimeVue)
app.use(router)
app.mount('#app')
