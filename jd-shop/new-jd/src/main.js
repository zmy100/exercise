import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入normalize.css,重置浏览器默认样式
import "normalize.css";
// 引入自定义css,重置浏览器默认样式
import "./style/reset.css";
// 引入全局样式
import "./style/index.scss";
// 引入字体图标
import "./assets/fonts/iconfont.css";

createApp(App).use(store).use(router).mount("#app");
