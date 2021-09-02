import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: 'chart',
        name: 'Chart',
        component: () => import("../views/Chart.vue"),
      }
    ]
  },
  {
    path: "/correction",
    name: "Correction",
    meta: { requiresAuth: true },
    component: () => import("../views/Correction.vue"),
    children: [
      {
        path: 'step1',
        name: 'CorrectionStep1',
        alias: '/correction',
        meta: { requiresAuth: true },
        component: () => import("../components/Correction_1.vue")
      },
      {
        path: 'step2',
        name: 'CorrectionStep2',
        component: () => import("../components/Correction_2.vue")
      },
      {
        path: 'step3',
        name: 'CorrectionStep3',
        component: () => import("../components/Correction_3.vue")
      }
    ]
  },
  {
    path: '/parameter',
    name: 'Parameter',
    component: () => import("../views/Parameter.vue")
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import("../views/Connection.vue")
  },
  {
    path: '/system',
    name: 'System',
    component: () => import("../views/System.vue")
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import("../views/Info.vue")
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});