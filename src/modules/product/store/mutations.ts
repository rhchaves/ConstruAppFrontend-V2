import { MutationTree } from 'vuex';
import { ProductStateInterface } from './state';

const mutation: MutationTree<ProductStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

};

export default mutation;
