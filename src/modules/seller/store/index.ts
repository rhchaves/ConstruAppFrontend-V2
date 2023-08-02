import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { SellerPageStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const sellerModule: Module<SellerPageStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default sellerModule;
