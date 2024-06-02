import { useCookies } from '@vueuse/integrations/useCookies'    // 引入cookie
const token_key = 'admin-token'
const cookie = useCookies()

// 获取token
export function getToken() {
  return cookie.get(token_key)
}

// 设置token
export function setToken(token) {
  return cookie.set(token_key, token)
}

// 删除token
export function removeToken() {
  return cookie.remove(token_key)
}