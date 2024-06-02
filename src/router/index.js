import { createRouter, createWebHashHistory } from "vue-router";
import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import NotFound from '@/pages/404.vue'

const routers = [
  {path: '/index', component: Index},
  {path: '/login', component: Login},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {path: '/', redirect: '/index'}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default router