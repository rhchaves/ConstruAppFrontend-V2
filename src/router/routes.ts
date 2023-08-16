import { RouteRecordRaw, NavigationGuardNext  } from 'vue-router';
import { isAuthenticated } from '../common/boot/auth';
import AdministratorRoute from '../modules/administrator/routes';
import ClientRoute from '../modules/client/routes';
import LoginRoute from '../common/login/routes';
import MainRoute from '../modules/main/routes';
import ProductRoute from '../modules/product/routes';
import SellerRoute from '../modules/seller/routes';
import ShoppingCartRoute from '../modules/shopping-cart/routes';

function accessGuard(allowedTypes: string[]): (to: any, from: any, next: NavigationGuardNext) => void {
  return (to, from, next) => {
    const user = isAuthenticated();
    if (user) {
      const userObject = JSON.parse(user);
      const userType = userObject?.user?.type_user || '';

      if (allowedTypes.includes(userType)) {
        next();
      } else {
        next({
          path: '/access-denied',
          query: { redirect: to.fullPath },
        });
      }
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath },
      });
    }
  };
}

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/',
    redirect: '/login',
    component: () => import ('layouts/LoginLayout.vue'),
    children: [
      ...LoginRoute,
    ],
  },
  {
    name: 'main',
    path: '/',
    redirect: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...ClientRoute,
      ...MainRoute,
      ...ProductRoute,
      ...ShoppingCartRoute,
    ],
    beforeEnter: accessGuard(['simple_client']),
  },
  {
    name: 'administrator',
    path: '/',
    redirect: '/administrator',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      ...AdministratorRoute,
    ],
    beforeEnter: accessGuard(['master_admin']),
  },
  {
    path: '/',
    name: 'seller',
    redirect: '/seller',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      ...SellerRoute,
    ],
    beforeEnter: accessGuard(['simple_seller']),
  },

  {
    path: '/access-denied',
    name: 'access-denied',
    component: () => import('layouts/AccessDenied.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    name: 'page-not-found',
    component: () => import('layouts/PageErrorNotFound.vue'),
  },
];

export default routes;
