import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { LoginStateInterface } from './state';

const getters: GetterTree<LoginStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },
  getLogado(state) {
    return state.loginStatus;
  },
  getLoginData(state) {
    return state.loginData;
  },


};

export default getters;
