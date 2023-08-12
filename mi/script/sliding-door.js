window.addEventListener("load", function () {
  //模拟ajax数据
  var slideData = [
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-11",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-12",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-13",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-14",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-15",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-16",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-17",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-18",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-19",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-20",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-21",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png",
        title: "Xiaomi 11 青春版-22",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-11",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-12",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-13",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-14",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png",
        title: "智能电视X65 2022款-15",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png",
        title: "RedmiBook Pro 14-11",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg",
        title: "小米智能冰箱-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg",
        title: "小米智能冰箱-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg",
        title: "小米智能冰箱-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg",
        title: "小米智能冰箱-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg",
        title: "小米智能冰箱-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg",
        title: "小米智能冰箱-5",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-11",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-12",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-13",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-14",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-15",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-16",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-17",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-18",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-19",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-20",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-21",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-22",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png",
        title: "Redmi 手表 2-23",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-11",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-12",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-13",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-14",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-15",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-16",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png",
        title: "CyberDog-17",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png",
        title: "移动电源-11",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png",
        title: "米家跑步机-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png",
        title: "米家跑步机-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png",
        title: "米家跑步机-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png",
        title: "米家跑步机-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png",
        title: "米家跑步机-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png",
        title: "米家跑步机-5",
      },
    ],
    [
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-0",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-1",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-2",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-3",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-4",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-5",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-6",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-7",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-8",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-9",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-10",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-11",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-12",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-13",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-14",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-15",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-16",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-17",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-18",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-19",
      },
      {
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png",
        title: "Redmi Buds 3 青春版-20",
      },
    ],
    [
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-0",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-1",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-2",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-3",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-4",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-5",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-6",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-7",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-8",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-9",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-10",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-11",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-12",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-13",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-14",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-15",
      },
      {
        img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg",
        title: "双肩包-16",
      },
    ],
  ];
  //获取dom元素
  // 找对象
  var liArray = document.querySelectorAll("div.site-category>ul>li");
  //遍历数组
  for (var i = 0; i < liArray.length; i++) {
    //添加鼠标移入事件
    liArray[i].onmouseenter = function () {
      //获取li的索引，data-index,传入函数
      showData(this, this.dataset.index);
    };
  }
  // 定义函数，展示数据
  // 两个参数，第一个是当前的li，来确定往哪个面板里面扔数据
  // 第二个参数，索引，从二维数组里面获取需要的数据
  function showData(dom, index) {
    // 需要展示到页面的数据
    var currentData = slideData[index];
    // 需要接受数据的元素
    var sliderContainer = dom.querySelector("div.slider-container");
    // 定义变量，拼接数据
    var htmlString = "";
    // 拼接html代码
    // 计算列数，向上取整
    var columnNumber = Math.ceil(currentData.length / 6);
    // 设置类名
    sliderContainer.classList.add("col-" + columnNumber);
    // 循环嵌套
    // 定义一个自增变量，表示索引
    var currentDataIndex = 0;
    // 外层确定列数，里层确定行数
    for (var i = 0; i < columnNumber; i++) {
      var currentObj = currentData[currentDataIndex];
      htmlString += "<ul>";
      for (var j = 0; j < 6; j++) {
        if (currentObj) {
          htmlString += "<li>";
          htmlString += '<a href="javascript:;">';
          htmlString += '<img src="' + currentObj.img + '" alt=""/>';
          htmlString += "<span>" + currentObj.title + "</span>";
          htmlString += "</a>";
          htmlString += "</li>";
        }
        currentDataIndex++;
      }
      htmlString += "</ul>";
    }
    // 展示数据
    sliderContainer.innerHTML = htmlString;
  }
});
