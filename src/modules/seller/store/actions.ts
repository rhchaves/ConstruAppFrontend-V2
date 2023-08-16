import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { SellerPageStateInterface } from './state';
import HttpClient from 'src/common/boot/HttpClient';

const actions: ActionTree<SellerPageStateInterface, StateInterface> = {

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

