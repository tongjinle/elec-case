import Vue from "vue";
import router from "./router/index";
import ElementUI from "element-ui";
import App from "./App";
import Vant from "vant";
import "vant/lib/index.css";
import "element-ui/lib/theme-chalk/index.css";
import "lib-flexible";
import "./style";

Vue.use(ElementUI);
Vue.use(Vant);

var app = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
