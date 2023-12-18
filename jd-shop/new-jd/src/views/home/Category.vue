<template>
  <div class="category">
    <div
      v-for="(category, index) of categoryItems"
      :key="index"
      class="category-row"
    >
      <div
        v-for="(item, itemIndex) of category"
        :key="itemIndex"
        class="category-item"
      >
        <img src="item.img" alt="" class="item-img" />
        <p class="item-title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
  setup() {
    const categoryItems = [
      [
        { img: "../../assets/img/超市@3x.png", title: "超市便利" },
        { img: "../../assets/img/菜市场@3x.png", title: "菜市场" },
        { img: "../../assets/img/水果店@3x.png", title: "水果店" },
        { img: "../../assets/img/鲜花@3x.png", title: "鲜花绿植" },
        { img: "../../assets/img/医药健康@3x.png", title: "医药健康" },
      ],
      [
        { img: "../../assets/img/家居@3x.png", title: "家居时尚" },
        { img: "../../assets/img/蛋糕@3x.png", title: "烘培蛋糕" },
        { img: "../../assets/img/签到@3x.png", title: "签到" },
        { img: "../../assets/img/大牌免运@3x.png", title: "大牌免运" },
        { img: "../../assets/img/红包@3x.png", title: "红包套餐" },
      ],
    ];
    return {
      categoryItems,
    };
  },
};
</script>
<style lang="scss" scoped>
.category {
  width: 100vw;
  height: 46.4vw;
  padding: 4.2667vw 6.9333vw;
  display: flex;
  flex-direction: column;
  .category-row {
    width: 86.1333vw;
    height: 23.2vw;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 4.2667vw;
    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 5.6vw;
      &:last-child {
        margin-right: 0;
      }
      .item-img {
        width: 10.6667vw;
        height: 10.6667vw;
        margin-bottom: 1.6vw;
      }
      .item-title {
        width: 12.8vw;
        height: 4.5333vw;
        font-size: 3.2vw;
        color: #333333;
        text-align: center;
      }
    }
  }
}
</style>
