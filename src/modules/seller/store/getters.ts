import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { SellerPageStateInterface } from './state';

const getters: GetterTree<SellerPageStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

};

export default getters;
