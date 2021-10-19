import { createRouter, createMemoryHistory } from "vue-router";
import { pages } from "./pages";

const routes = [
  {
    name: "Layout",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../layouts/Layout.vue"),
    children: [...pages],
  },
];

const router = createRouter({
  history: createMemoryHistory(""),
  routes,
});

export default router;
