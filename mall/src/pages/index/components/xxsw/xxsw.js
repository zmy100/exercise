import "./xxsw.css";
import axios from "axios";
import render from "./xxsw.art";

// 调用接口
axios
  .get("../src/api/ajax-data/seckill.json")
  .then(function (response) {
    document.querySelector("section.xxsw").innerHTML = render({
      items: response.data.data,
    });
  })
  .catch(function (error) {
    console.log(error);
  });
