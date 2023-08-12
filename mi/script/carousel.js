window.addEventListener("load", function () {
  // 找对象
  // 找小圆点数组
  var dotsArray = this.document.querySelectorAll("div.dots>a");
  // 找左右按钮
  var leftButton = this.document.querySelector("div.arrow-left");
  var rightButton = this.document.querySelector("div.arrow-right");
  // 定义一个全局变量，来表示当前小圆点的位置
  var currentDotNumber = 0;
  // 给左右按钮添加点击事件
  leftButton.onclick = function () {
    dotHighLight(--currentDotNumber);
  };
  rightButton.onclick = function () {
    dotHighLight(++currentDotNumber);
  };
  // 定义函数
  // 小圆点高亮
  function dotHighLight(index) {
    // 判断索引是否正常
    if (index === -1) {
      // 更新currentDotNumber的值为4
      // 更新index的值为4
      index = currentDotNumber = 4;
    }
    if (index === 5) {
      index = currentDotNumber = 0;
    }
    // 先让所有的小圆点熄灭
    for (var i = 0; i < dotsArray.length; i++) {
      // 让所有的小原点熄灭
      dotsArray[i].classList.remove("active");
    }
    // 让指定索引的小圆点高亮
    dotsArray[index].classList.add("active");
  }
});
