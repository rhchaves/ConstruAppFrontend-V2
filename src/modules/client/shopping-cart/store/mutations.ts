import { MutationTree } from 'vuex';
import { ShoppingCartStateInterface } from './state';

const mutation: MutationTree<ShoppingCartStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

  ADD_TO_CART(state, payload) {
    state.cart.push(payload);
  },

  EMPTY_CART(state) {
    state.cart = [];
  },

};

export default mutation;
