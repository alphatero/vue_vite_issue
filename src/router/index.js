import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "chart",
        name: "Chart",
        component: () => import("../views/Chart.vue"),
        meta: {
          active: '/'
        }
      }
    ]
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});