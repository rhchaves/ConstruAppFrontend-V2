import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { LoginStateInterface } from './state';

const getters: GetterTree<LoginStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

  getLogado(state) {
    return state.logado;
  },

  getUser(state) {
    return state.user;
  },

};

export default getters;
