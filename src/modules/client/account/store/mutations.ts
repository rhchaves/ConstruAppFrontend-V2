import { MutationTree } from 'vuex';
import { AccountPageStateInterface } from './state';

const mutation: MutationTree<AccountPageStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

};

export default mutation;
