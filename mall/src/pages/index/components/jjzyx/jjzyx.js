import "./jjzyx.css";
import axios from "axios";
import render from "./jjzyx.art";

// 调用接口
axios
  .get("../src/api/ajax-data/self_guided_tour.json")
  .then(function (response) {
    document.querySelector("section.jjzyx").innerHTML = render(
      response.data.data
    );
  })
  .catch(function (error) {
    console.log(error);
  });
