<template>
  <div class="category">
    <div class="category-row">
      <div class="category-item">
        <img src="../../assets/img/超市@3x.png" alt="" class="item-img" />
        <p class="item-title">超市便利</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/菜市场@3x.png" alt="" class="item-img" />
        <p class="item-title">菜市场</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/水果店@3x.png" alt="" class="item-img" />
        <p class="item-title">水果店</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/鲜花@3x.png" alt="" class="item-img" />
        <p class="item-title">鲜花绿植</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/医药健康@3x.png" alt="" class="item-img" />
        <p class="item-title">医药健康</p>
      </div>
    </div>
    <div class="category-row">
      <div class="category-item">
        <img src="../../assets/img/家居@3x.png" alt="" class="item-img" />
        <p class="item-title">家居时尚</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/蛋糕@3x.png" alt="" class="item-img" />
        <p class="item-title">烘培蛋糕</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/签到@3x.png" alt="" class="item-img" />
        <p class="item-title">签到</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/大牌免运@3x.png" alt="" class="item-img" />
        <p class="item-title">大牌免运</p>
      </div>
      <div class="category-item">
        <img src="../../assets/img/红包@3x.png" alt="" class="item-img" />
        <p class="item-title">红包套餐</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
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
