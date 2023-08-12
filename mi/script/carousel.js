window.addEventListener("load", function () {
  // 找对象
  // 找轮播图
  var carouselContainer = this.document.querySelector(
    "div.carousel>div.container"
  );
  // 找小圆点数组
  var dotsArray = this.document.querySelectorAll("div.dots>a");
  // 找左右按钮
  var leftButton = this.document.querySelector("div.arrow-left");
  var rightButton = this.document.querySelector("div.arrow-right");
  // 找图片数组
  var imgsArray = this.document.querySelectorAll(
    "div.carousel>div.container>img"
  );
  // 定义一个全局变量，来表示当前小圆点和图片的位置/数字
  var currentNumber = 0;
  // 函数节流，上锁
  var lock = false;
  // 定义轮播图自动播放
  var autoPlayTimer = 0;
  // 给左右按钮添加点击事件
  leftButton.onclick = function () {
    // 上锁
    if (lock) {
      return;
    }
    lock = true;
    // 小圆点高亮，图片显示
    dotHighLightAndImgShow(--currentNumber);
    // 节流
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
    // 小圆点高亮，图片显示
    dotHighLightAndImgShow(++currentNumber);
    // 节流
    setTimeout(() => {
      lock = false;
    }, 1000);
  };
  /**
   * 小圆点高亮和图片显示，函数二合一
   * @param {number} index 索引
   */
  function dotHighLightAndImgShow(index) {
    // 判断索引是否正常
    if (index === -1) {
      // 两步合为一步
      // 第一步，更新currentNumber的值为4
      // 第二步，更新index的值为4
      index = currentNumber = 4;
    }
    if (index === 5) {
      index = currentNumber = 0;
    }
    // 先让所有的小圆点熄灭,图片隐藏
    for (var i = 0; i < dotsArray.length; i++) {
      // 让所有的小圆点熄灭,图片隐藏
      dotsArray[i].classList.remove("active");
      imgsArray[i].classList.remove("img-active");
    }
    // 让指定索引的小圆点高亮，图片显示
    dotsArray[index].classList.add("active");
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
      dotHighLightAndImgShow((currentNumber = currentIndex));
    };
  });
  // 定义函数，自动播放
  function autoPlay() {
    // 只要添加新的定时器，就要把之前的定时器关掉，防止累加，速度过快
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => {
      rightButton.click();
    }, 2000);
  }
  // 调用自动播放函数
  autoPlay();
  // 鼠标移入，自动播放暂停
  carouselContainer.onmouseenter = function () {
    clearInterval(autoPlayTimer);
  };
  // 鼠标移出，开启自动播放
  carouselContainer.onmouseleave = function () {
    autoPlay();
  };
});
