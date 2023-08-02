import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { ClientPageStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const clientModule: Module<ClientPageStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default clientModule;
