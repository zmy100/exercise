import "./ddwl.css";
import axios from "axios";
import render from "./ddwl.art";

// 调用接口
axios
  .get("../src/api/ajax-data/local_fun.json")
  .then(function (response) {
    document.querySelector("section.ddwl").innerHTML = render(
      response.data.data
    );
  })
  .catch(function (error) {
    console.log(error);
  });
