<template>
  <div class="head">
    <div class="head-info">
      <div class="left">
        <span class="iconfont icon-place1"></span>
        <span class="address">北京理工大学国防科技园2号楼10层</span>
      </div>
      <span class="iconfont icon-lingdang"></span>
    </div>
    <Search />
  </div>
</template>
<script>
// 引入组件
import Search from "./Search.vue";
export default {
  // 组件名
  name: "Header",
  // 注册组件
  components: {
    Search,
  },
};
</script>
<style lang="scss" scoped>
.head {
  width: 100vw;
  height: 26.1333vw;
  padding: 4.2667vw 4.8vw 3.2vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #fff;
  .head-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.2667vw;
    .left {
      .icon-place1 {
        font-size: 6.4vw;
        color: #333333;
        display: inline-block;
        transform: translateY(0.8vw);
      }
      .address {
        font-size: 4.2667vw;
        color: #333333;
      }
    }
    .icon-lingdang {
      font-size: 6.4vw;
      color: #000;
    }
  }
}
</style>
