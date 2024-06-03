import { createApp } from 'vue'
import ElementPlus from 'element-plus'                          // 引入Element Plus 组件库
import 'element-plus/dist/index.css'                            // ⬆️
import 'virtual:windi.css'                                      // 引入WindiCSS样式
import router from './router/index.js'                          // 引入router
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // 全局引入图标
// import axios from '~/axios'                                     // 引入axios
import store from '@/store/index.js'                            // 引入store
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(axios)
app.use(store)
// 导入全局守卫
import '@/permissios.js'
// nprogress 样式
import 'nprogress/nprogress.css'
app.mount('#app')