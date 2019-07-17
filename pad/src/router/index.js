import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const loadComponent = componentName => resolve => {
  import(`../page/${componentName}/index.vue`)
    .then(component => resolve(component))
    .catch(() => {});
}

import App from '@/App';

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    { 
      path: '/login', 
      name: 'login',
      component: loadComponent('login') 
    },
    { 
      path: '/home', 
      name: 'home',
      component: loadComponent('home') 
    },
    {
      path: '/index', 
      name: 'index',
      component: loadComponent('index') 
    },
    {
      path: '/visitors', 
      name: 'visitors',
      component: loadComponent('visitors') 
    },
    {
      path: '/visitorDetails', 
      name: 'visitorDetails',
      component: loadComponent('visitorDetails') 
    },
    {
      path: '/', 
      redirect: {
        path: 'index'
      }
    }
  ]
});

export default router;