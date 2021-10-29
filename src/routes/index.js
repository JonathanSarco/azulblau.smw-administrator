import { createRouter, createMemoryHistory } from "vue-router";
import { pages } from "./pages";
import { routeGuard } from "../auth/index";

const routes = [
  {
    name: "Layout",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../layouts/Layout.vue"),
    children: [...pages],
    beforeEnter: routeGuard,
  },
  {
    name: "Login",
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../components/login/Login.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(""),
  routes,
});

export default router;
