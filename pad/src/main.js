import Vue from "vue";
import router from "./router/index";
import ElementUI from "element-ui";
import App from "./App";

import "lib-flexible";
import "./style";
Vue.use(ElementUI);
var app = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
