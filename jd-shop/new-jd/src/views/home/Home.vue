<template>
  <div class="container">
    <Header />
    <Banner />
    <Category />
    <Gap />
    <Nearby />
  </div>
  <Tabbar />
</template>

<script>
// 引入组件
import Header from "./Header.vue";
import Banner from "./Banner.vue";
import Category from "./Category.vue";
import Gap from "./Gap.vue";
import Nearby from "./Nearby.vue";
import Tabbar from "@/components/Tabbar.vue";
export default (await import("vue")).defineComponent({
  // 注册组件
  components: {
    Header,
    Banner,
    Category,
    Gap,
    Nearby,
    Tabbar,
  },
});
</script>

<!-- scoped的作用是,为了防止各个组件之间的样式互相干扰 -->
<!-- 在Vue组件中，如果使用了scoped属性来限定CSS样式的作用域，可能会导致样式不生效。你可以尝试将scoped属性去掉，或者使用/deep/或者>>>来穿透作用域 -->
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  // background-color: #fff;
  overflow: auto;
}
</style>
