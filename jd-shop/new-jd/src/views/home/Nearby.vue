<template>
  <div class="nearby">
    <div class="nearby-title">附近店铺</div>

    <div
      v-for="(item, index) in nearbyItems"
      :key="item.id"
      class="nearby-item"
    >
      <div class="left">
        <img :src="item.logo" alt="" class="shop-logo" />
      </div>
      <div class="right">
        <div class="shop-title">{{ item.title }}</div>
        <div class="tags">
          <span
            v-for="(tag, index) of item.tags"
            :key="index"
            class="tag-item"
            >{{ tag }}</span
          >
        </div>
        <div class="promotion">{{ item.promotion }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 组件的名称
  name: "Nearby",

  setup() {
    const nearbyItems = [
      {
        id: 1,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 2,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 3,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 4,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 5,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 6,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 7,
        logo: require("../../assets/img/shop-logo.png"),
        title: "沃尔玛",
        tags: ["月售1万", "起送¥0", "基础运费¥5"],
        promotion: "VIP尊享满89元减4元运费券（每月3张）",
      },
    ];
    return {
      nearbyItems,
    };
  },
};
</script>
<style lang="scss" scoped>
.nearby {
  width: 100vw;
  padding: 4.2667vw 4.8vw 17.3333vw;
  .nearby-title {
    font-size: 4.8vw;
    font-weight: 600;
    color: #333333;
    margin-bottom: 3.7333vw;
  }
  .nearby-item {
    width: 90.4vw;
    height: 22.9333vw;
    display: flex;
    .left {
      margin-left: 4.8vw;
      margin-right: 4.2667vw;
      .shop-logo {
        width: 14.9333vw;
        height: 14.9333vw;
        border-radius: 14.9333vw;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-bottom: 0.2667vw solid #f1f1f1;
      flex-grow: 1;
      .shop-title {
        font-size: 4.2667vw;
        color: #333333;
      }
      .tags {
        .tag-item {
          font-size: 3.4667vw;
          color: #333333;
        }
      }
      .promotion {
        font-size: 3.4667vw;
        color: #e93b3b;
        margin-bottom: 1.3333vw;
      }
    }
  }
}
</style>
