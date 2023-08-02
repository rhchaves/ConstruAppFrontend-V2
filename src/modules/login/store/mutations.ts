import { MutationTree } from 'vuex';
import { LoginStateInterface } from './state';

const mutation: MutationTree<LoginStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },
  SET_LOGIN(state, payload) {
    state.logado = payload;
  },
  LOGIN_USER(state, payload) {
    state.user = payload;
  },
  SETAR_TOKEN(state, payload) {
    state.token = payload;
    state.logado = true;
  },
  INSERT_NEW_CLIENT(state, payload) {
    state.client = payload;
  },

};

export default mutation;
