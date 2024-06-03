<template>
  <div>
    后台首页
    {{ $store.state.userInfo.username }}

    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<script setup>
  import { showModel } from '@/composables/util';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { logout } from '@/api/manager'
  import { toast } from '@/composables/util';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const store = useStore()
  const username = computed(() => store.state.userInfo.username);

  const handleLogout = () => {
    showModel('亲爱的 ' + username.value, '是否退出当前账号登录')
    .finally(() => {
      logout()
      .then(() => {
        // 点击确定，移除 cookie 里的 token，清除当前用户状态 「vuex」
        store.dispatch('logout')
        // 跳转回登录页
        router.push('/login')
        // 提示退出成功
        toast(null, '退出登录成功')
      })
    })
  }
</script>

<style>

</style>