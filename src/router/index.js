import { createRouter, createWebHashHistory } from "vue-router";

import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import NotFound from '@/pages/404.vue'
import Admin from '@/layout/admin.vue'

// 在 App.vue 中传入 router-view 组件， 之后显示的是 admin.vue，再在 admin.vue 中传入 router-view 组件，之后进行显示的就是 index 及其他的子组件

const routers = [{
  path: '/',
  component: Admin,
  children: [{
    path: '/',
    component: Index,
    meta: { title: '后台首页' }
  }]
},
{ path: '/login', component: Login, meta: { title: '登录页' } },
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // { path: '/', redirect: '/index' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

export default router