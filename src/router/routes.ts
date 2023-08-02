import { RouteRecordRaw } from 'vue-router';
import AdministratorRoute from '../modules/administrator/routes'
import ClientRoute from '../modules/client/routes'
import LoginRoute from '../modules/login/routes'
import MainRoute from '../modules/main/routes';
import ProductRoute from '../modules/product/routes'
import SellerRoute from '../modules/seller/routes'
import ShoppingCartRoute from '../modules/shopping-cart/routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/login/pages/LoginPage.vue') },
      ...AdministratorRoute,
      ...ClientRoute,
      ...LoginRoute,
      ...MainRoute,
      ...ProductRoute,
      ...SellerRoute,
      ...ShoppingCartRoute,

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
