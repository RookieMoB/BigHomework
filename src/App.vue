<template>
  <router-view></router-view>
</template>

<script setup>
import NProgress from 'nprogress';
NProgress.configure({ 
  speed: 800,         // 进度条的动画速度，单位为毫秒
});
</script>

<style>
#nprogress .bar {
  background-color: #fdd2ea!important;
  height: 2000px!important;
  opacity: 0.2!important;
}
</style>
