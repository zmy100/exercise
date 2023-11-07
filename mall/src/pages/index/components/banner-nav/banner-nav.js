import "./banner-nav.css";
import axios from "axios";
import first from "./first-menu.art";
import second from "./second-menu.art";

// 调用接口
axios
  .get("../src/api/ajax-data/menu.json")
  .then(function (response) {
    document.querySelector("ul#banner-nav-ul").innerHTML = first({
      items: response.data.data,
    });
  })
  .then(getSecondMenu())
  .then(makeMenu())
  .catch(function (error) {
    console.log(error);
  });

function getSecondMenu() {
  const jsonArray = [
    {
      type: "hot",
      json: "../src/api/ajax-data/hot.json",
    },
    {
      type: "hk",
      json: "../src/api/ajax-data/hk.json",
    },
    {
      type: "jp",
      json: "../src/api/ajax-data/japan.json",
    },
    {
      type: "as",
      json: "../src/api/ajax-data/asia.json",
    },
  ];
  jsonArray.forEach((obj) => {
    // 调用接口
    axios
      .get(obj.json)
      .then(function (response) {
        document.querySelector(`div.menu[data-t='${obj.type}']`).innerHTML =
          second({
            items: response.data.data,
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

function makeMenu() {
  var bannerNavUl = document.getElementById("banner-nav-ul");
  var bannerNav = document.getElementById("banner-nav");
  var menus = document.querySelectorAll(".menus-box .menu");
  var bannerLis = document.querySelectorAll("#banner-nav-ul li");

  // 事件委托，必须使用onmouseover事件，而不是onmouseenter，我们基础课上讲过，
  // onmouseover冒泡，onmouseenter不冒泡
  bannerNavUl.onmouseover = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      // 得到触碰的这个li元素身上的data-t属性
      var t = e.target.getAttribute("data-t");
      // 排他操作，让所有的li都去掉current类名
      for (var i = 0; i < bannerLis.length; i++) {
        bannerLis[i].className = bannerLis[i].getAttribute("data-t");
      }
      // 当前碰到的这个li，要加current类
      e.target.className += " current";
      // 寻找匹配的menu
      var themenu = document.querySelector(
        ".menus-box .menu[data-t=" + t + "]"
      );
      // 排他操作，让所有的盒子都去掉current类名
      for (var i = 0; i < menus.length; i++) {
        menus[i].className = "menu";
      }
      // 匹配的这项加上current类名
      themenu.className = "menu current";
    }
  };

  // 当鼠标离开大盒子的时候，菜单要关闭
  bannerNav.onmouseleave = function () {
    for (var i = 0; i < bannerLis.length; i++) {
      bannerLis[i].className = bannerLis[i].getAttribute("data-t");
      menus[i].className = "menu";
    }
  };
}
