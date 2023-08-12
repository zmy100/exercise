window.addEventListener("load", function () {
  // 找对象
  // 找小圆点数组
  var dotsArray = this.document.querySelectorAll("div.dots>a");
  // 找左右按钮
  var leftButton = this.document.querySelector("div.arrow-left");
  var rightButton = this.document.querySelector("div.arrow-right");
  // 找图片数组
  var imgsArray = this.document.querySelectorAll(
    "div.carousel>div.container>img"
  );
  // 定义一个全局变量，来表示当前小圆点的位置/数字
  var currentDotNumber = 0;
  // 定义一个全局变量，来表示当前图片的位置/数字
  var currentImgNumber = 0;
  // 给左右按钮添加点击事件
  leftButton.onclick = function () {
    dotHighLight(--currentDotNumber);
    imgShow(--currentImgNumber);
  };
  rightButton.onclick = function () {
    dotHighLight(++currentDotNumber);
    imgShow(++currentImgNumber);
  };
  // 定义函数
  // 小圆点高亮
  function dotHighLight(index) {
    // 判断索引是否正常
    if (index === -1) {
      // 两步合为一步
      // 第一步，更新currentDotNumber的值为4
      // 第二步，更新index的值为4
      index = currentDotNumber = 4;
    }
    if (index === 5) {
      index = currentDotNumber = 0;
    }
    // 先让所有的小圆点熄灭
    for (var i = 0; i < dotsArray.length; i++) {
      // 让所有的小圆点熄灭
      dotsArray[i].classList.remove("active");
    }
    // 让指定索引的小圆点高亮
    dotsArray[index].classList.add("active");
  }
  // 定义函数
  // 图片显示
  function imgShow(index) {
    // 判断索引是否正常
    if (index === -1) {
      // 两步合为一步
      // 第一步，更新currentImgNumber的值为4
      // 第二步，更新index的值为4
      index = currentImgNumber = 4;
    }
    if (index === 5) {
      index = currentImgNumber = 0;
    }
    // 先让所有的图片熄灭
    for (var i = 0; i < imgsArray.length; i++) {
      // 让所有的图片熄灭
      imgsArray[i].classList.remove("img-active");
    }
    // 让指定索引的图片显示
    imgsArray[index].classList.add("img-active");
  }
});
