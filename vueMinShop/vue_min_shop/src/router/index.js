import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mit",
    component: () => import("../views/MintView/MintView.vue"),
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "首页",
        component: () => import("../views/HomeView/HomeView.vue"),
      },
      {
        path: "/search",
        name: "搜索",
        component: () => import("../views/SearchView/SearchView.vue"),
      },
      {
        path: "/order",
        name: "订单",
        component: () => import("../views/OrderView/OrderView.vue"),
      },
      {
        path: "/mine",
        name: "我的",
        component: () => import("../views/MineView/MineView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../views/LoginView/LoginView.vue"),
  },
  {
    path: "/food",
    name: "餐品",
    component: () => import("../views/FoodView/food.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/NotView/NotView.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
