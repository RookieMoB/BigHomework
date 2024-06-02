import axios from "@/axios";

// 登录请求
export function login(username, password) {
  return axios.post('/api/admin/login', {
    username,
    password
  })
}

// 获取管理员信息
export function getinfo() {
  return axios.post('/api/admin/getinfo')
}