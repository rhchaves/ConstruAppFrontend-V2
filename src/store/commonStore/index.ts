import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { CommonStoreStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const commonStoreModule: Module<CommonStoreStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default commonStoreModule;
