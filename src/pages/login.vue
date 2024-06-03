<template>
  <el-row style="min-height: 100vh;" class="login-container"> 
    <el-col :md="16" :xs="12" class="left">
      <div>
        <div>欢迎光临</div>
        <div>Vue大作业 ——《商城后台管理》—— 基于vite、windicss、router等技术实现</div>
      </div>
    </el-col>
    <el-col :md="8" :xs="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span class="place">账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
        
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        
    
        <el-form-item>
          <el-button type="primary" @click="onSubmit" color="#0ea5e9" class="btn" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
  import { ref, reactive, 
    onMounted/* 页面渲染完成之后调用 */, 
    onBeforeUnmount/* 页面卸载之前调用 */ 
  } from 'vue'
  import { toast } from '@/composables/util'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { setToken } from '@/composables/auth'

  const router  = useRouter()
  const store   = useStore()

  const form = reactive({
    username: '',
    password: ''
  })

  // 如果请求时间较长，加入loading效果
  const loading = ref(false)

  // 验证规则
  const rules = {
    username: [
      // blur 表示失去焦点的时候
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      // { min: 3, max: 5, message: '用户名的长度必须为 3 - 5 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
    ]
  }

  const formRef = ref(null)

  const onSubmit = () => {
    formRef.value.validate((valid) => {
      // 登录失败
      if(!valid) {
          return false
      }
      // 登录成功
      loading.value = true
      // 发起登录请求
      store.dispatch('login', form).then(res => {
        toast(null, '登录成功')
        router.push('/')      // 跳转到后台首页
        // 使用响应拦截器后
        // console.log(res);     // console.log(res.data.data.token);
      })
      .finally(() => {
        loading.value = false
      })
    })
  }

  // 监听回车事件
  function onKeyUp(e) {
    if (e.keyCode === 13) {
      onSubmit()
    }
  }

  // 添加键盘监听事件
  onMounted(() => {
    document.addEventListener('keyup', onKeyUp)
  })

  // 移出键盘事件
  onBeforeUnmount(() => {
    document.removeEventListener('keyup', onKeyUp)
  })

</script>

<!-- lang='postcss'  可以消除样式的警告 , scoped —— 作用域-->
<style scoped>
.login-container {
  @apply bg-sky-500 rounded-full shadow-2xl shadow-gray-500;
}
.login-container .left {
  @apply flex items-center justify-center;
}
.login-container .right {
  @apply bg-light-50 flex items-center justify-center flex-col rounded-full shadow-2xl shadow-gray-500;
}
.left>div>div:first-child {
  @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child {
  @apply text-gray-200 text-sm;
}

.right .title {
  @apply text-gray-800 font-bold text-3xl mb-4;
}
.right>div {
  @apply flex items-center justify-between mb-6 space-x-2;
}
.right .line {
  @apply h-[1px] w-16 bg-gray-300;
}
.right .place {
  @apply text-gray-300 text-sm;
}
.btn {
  @apply w-[250px] rounded-full shadow-2xl shadow-blue-500;
}
</style>