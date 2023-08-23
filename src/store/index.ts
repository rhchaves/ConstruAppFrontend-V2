import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { Router } from 'vue-router'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

import accountModule from '../modules/client/account/store';
import administratorModule from '../modules/administrator/store';
import commonStoreModule from './commonStore';
import loginModule from '../common/login/store';
import productModule from '../modules/client/product/store';
import sellerModule from '../modules/seller/store';
import shoppingCartModule from '../modules/client/shopping-cart/store';
// import { ExampleStateInterface } from './module-example/state';

export interface StateInterface {
  account: typeof accountModule;
  administrator: typeof administratorModule;
  commonStore: typeof commonStoreModule;
  login: typeof loginModule;
  product: typeof productModule;
  seller: typeof sellerModule;
  shoppingCart: typeof shoppingCartModule;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

// Provide typings for `this.$router` inside Vuex stores
 declare module 'vuex' {
   export interface Store<S> {
     readonly $router: Router;
   }
 }

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      account: accountModule,
      administrator: administratorModule,
      commonStore: commonStoreModule,
      login: loginModule,
      product: productModule,
      seller: sellerModule,
      shoppingCart: shoppingCartModule,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}
