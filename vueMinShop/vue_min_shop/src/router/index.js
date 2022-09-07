import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView/LoginView"),
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/MineView/MineView"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
