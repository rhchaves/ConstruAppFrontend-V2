import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CommonStoreStateInterface } from './state';

const getters: GetterTree<CommonStoreStateInterface, StateInterface> = {
  getLoading(state) {
    return state.loading;
  },
  getListCategories(state) {
    return state.categories;
  },
};

export default getters;
