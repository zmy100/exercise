import "./zsjsdlx.css";
import axios from "axios";
import render from "./zsjsdlx.art";

// 调用接口
axios
  .get("../src/api/ajax-data/special_subject.json")
  .then(function (response) {
    document.querySelector("section.zsjsdlx").innerHTML = render(
      response.data.data
    );
  })
  .catch(function (error) {
    console.log(error);
  });
