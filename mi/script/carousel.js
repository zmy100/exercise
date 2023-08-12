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
  // 函数节流，上锁
  var lock = false;
  // 给左右按钮添加点击事件
  leftButton.onclick = function () {
    // 上锁
    if (lock) {
      return;
    }
    lock = true;
    // 小圆点高亮
    dotHighLight(--currentDotNumber);
    // 图片显示
    imgShow(--currentImgNumber);
    // 延时1s
    setTimeout(() => {
      lock = false;
    }, 1000);
  };
  rightButton.onclick = function () {
    // 上锁
    if (lock) {
      return;
    }
    lock = true;
    // 小圆点高亮
    dotHighLight(++currentDotNumber);
    // 图片显示
    imgShow(++currentImgNumber);
    // 延时1s
    setTimeout(() => {
      lock = false;
    }, 1000);
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
  //小圆点和图片联动
  // 遍历小圆点数组，添加点击事件
  dotsArray.forEach(function (element, index) {
    // 给小圆点添加点击事件
    element.onclick = function () {
      // 获取小圆点当前的索引
      var currentIndex = this.dataset.index;
      // 按钮高亮，显示图片
      dotHighLight((currentDotNumber = currentIndex));
      imgShow((currentImgNumber = currentIndex));
    };
  });
});
