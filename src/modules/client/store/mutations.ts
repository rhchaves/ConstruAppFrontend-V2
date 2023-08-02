import { MutationTree } from 'vuex';
import { ClientPageStateInterface } from './state';

const mutation: MutationTree<ClientPageStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

};

export default mutation;
