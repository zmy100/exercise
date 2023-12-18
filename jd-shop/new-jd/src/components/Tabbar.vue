<template>
  <div class="tabbar">
    <div class="item active">
      <span class="one iconfont icon-home_light"></span>
      <span class="two iconfont icon-home_fill_light"></span>
      <span class="text">首页</span>
    </div>
    <div class="item">
      <span class="one iconfont icon-bag"></span>
      <span class="two iconfont icon-bag_fill"></span>
      <span class="text">购物车</span>
    </div>
    <div class="item">
      <span class="one iconfont icon-dingdanorder"></span>
      <span class="two iconfont icon-order-fill"></span>
      <span class="text">订单</span>
    </div>
    <div class="item">
      <span class="one iconfont icon-user"></span>
      <span class="two iconfont icon-user-fill"></span>
      <span class="text">我的</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
};
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100vw;
  height: 13.0667vw;
  background: #ffffff;
  box-shadow: 0 -0.2667vw 0.2667vw 0 #f1f1f1;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  padding-top: 1.8933vw;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #333333;
    &.active {
      color: #1fa4fc;
      .iconfont {
        &.one {
          display: none;
        }
        &.two {
          display: inline;
        }
      }
    }
    span.iconfont {
      width: 4.8vw;
      height: 4.5333vw;
      font-size: 5.3333vw;
      margin-bottom: 0.88vw;
      &.one {
        display: inline;
      }
      &.two {
        display: none;
      }
    }
    .text {
      font-size: 3.2vw;
      text-align: center;
      transform: translate(0.5333vw);
    }
  }
}

</style>
