import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ClientPageStateInterface } from './state';

const getters: GetterTree<ClientPageStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

};

export default getters;
