import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { CommonStorageStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const commonStorageModule: Module<CommonStorageStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default commonStorageModule;
