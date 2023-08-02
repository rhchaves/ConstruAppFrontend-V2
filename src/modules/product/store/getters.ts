import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ProductStateInterface } from './state';

const getters: GetterTree<ProductStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

};

export default getters;
