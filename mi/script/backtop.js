window.addEventListener("load", function () {
  // 找到返回顶部按钮
  var backtopButton = this.document.querySelector(
    "div.side-toolbar a:last-of-type"
  );
  this.window.onscroll = throttle(function () {
    // console.log("1111111");
    // 监控滚动的距离，超过一整屏的距离，就显示返回顶部按钮
    if (window.scrollY >= window.screen.height) {
      backtopButton.style.display = "block";
    } else {
      backtopButton.style.display = "none";
    }
  });
  // 添加返回顶部的点击事件
  backtopButton.onclick = function () {
    // 返回顶部
    document.documentElement.scrollTop = 0;
  };
  // 节流
  function throttle(fn) {
    // 定义一个变量，记录上次执行函数的时间戳
    var lastEventTimeStamp = null;
    return function () {
      // 定义一个变量，记录当前的时间戳
      var now = Date.now();
      // 判断一下什么时候执行下面的函数
      // 1.从来没有执行过
      // 2.之前执行过,但是时间过去很久了
      if (!lastEventTimeStamp || now - lastEventTimeStamp >= 200) {
        // 更新时间戳
        lastEventTimeStamp = now;
        // 符合条件，执行函数
        fn();
      }
    };
  }
});
