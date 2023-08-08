import { MutationTree } from 'vuex';
import { MainStateInterface } from './state';

const mutation: MutationTree<MainStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

  LIST_CEP(state, payload) {
    state.cep.push(payload);
  },

  LIST_PRODUCTS(state, payload) {
    state.products = [];
    state.products = payload;
  }

};

export default mutation;
