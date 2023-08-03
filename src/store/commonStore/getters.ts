import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CommonStorageStateInterface } from './state';

const getters: GetterTree<CommonStorageStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },

  getCategories(state) {
    return state.categories;
  },
};

export default getters;
