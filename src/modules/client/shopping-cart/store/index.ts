import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { ShoppingCartStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const shoppingCartModule: Module<ShoppingCartStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default shoppingCartModule;
