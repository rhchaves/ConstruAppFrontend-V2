import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { AccountPageStateInterface } from './state';

const getters: GetterTree<AccountPageStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

};

export default getters;
