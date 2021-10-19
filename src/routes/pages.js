export const pages = [
  {
    name: "Dashboard",
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "@/views/dashboard/Dashboard.vue"
      ),
  },
];
