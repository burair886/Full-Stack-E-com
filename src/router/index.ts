import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/landing.vue"),
      children: [{ path: "", component: () => import("@/pages/index.vue") }],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("@/pages/404.vue"),
    },
  ],
});

export default router;
