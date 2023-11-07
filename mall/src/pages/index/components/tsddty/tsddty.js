import "./tsddty.css";
import axios from "axios";
import render from "./tsddty.art";

// 调用接口
axios
  .get("../src/api/ajax-data/local_exp.json")
  .then(function (response) {
    document.querySelector("section.tsddty").innerHTML = render({
      items: response.data.data,
    });
  })
  .catch(function (error) {
    console.log(error);
  });
