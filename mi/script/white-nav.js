window.addEventListener("load",function(){
    // 模拟后台请求的数据
    var ajaxData = [
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png",
          title: "Xiaomi 11 青春活力版-1",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png",
          title: "Xiaomi 11 青春活力版-2",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png",
          title: "Xiaomi 11 青春活力版-3",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png",
          title: "Xiaomi 11 青春活力版-4",
          price: "4999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png",
          title: "Xiaomi 11 青春活力版-5",
          price: "5999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png",
          title: "Xiaomi 11 青春活力版-6",
          price: "6999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392da6fd3e34dae9fac5d.png",
          title: "Redmi Note 11 Pro系列1",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392da6fd3e34dae9fac5d.png",
          title: "Redmi Note 11 Pro系列2",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392da6fd3e34dae9fac5d.png",
          title: "Redmi Note 11 Pro系列3",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392da6fd3e34dae9fac5d.png",
          title: "Redmi Note 11 Pro系列4",
          price: "4999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png",
          title: "Redmi智能电视X55 2020",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png",
          title: "Redmi智能电视X55 2021",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png",
          title: "Redmi智能电视X55 2022",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png",
          title: "Redmi智能电视X55 2023",
          price: "4999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png",
          title: "Redmi智能电视X55 2024",
          price: "5999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png",
          title: "Redmi智能电视X55 2025",
          price: "6999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png",
          title: "RedmiBook Pro 14 增强版1",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png",
          title: "RedmiBook Pro 14 增强版2",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png",
          title: "RedmiBook Pro 14 增强版3",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png",
          title: "RedmiBook Pro 14 增强版4",
          price: "4999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png",
          title: "小米平板5-1",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png",
          title: "小米平板5-2",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png",
          title: "小米平板5-3",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png",
          title: "小米平板5-4",
          price: "4999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png",
          title: "小米平板5-5",
          price: "5999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png",
          title: "小米平板5-6",
          price: "6999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg",
          title: "米家风冷对开门冰箱 481L",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg",
          title: "米家风冷对开门冰箱 482L",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg",
          title: "米家风冷对开门冰箱 483L",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg",
          title: "米家风冷对开门冰箱 484L",
          price: "4999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png",
          title: "小米路由器AX6001",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png",
          title: "小米路由器AX6002",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png",
          title: "小米路由器AX6003",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png",
          title: "小米路由器AX6004",
          price: "4999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png",
          title: "小米路由器AX6005",
          price: "5999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png",
          title: "小米路由器AX6006",
          price: "6999元起",
        },
      ],
      [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png",
          title: "小米净水器S1 801G",
          price: "1999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png",
          title: "小米净水器S1 802G",
          price: "2999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png",
          title: "小米净水器S1 803G",
          price: "3999元起",
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png",
          title: "小米净水器S1 804G",
          price: "4999元起",
        },
      ],
    ];
  
    // 找对象
    var navMenu = document.querySelector("div.nav-menu");
    // 找到div.nav-content下面的所有a标签
    var whiteNavHrefArray = document.querySelectorAll("div.nav-content>a");
    // 定义延时标记
    var navMenuShowTimer = 0;
    // 遍历数组
    for (var i = 0; i < whiteNavHrefArray.length; i++) {
      if (i !== 0 && i !== 9 && i !== 10) {
        // 添加鼠标移入事件
        whiteNavHrefArray[i].onmouseenter = function () {
          // 每次鼠标移入延时器清空
          clearTimeout(navMenuShowTimer);
          // 展开白色面板
          navMenu.id = "nav-menu-show";
          showData(this.dataset.index);
        };
        // 添加鼠标移出事件
        whiteNavHrefArray[i].onmouseout = function () {
          // 添加延时器
          navMenuShowTimer = setTimeout(function () {
            // 鼠标移出隐藏
            navMenu.id = "";
          }, 100);
        };
      }
    }
    // 展示数据的函数
    function showData(index) {
      // 获取当前白色面板需要的数据
      var currentData = ajaxData[index];
      // 拼接html代码，写入dom元素里面
      var htmlString = "";
      htmlString += '<div class="nav-container">';
      htmlString += "<ul>";
      // 遍历数组，拼接li标签
      for (var i = 0; i < currentData.length; i++) {
        var obj = currentData[i];
        htmlString += '<li class="fl">';
        htmlString += '<a href="javascript:;">';
        htmlString += '<div><img src="' + obj.img + '" alt="" /></div>';
        htmlString += "<div>" + obj.title + "</div>";
        htmlString += "<p>" + obj.price + "</p>";
        htmlString += "</a>";
        htmlString += "</li>";
      }
      htmlString += "<ul>";
      htmlString += "</div>";
      // 写入到dom元素里面
      navMenu.innerHTML = htmlString;
    }
})
