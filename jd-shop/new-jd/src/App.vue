<template>
  <!-- 3. 调用Home组件 -->
  <Home />
</template>

<script>
// 1. 引入Home组件
import Home from "./views/home/Home.vue";
// 导出App组件
export default {
  // 组件名
  name: "App",
  // 2. 组件注册
  components: { Home },
};
</script>
