import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ClientPageStateInterface } from './state';
import HttpClient from 'src/boot/HttpClient';

const actions: ActionTree<ClientPageStateInterface, StateInterface> = {

  async funcaoExemplo({ commit }) {
    try {
      commit('LOADING', true);

    } catch (error) {
      console.error('Erro: ', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////


};

export default actions;

