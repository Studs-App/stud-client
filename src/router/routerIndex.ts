import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home
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
