import { RouteRecordRaw, NavigationGuardNext } from 'vue-router';
import { isAuthenticated } from '../common/boot/auth';
import AccountRoute from '../modules/client/account/routes';
import AdministratorRoute from '../modules/administrator/routes';
import LoginRoute from '../common/login/routes';
import ProductRoute from '../modules/client/product/routes';
import SellerRoute from '../modules/seller/routes';
import ShoppingCartRoute from '../modules/client/shopping-cart/routes';

function accessGuard(allowedTypes: string[]): (to: any, from: any, next: NavigationGuardNext) => void {
  return (to, from, next) => {
    const user = isAuthenticated();
    if (user) {
      const userObject = JSON.parse(user);
      const userType = userObject?.type_user || '';

      if (allowedTypes.includes(userType)) {
        next();
      } else {
        next({
          path: '/acesso-negado',
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
    name: 'cliente',
    path: '/',
    redirect: '/cliente',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...AccountRoute,
      ...ProductRoute,
      ...ShoppingCartRoute,
    ],
    beforeEnter: accessGuard(['simple_client']),
  },
  {
    name: 'administrador',
    path: '/',
    redirect: '/administrador',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      ...AdministratorRoute,
    ],
    beforeEnter: accessGuard(['master_admin']),
  },
  {
    path: '/',
    name: 'vendedor',
    redirect: '/vendedor',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      ...SellerRoute,
    ],
    beforeEnter: accessGuard(['simple_seller']),
  },

  {
    path: '/acesso-negado',
    name: 'acesso-negado',
    component: () => import('layouts/AccessDenied.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    name: 'pagina-nao-encontrada',
    component: () => import('layouts/PageErrorNotFound.vue'),
  },
];

export default routes;
