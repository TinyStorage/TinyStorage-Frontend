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
    meta: { isProtected: true, roles: ['Администратор'] },
  },
  {
    path: '/audit',
    name: 'audit',
    component: () => import(/* webpackChunkName: "audit" */ '@/modules/audit/ui/views/AuditView.vue'),
    meta: { isProtected: true, roles: ['Лаборант', 'Администратор'] },
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

router.beforeEach(async (to, from, next) => {
  await loadLayout(to);

  if (to.meta.isProtected) {
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
      const userRoles = keycloak.tokenParsed.realm_access.roles;
      const requiredRoles = to.meta.roles;
      const hasRole = requiredRoles.some((role) => userRoles.includes(role));
      if (hasRole) {
        next();
      } else {
        next({ name: 'error', params: { id: 403 } });
      }
    }
  } else {
    next();
  }
});

export default router;
