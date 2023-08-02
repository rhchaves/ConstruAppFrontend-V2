import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { Router } from 'vue-router'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

import administratorModule from 'src/modules/administrator/store';
import ClientModule from 'src/modules/client/store';
import loginModule from 'src/modules/login/store';
import mainModule from 'src/modules/main/store';
import productModule from 'src/modules/product/store';
import sellerModule from 'src/modules/seller/store';
import shoppingCartModule from 'src/modules/shopping-cart/store';
// import { ExampleStateInterface } from './module-example/state';

export interface StateInterface {
  administrator: typeof administratorModule;
  client: typeof ClientModule;
  login: typeof loginModule;
  main: typeof mainModule;
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
      administrator: administratorModule,
      client: ClientModule,
      login: loginModule,
      main: mainModule,
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
