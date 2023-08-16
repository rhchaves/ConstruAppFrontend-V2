import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ProductStateInterface } from './state';
import HttpClient from 'src/common/boot/HttpClient';

const actions: ActionTree<ProductStateInterface, StateInterface> = {

  insertProductPage ({ commit }, payload) {
    try {
      commit('LOADING', true);
      commit('INSERT_PRODUCT_PAGE', payload);
    } catch (error) {
      console.error('Erro: ', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////


};

export default actions;

