import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/ShoppingPage.vue"),
  },
  {
    path: "/detail",
    name: "detailproduct",
    component: () => import("@/views/DetailProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
