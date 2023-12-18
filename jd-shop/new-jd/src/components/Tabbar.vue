<template>
  <div class="tabbar">
    <div
      v-for="(item, index) of tabbarItems"
      :class="{ item: true, active: index === 0 }"
      :key="item.icon1"
    >
      <span :class="['one', 'iconfont', item.icon1]"></span>
      <span :class="['two', 'iconfont', item.icon2]"></span>
      <span class="text">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  setup() {
    const tabbarItems = [
      { icon1: "icon-home_light", icon2: "icon-home_fill_light", text: "首页" },
      { icon1: "icon-bag", icon2: "icon-bag_fill", text: "购物车" },
      { icon1: "icon-dingdanorder", icon2: "icon-order-fill", text: "订单" },
      { icon1: "icon-user", icon2: "icon-user-fill", text: "我的" },
    ];
    return {
      tabbarItems,
    };
  },
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
