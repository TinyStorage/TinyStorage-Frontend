import Vue from 'vue';
import VueRouter from 'vue-router';
import loadLayout from '@/core/middleware/layout-middleware';
import keycloak from '@/keycloak';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: {
      name: 'audit',
    },
  },
  {
    path: '/storage',
    name: 'storage',
    component: () => import(/* webpackChunkName: "storage" */ '@/modules/storage/ui/views/StorageView.vue'),
  },
  {
    path: '/audit',
    name: 'audit',
    component: () => import(/* webpackChunkName: "audit" */ '@/modules/audit/ui/views/AuditView.vue'),
  },
  {
    path: '/error/:id',
    name: 'error',
    component: () => import('@/share/errors/ui/views/ErrorPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
