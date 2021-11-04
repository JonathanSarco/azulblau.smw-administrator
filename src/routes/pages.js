export const pages = [
  {
    name: "Dashboard",
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "@/views/dashboard/Dashboard.vue"
      ),
  },
  {
    name: "NewPost",
    path: "/posts",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "@/views/new-post/NewPost.vue"
      ),
  },
];
