import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ProductStateInterface } from './state';

const getters: GetterTree<ProductStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
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
  getProductDetail(state) {
    return state.productDetail;
  },
  getLogado(state) {
    return state.logado;
  },
  getListCep(state) {
    return state.cep;
  },


};

export default getters;
