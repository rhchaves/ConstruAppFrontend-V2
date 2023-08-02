import { Module } from 'vuex';
import { StateInterface } from 'src/store/index';
import state, { MainStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const mainModule: Module<MainStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default mainModule;
