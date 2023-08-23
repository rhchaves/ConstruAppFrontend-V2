import { MutationTree } from 'vuex';
import { ProductStateInterface } from './state';

const mutation: MutationTree<ProductStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
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
    state.productDetail = {};
  },
  INSERT_PRODUCT_DETAIL(state, payload) {
    state.productDetail = payload;
  },
  LIST_CEP(state, payload) {
    state.cep.push(payload);
  },


};

export default mutation;
