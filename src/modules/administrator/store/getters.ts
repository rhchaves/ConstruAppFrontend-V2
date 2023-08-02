import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { AdministratorStateInterface } from './state';

const getters: GetterTree<AdministratorStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

};

export default getters;
