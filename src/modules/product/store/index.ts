import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { ProductStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const productModule: Module<ProductStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default productModule;
