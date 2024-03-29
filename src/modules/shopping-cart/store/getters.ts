import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ShoppingCartStateInterface } from './state';

const getters: GetterTree<ShoppingCartStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

};

export default getters;
