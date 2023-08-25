import { MutationTree } from 'vuex';
import { LoginStateInterface } from './state';

const mutation: MutationTree<LoginStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },
  UPDATE_LOGIN_STATE(state, payload) {
    state.loginStatus = payload;
  },
  SET_LOGIN_DATA(state, payload) {
    state.loginData = payload;
  },


};

export default mutation;
