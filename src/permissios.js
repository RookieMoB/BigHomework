import router from '@/router/index.js'
import { getToken } from '@/composables/auth.js'
import { toast, showFullLoading, hideFullLoading } from '@/composables/util.js'
import store from '@/store/index.js'

// 配置全局前置守卫
router.beforeEach(async (to, from, next) => {                       // to 代表 去往哪里， from 代表 从哪里来

  // 显示 loading
  showFullLoading()

  const token = getToken()
  if (!token && to.path != '/login') {                        // 判断是否存在token「即是否登录过」，如果存在则放行，否则跳转到登录页
    toast(null, '请先登录', 'warning')                        // 没有登录，强制跳转回登录页
    return next({ path: '/login' })
  }

  if (token && to.path == '/login') {                         // 判断是否登录成功，如果登录成功的话，就不可以重复登录
    toast(null, '请勿重复登录', 'warning')
    return next({ path: from.path ? from.path : '/' })
  }

  if (token) {                                                // 如果用户登录了，自动获取用户信息，并存储在 vuex 当中
    await store.dispatch('getinfo')                           // 避免了登录之后刷新页面数据不存在的情况
  }

  // 设置页面标题
  let title = to.meta.title ? to.meta.title : 'MoB' + ' - 王建兵、陈彦廷'
  document.title = title

  next()                                                     // 使用 next 方法进行路由导航「即放行」
})

router.afterEach((to, from) => hideFullLoading())