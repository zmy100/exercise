import "./gtbzzy.css";
import axios from "axios";
import render from "./gtbzzy.art";

// 调用接口
axios
  .get("../src/api/ajax-data/group_tour.json")
  .then(function (response) {
    document.querySelector("section.gtbzzy").innerHTML = render(
      response.data.data
    );
  })
  .catch(function (error) {
    console.log(error);
  });
