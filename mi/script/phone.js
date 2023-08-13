window.addEventListener("load", function () {
  // 数据
  var phoneData = {
    sidebar: [
      {
        img: "https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202201022238874.jpg",
      },
    ],
    rightSide: [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d4b362431de4bdda03315ffdbc7b32a.jpg",
        title: "Xiaomi 11 青春活力版-0",
        desc: "轻薄5G，内外皆出彩-0",
        price: "1990元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg",
        title: "Xiaomi 11 青春活力版-1",
        desc: "轻薄5G，内外皆出彩-1",
        price: "1991元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50da95e9e4496dcac8704da2deb94f6e.jpg",
        title: "Xiaomi 11 青春活力版-2",
        desc: "轻薄5G，内外皆出彩-2",
        price: "1992元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c001ebc4aee69bc9ff6fae9ecf9137d0.jpg",
        title: "Xiaomi 11 青春活力版-3",
        desc: "轻薄5G，内外皆出彩-3",
        price: "1993元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3490cfc52dc7c9abf9badfa1dc2d0eae.png",
        title: "Xiaomi 11 青春活力版-4",
        desc: "轻薄5G，内外皆出彩-4",
        price: "1994元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7290b681343512c60e3a845379f3335f.jpg",
        title: "Xiaomi 11 青春活力版-5",
        desc: "轻薄5G，内外皆出彩-5",
        price: "1995元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5c752522100ecd364cc53752bb660bc.jpg",
        title: "Xiaomi 11 青春活力版-6",
        desc: "轻薄5G，内外皆出彩-6",
        price: "1996元起",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab07e0fcbec3beb8b0f409db8bee8da4.jpg",
        title: "Xiaomi 11 青春活力版-7",
        desc: "轻薄5G，内外皆出彩-7",
        price: "1997元起",
      },
    ],
  };
  // 展示数据
  // 1.找到dom元素
  // 2.拼接html代码
  // 3.dom.innerHTML=拼接的html代码

  // 找dom元素，找到手机板块
  var phoneArea = this.document.querySelector("div.phone-area");
  // 拼数据
  var htmlString = "";
  // 拼左边的代码
  htmlString += `<div class="sidebar fl move">`;
  htmlString += `<a href="javascript:;">`;
  htmlString += `<img src="${phoneData.sidebar[0].img}" alt="" />`;
  htmlString += `</a>`;
  htmlString += `</div>`;
  // 拼右边的代码
  htmlString += `<div class="right-side flr">`;
  // for循环
  phoneData.rightSide.forEach((element) => {
    htmlString += `<div class="mid fl move">`;
    htmlString += `<a href="javascript:;">`;
    htmlString += `<img src="${element.img}" alt="" />`;
    htmlString += `<h3>${element.title}</h3>`;
    htmlString += `<p>${element.desc}</p>`;
    htmlString += `<p>${element.price}</p>`;
    htmlString += `</a>`;
    htmlString += `</div>`;
  });
  htmlString += `</div>`;
  // 赋值innerHTML=htmlString
  phoneArea.innerHTML = htmlString;
});
