import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Layout/index"),
    children: [
      { path: "/", component: () => import("@/views/Home/index.vue") },
      {
        path: "/category/:id",
        component: () => import("@/views/Category/index.vue"),
      },
      {
        path: "/goods/:id",
        component: () => import("@/views/Goods/index.vue"),
      },
      {
        path: "/cart",
        component: () => import("@/views/Cart/index.vue"),
      },
      {
        path: "/checkout",
        component: () => import("@/views/Checkout/index.vue"),
      },
      {
        path: "/order",
        component: () => import("@/views/Order/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => {
    return { top: 0 };
  },
});

export default router;
