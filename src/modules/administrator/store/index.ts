import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { AdministratorStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const administratorModule: Module<AdministratorStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default administratorModule;
