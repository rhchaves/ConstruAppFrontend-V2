import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { AccountPageStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const accountModule: Module<AccountPageStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default accountModule;
