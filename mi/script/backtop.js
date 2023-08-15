window.addEventListener("load", function () {
  // 找到返回顶部按钮
  var backtopButton = this.document.querySelector(
    "div.side-toolbar a:last-of-type"
  );
  this.window.onscroll = function () {
    // 监控滚动的距离，超过一整屏的距离，就显示返回顶部按钮
    if (window.scrollY >= window.screen.height) {
      backtopButton.style.display = "block";
    } else {
      backtopButton.style.display = "none";
    }
  };
  // 添加返回顶部的点击事件
  backtopButton.onclick = function () {
    // 返回顶部
    document.documentElement.scrollTop = 0;
  };
});
