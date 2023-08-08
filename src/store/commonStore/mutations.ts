import { MutationTree } from 'vuex';
import { CommonStoreStateInterface } from './state';

const mutation: MutationTree<CommonStoreStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

  LIST_CATEGORIES(state, payload) {
    state.categories = payload;
  }

};

export default mutation;
