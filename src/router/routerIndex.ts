import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import { compile, component } from 'vue/types/umd';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/map",
        name: "Map",
        component: () =>
          import(/* webpackChunkName: "Map" */ "@/components/HomeMap.vue")
      },
      {
        path: "/list",
        name: "List",
        component: () =>
          import(/* webpackChunkName: "List" */ "../components/HomeList.vue") 
      }
    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue")
  },
  {
    path: "/post",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "CreatePost" */ "../views/CreatePost.vue")
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
