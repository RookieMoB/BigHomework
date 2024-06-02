import { createStore } from 'vuex'
import { login, getinfo } from '@/api/manager'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 用户信息
      userInfo: {}
    }
  },
  mutations: {
    // 记录用户信息
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 获取当前登录用户信息
    getinfo({ commit }) {
      return new Promise((resolve, reject) => {
        getinfo().then(res => {
          commit("SET_USER_INFO", res)// 当 getinfo 函数成功返回结果时，调用 commit 方法提交一个 mutation。commit 方法的第一个参数是 mutation 的类型，第二个参数是传递给 mutation 的数据（即 res）。
          resolve(res)                // 调用 resolve 函数表示 Promise 已成功完成，并将结果 res 传递给调用者。
        }).catch(err => reject(err))  // 当 getinfo 函数失败时，调用 reject 函数表示 Promise 已失败，并将错误 err 传递给调用者
      })
    }
  }
})

export default store