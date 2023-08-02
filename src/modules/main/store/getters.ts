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

  getListProducts(state) {
    return state.products;
  },

};

export default getters;
