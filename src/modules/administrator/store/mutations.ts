import { MutationTree } from 'vuex';
import { AdministratorStateInterface } from './state';

const mutation: MutationTree<AdministratorStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

};

export default mutation;
