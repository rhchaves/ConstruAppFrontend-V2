import { MutationTree } from 'vuex';
import { SellerPageStateInterface } from './state';

const mutation: MutationTree<SellerPageStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

};

export default mutation;
