import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import HomeMap from "@/components/HomeMap.vue";
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
        component: HomeMap
      },
      {
        path: "/list",
        name: "List",
        component: () =>
          import(/* webpackChunkName: "List" */ "@/components/HomeList.vue")
      }
    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/post",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "CreatePost" */ "../views/CreatePost.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
