import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { LoginStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const loginModule: Module<LoginStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default loginModule;
