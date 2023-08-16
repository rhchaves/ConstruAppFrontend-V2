import { MutationTree } from 'vuex';
import { MainStateInterface } from './state';

const mutation: MutationTree<MainStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

  LIST_CEP(state, payload) {
    state.cep.push(payload);
  },

  LIST_ALL_PRODUCTS(state, payload) {
    state.allProducts = [];
    state.allProducts = payload;
  },

  LIST_PRODUCTS_BY_CATEGORY(state, payload) {
    state.productsByCategory = [];
    state.productsByCategory = payload;
  },

  LIST_PRODUCTS_BY_NAME(state, payload) {
    state.productsByName = [];
    state.productsByName = payload;
  },

  CLEAR_LIST_PRODUCTS(state) {
    state.productsByCategory = [];
    state.productsByName = [];
  }

};

export default mutation;
