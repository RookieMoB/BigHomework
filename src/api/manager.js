import axios from "@/axios";

export function login(username, password) {                   // 登录请求
  return axios.post('/api/admin/login', {
    username,
    password
  })
}

export function getinfo() {                                   // 获取管理员信息
  return axios.post('/api/admin/getinfo')
}

export function logout() {                                   // 退出登录
  return axios.post('/api/admin/logout')
}