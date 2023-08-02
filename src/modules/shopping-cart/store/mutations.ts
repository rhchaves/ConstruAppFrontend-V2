import { MutationTree } from 'vuex';
import { ShoppingCartStateInterface } from './state';

const mutation: MutationTree<ShoppingCartStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

};

export default mutation;
