import { MutationTree } from 'vuex';
import { CommonStorageStateInterface } from './state';

const mutation: MutationTree<CommonStorageStateInterface> = {
  LOADING(state, payload) {
    state.loading = payload;
  },

  LIST_CATEGORIES(state, payload) {
    state.categories = [];
    state.categories.push(payload);
  }

};

export default mutation;
