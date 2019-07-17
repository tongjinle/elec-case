

import Vue from 'vue';
import router from './router/index';

import App from './App';

import 'lib-flexible'
import './style';

var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
