import "./hot-ads.css";
import axios from "axios";
import render from "./hot-ads.art";

// 调用接口
axios
  .get("../src/api/ajax-data/ad.json")
  .then(function (response) {
    document.querySelector("section.hot-ads").innerHTML = render({
      items: response.data.data,
    });
  })
  .catch(function (error) {
    console.log(error);
  });
