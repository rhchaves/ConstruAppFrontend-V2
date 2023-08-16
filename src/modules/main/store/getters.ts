import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { MainStateInterface } from './state';

const getters: GetterTree<MainStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

  getLogado(state) {
    return state.logado;
  },

  getListCep(state) {
    return state.cep;
  },

  getListAllProducts(state) {
    return state.allProducts;
  },

  getListProductsByCategory(state) {
    return state.productsByCategory;
  },

  getListProductsByName(state) {
    return state.productsByName;
  },

};

export default getters;
