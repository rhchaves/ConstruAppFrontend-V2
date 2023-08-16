import { MutationTree } from 'vuex';
import { ProductStateInterface } from './state';

const mutation: MutationTree<ProductStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

  INSERT_PRODUCT_PAGE(state, payload) {
    state.product = payload;
  },

};

export default mutation;
