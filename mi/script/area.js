window.addEventListener("load", function () {
  // 数据
  var areaData = [
    {
      areaName: "家电",
      data: {
        left: [
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca83e0294e7d725690b0576a1a4681e2.jpg",
          },
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca83e0294e7d725690b0576a1a4681e2.jpg",
          },
        ],
        right: [
          {
            areaName: "热门",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-0",
                desc: "小米电视6 65″OLED-0",
                price: "6990元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-1",
                desc: "小米电视6 65″OLED-1",
                price: "6991元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-2",
                desc: "小米电视6 65″OLED-2",
                price: "6992元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-3",
                desc: "小米电视6 65″OLED-3",
                price: "6993元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-4",
                desc: "小米电视6 65″OLED-4",
                price: "6994元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-5",
                desc: "小米电视6 65″OLED-5",
                price: "6995元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-6",
                desc: "小米电视6 65″OLED-6",
                price: "6996元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg",
                title: "小米电视6 65”  OLED-7",
                desc: "小米电视6 65″OLED-7",
                price: "6997元起",
              },
            ],
          },
          {
            areaName: "电视影音",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-0",
                desc: "大屏更享受-0",
                price: "3490元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-1",
                desc: "大屏更享受-1",
                price: "3491元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-2",
                desc: "大屏更享受-2",
                price: "3492元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-3",
                desc: "大屏更享受-3",
                price: "3493元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-4",
                desc: "大屏更享受-4",
                price: "3494元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-5",
                desc: "大屏更享受-5",
                price: "3495元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
                title: "小米电视4A 70英寸-6",
                desc: "大屏更享受-6",
                price: "3496元起",
              },
            ],
          },
        ],
      },
    },
    {
      areaName: "智能",
      data: {
        left: [
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png",
          },
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png",
          },
        ],
        right: [
          {
            areaName: "热门",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-0",
                desc: "是音箱也是床头时钟-0",
                price: "140元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-1",
                desc: "是音箱也是床头时钟-1",
                price: "141元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-2",
                desc: "是音箱也是床头时钟-2",
                price: "142元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-3",
                desc: "是音箱也是床头时钟-3",
                price: "143元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-4",
                desc: "是音箱也是床头时钟-4",
                price: "144元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-5",
                desc: "是音箱也是床头时钟-5",
                price: "145元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-6",
                desc: "是音箱也是床头时钟-6",
                price: "146元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg",
                title: "小米小爱音箱Play 增强版-7",
                desc: "是音箱也是床头时钟-7",
                price: "147元起",
              },
            ],
          },
          {
            areaName: "安防",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-0",
                desc: "经典门锁再进一步-0",
                price: "1290元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-1",
                desc: "经典门锁再进一步-1",
                price: "1291元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-2",
                desc: "经典门锁再进一步-2",
                price: "1292元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-3",
                desc: "经典门锁再进一步-3",
                price: "1293元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-4",
                desc: "经典门锁再进一步-4",
                price: "1294元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-5",
                desc: "经典门锁再进一步-5",
                price: "1295元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg",
                title: "小米智能门锁 1S-6",
                desc: "经典门锁再进一步-6",
                price: "1296元起",
              },
            ],
          },
          {
            areaName: "出行",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
                title: "米家电动滑板车1S-0",
                desc: "型出格，行出色-0",
                price: "2190元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
                title: "米家电动滑板车1S-1",
                desc: "型出格，行出色-1",
                price: "2191元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
                title: "米家电动滑板车1S-2",
                desc: "型出格，行出色-2",
                price: "2192元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
                title: "米家电动滑板车1S-3",
                desc: "型出格，行出色-3",
                price: "2193元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
                title: "米家电动滑板车1S-4",
                desc: "型出格，行出色-4",
                price: "2194元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
                title: "米家电动滑板车1S-5",
                desc: "型出格，行出色-5",
                price: "2195元起",
              },
            ],
          },
        ],
      },
    },
    {
      areaName: "搭配",
      data: {
        left: [
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecce1c0d981037e58cfa281a06122249.jpg",
          },
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecce1c0d981037e58cfa281a06122249.jpg",
          },
        ],
        right: [
          {
            areaName: "热门",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-0",
                desc: "米家运动心电T恤-0",
                price: "220元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-1",
                desc: "米家运动心电T恤-1",
                price: "221元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-2",
                desc: "米家运动心电T恤-2",
                price: "222元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-3",
                desc: "米家运动心电T恤-3",
                price: "223元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-4",
                desc: "米家运动心电T恤-4",
                price: "224元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-5",
                desc: "米家运动心电T恤-5",
                price: "225元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-6",
                desc: "米家运动心电T恤-6",
                price: "226元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8982fbbf8948ff75200ad1021d1f90b.jpg",
                title: "米家运动心电T恤-7",
                desc: "米家运动心电T恤-7",
                price: "227元起",
              },
            ],
          },
          {
            areaName: "耳机音箱",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-0",
                desc: "轻巧无线 持久动听-0",
                price: "90元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-1",
                desc: "轻巧无线 持久动听-1",
                price: "91元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-2",
                desc: "轻巧无线 持久动听-2",
                price: "92元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-3",
                desc: "轻巧无线 持久动听-3",
                price: "93元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-4",
                desc: "轻巧无线 持久动听-4",
                price: "94元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-5",
                desc: "轻巧无线 持久动听-5",
                price: "95元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg",
                title: "Redmi Buds 3 青春版-6",
                desc: "轻巧无线 持久动听-6",
                price: "96元起",
              },
            ],
          },
        ],
      },
    },
    {
      areaName: "配件",
      data: {
        left: [
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5769bd53177a9301113f799fdc8511d.jpg",
          },
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5769bd53177a9301113f799fdc8511d.jpg",
          },
        ],
        right: [
          {
            areaName: "热门",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-0",
                desc: "能量满满，无线有线都能充-0",
                price: "120元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-1",
                desc: "能量满满，无线有线都能充-1",
                price: "121元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-2",
                desc: "能量满满，无线有线都能充-2",
                price: "122元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-3",
                desc: "能量满满，无线有线都能充-3",
                price: "123元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-4",
                desc: "能量满满，无线有线都能充-4",
                price: "124元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-5",
                desc: "能量满满，无线有线都能充-5",
                price: "125元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-6",
                desc: "能量满满，无线有线都能充-6",
                price: "126元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
                title: "小米无线充电宝 10000mAh 10W-7",
                desc: "能量满满，无线有线都能充-7",
                price: "127元起",
              },
            ],
          },
          {
            areaName: "充电器",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-0",
                desc: "电动变形，自动锁紧充电-0",
                price: "160元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-1",
                desc: "电动变形，自动锁紧充电-1",
                price: "161元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-2",
                desc: "电动变形，自动锁紧充电-2",
                price: "162元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-3",
                desc: "电动变形，自动锁紧充电-3",
                price: "163元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-4",
                desc: "电动变形，自动锁紧充电-4",
                price: "164元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-5",
                desc: "电动变形，自动锁紧充电-5",
                price: "165元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45463351a35af1407381a173b3c9ef9.jpg",
                title: "小米无线车充-6",
                desc: "电动变形，自动锁紧充电-6",
                price: "166元起",
              },
            ],
          },
        ],
      },
    },
    {
      areaName: "周边",
      data: {
        left: [
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65950f83f429f2a05125bea297d8df6b.jpg",
          },
          {
            img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65950f83f429f2a05125bea297d8df6b.jpg",
          },
        ],
        right: [
          {
            areaName: "热门",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-0",
                desc: "扫拖除菌一步到位-0",
                price: "2290元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-1",
                desc: "扫拖除菌一步到位-1",
                price: "2291元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-2",
                desc: "扫拖除菌一步到位-2",
                price: "2292元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-3",
                desc: "扫拖除菌一步到位-3",
                price: "2293元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-4",
                desc: "扫拖除菌一步到位-4",
                price: "2294元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-5",
                desc: "扫拖除菌一步到位-5",
                price: "2295元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-6",
                desc: "扫拖除菌一步到位-6",
                price: "2296元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg",
                title: "米家扫拖机器人 2Pro-7",
                desc: "扫拖除菌一步到位-7",
                price: "2297元起",
              },
            ],
          },
          {
            areaName: "出行",
            data: [
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-0",
                desc: "燃动升级，随走随停-0",
                price: "2590元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-1",
                desc: "燃动升级，随走随停-1",
                price: "2591元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-2",
                desc: "燃动升级，随走随停-2",
                price: "2592元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-3",
                desc: "燃动升级，随走随停-3",
                price: "2593元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-4",
                desc: "燃动升级，随走随停-4",
                price: "2594元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-5",
                desc: "燃动升级，随走随停-5",
                price: "2595元起",
              },
              {
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg",
                title: "九号平衡车燃动版-6",
                desc: "燃动升级，随走随停-6",
                price: "2596元起",
              },
            ],
          },
        ],
      },
    },
  ];
  // 定义变量, 表示映射关系
  var areaMap = ["家电->jd", "智能->zn", "搭配->dp", "配件->pj", "周边->zb"];
  // 遍历数据，展示数据
  areaData.forEach((element) => {
    // 得到的是每个版本对应的数据对象
    // 调用函数，给box-title添加数据
    // 找到dom元素，通过类名来找
    var className = getClassNameByAreaName(element.areaName);
    var dom = this.document.querySelector("div.box-title." + className);
    showBoxTitleData(dom, [element.areaName, element.data.right]);
    // 调用函数，给area添加数据
    var dom1 = this.document.querySelector("div.area." + className);
    showAreaData(dom1, [element.data.left, element.data.right]);
  });
  /**
   * 拼接数据，展示到div.box-title里面
   * @param {obj} dom dom元素，指定是哪个div
   * @param {array} data 需要遍历拼接的数据
   */
  function showBoxTitleData(dom, data) {
    console.log(dom);
    // 定义空变量
    var htmlString = "";
    // 拼接html代码
    htmlString += `<div class="title fl"><h2> ${data[0]} </h2></div>`;
    htmlString += `<div class="remark flr">`;
    htmlString += `<ul>`;
    // for循环
    data[1].forEach((element, index) => {
      htmlString += `<li class="fl">`;
      htmlString += `<a data-index="${index}" onmouseenter="changeTab(this)" href="javascript:;" class="${
        index === 0 ? "highlight" : ""
      }" >${element.areaName}</a>`;
      htmlString += `</li>`;
    });
    htmlString += `</ul>`;
    htmlString += `</div>`;
    // 展示数据
    dom.innerHTML = htmlString;
  }
  /**
   * 拼接数据，展示到div.area里面
   * @param {obj} dom dom元素，指定是哪个div
   * @param {array} data 需要遍历拼接的数据
   */
  function showAreaData(dom, data) {
    // 定义空变量
    var htmlString = "";
    // 拼接html代码
    // 左侧区域
    htmlString += `<div class="sidebar fl transparent">`;
    htmlString += `<div class="sidebar-top move">`;
    htmlString += `<a href="javascript:;"><img src="${data[0][0].img}" alt="" /> </a>`;
    htmlString += `</div>`;
    htmlString += `<div class="sidebar-bottom move">`;
    htmlString += `<a href="javascript:;"> <img src="${data[0][1].img}" alt="" /> </a>`;
    htmlString += `</div>`;
    htmlString += `</div>`;
    // 右侧区域
    data[1].forEach((element, index) => {
      htmlString += `<div data-index="${index}" class="right-side ${
        index === 0 ? "right-side-show" : ""
      } flr">`;
      // 遍历右侧区域商品卡片
      // 因为有可能有8个数据, 但是最后一个数据是分上下的, 所以这里最多只遍历7个, 生成7张卡片
      element.data.slice(0, 7).forEach((value, key) => {
        htmlString += `<div class="mid fl move">`;
        htmlString += `<a href="javascript:;"><img src="${value.img}" alt="" />`;
        htmlString += `<h3>${value.title}</h3>`;
        htmlString += `<p>${value.desc}</p>`;
        htmlString += `<p>${value.price}</p>`;
        htmlString += `</a>`;
        htmlString += `</div>`;
      });
      // 最后一个
      htmlString += `<div class="mid fl transparent">`;
      // mid-top 需要的数据, 有可能有, 有可能没有, 需要判断一下
      if (element.data[7]) {
        htmlString += `<div class="mid-top move">`;
        htmlString += `<a href="javascript:;">`;
        htmlString += `<div class="mid-top-img">`;
        htmlString += `<img src="${element.data[7].img}" alt="" />`;
        htmlString += `</div>`;
        htmlString += `<h3 class="title">${element.data[7].title}</h3>`;
        htmlString += `<p class="price">${element.data[7].price}</p>`;
        htmlString += `</a>`;
        htmlString += `</div>`;
      }
      // mid-top区域
      htmlString += `<div class="mid-bottom move">`;
      htmlString += `<a href="javascript:;">`;
      htmlString += `<div class="iconfont icon-youjiantou"><span></span></div>`;
      htmlString += `<div class="more">`;
      htmlString += `浏览更多`;
      htmlString += `<small>${element.areaName}</small>`;
      htmlString += `</div>`;
      htmlString += `</a>`;
      htmlString += `</div>`;
      htmlString += `</div>`;
      htmlString += `</div>`;
    });
    // 展示数据
    dom.innerHTML = htmlString;
  }
  // 通过板块名称，获取对应的类名
  function getClassNameByAreaName(areaName) {
    // 定义一个空的变量，存放类名
    var className = "";
    // 遍历数组
    for (var i = 0; i < areaMap.length; i++) {
      // 判断类名是否在定义的areaMap中
      if (areaMap[i].indexOf(areaName) !== -1) {
        className = areaMap[i].split("->")[1];
        break;
      }
    }
    // 返回类名
    return className;
  }
  //   console.log(getClassNameByAreaName("智能"));
});
/**
 * 鼠标移入tab，显示当前tab对应的内容，隐藏其他的内容，当前tab高亮
 * @param {obj} dom 移入的dom元素
 */
function changeTab(dom) {
  // 熄灭所有tab
  // 通过当前dom，找到所有同级dom
  var tabArray = dom.parentNode.parentNode.querySelectorAll("a");
  // 遍历数组
  for (var i = 0; i < tabArray.length; i++) {
    // 熄灭所有tab
    tabArray[i].classList.remove("highlight");
  }
  // 高亮当前tab
  dom.classList.add("highlight");
  // 获取当前高亮tab的索引
  var currentIndex = dom.dataset.index;
  // 隐藏所有的内容
  var rightSideArray =
    dom.parentNode.parentNode.parentNode.parentNode.nextElementSibling.querySelectorAll(
      "div.right-side"
    );
  // 遍历数组
  for (var i = 0; i < rightSideArray.length; i++) {
    // 熄灭所有tab
    rightSideArray[i].classList.remove("right-side-show");
  }
  // 高亮当前tab对应的内容
  rightSideArray[currentIndex].classList.add("right-side-show");
}
