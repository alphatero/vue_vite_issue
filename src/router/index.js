import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'chart',
        name: 'Chart',
        component: () => import('../views/Chart.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/correction',
    name: 'Correction',
    redirect: { name: 'CorrectionStep1' },
    component: () => import('../views/Correction.vue'),
    children: [
      {
        path: 'step1',
        name: 'CorrectionStep1',
        component: () => import('../components/Correction_1.vue'),
      },
      {
        path: 'step2',
        name: 'CorrectionStep2',
        component: () => import('../components/Correction_2.vue'),
      },
      {
        path: 'step3',
        name: 'CorrectionStep3',
        component: () => import('../components/Correction_3.vue'),
      },
      {
        path: 'step4',
        name: 'CorrectionStep4',
        component: () => import('../components/Correction_4.vue'),
      },
    ],
  },
  {
    path: '/parameter',
    name: 'Parameter',
    component: () => import('../views/Parameter.vue'),
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import('../views/Connection.vue'),
  },
  {
    path: '/system',
    name: 'System',
    component: () => import('../views/System.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});
