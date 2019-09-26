import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const loadComponent = componentName => resolve => {
  import(`../page/${componentName}/index.vue`)
    .then(component => resolve(component))
    .catch(e => {
      console.log(e);
    });
};

import App from "@/App";

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: "/login",
      name: "login",
      component: loadComponent("login")
    },
    {
      path: "/home",
      name: "home",
      component: loadComponent("home")
    },
    {
      path: "/index",
      name: "index",
      component: loadComponent("index")
    },
    {
      path: "/visitors",
      name: "visitors",
      component: loadComponent("visitors")
    },
    {
      path: "/visitorDetails",
      name: "visitorDetails",
      component: loadComponent("visitorDetails")
    },
    {
      path: "/newAdd",
      name: "newAdd",
      component: loadComponent("newAdd")
    },
    {
      path: "/search",
      name: "search",
      component: loadComponent("search")
    },
    {
      path: "/followUpMain",
      name: "followUpMain",
      component: loadComponent("followUpMain")
    },
    {
      path: "/followUpContent",
      name: "followUpContent",
      component: loadComponent("followUpContent")
    },
    {
      path: "/newPatient",
      name: "newPatient",
      component: loadComponent("newPatient")
    },
    {
      path: "/patientMsg",
      name: "patientMsg",
      component: loadComponent("patientMsg")
    },
    {
      path: "/",
      redirect: {
        path: "index"
      }
    }
  ]
});

export default router;
