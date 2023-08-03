import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CommonStorageStateInterface } from './state';
import HttpClient from 'src/boot/HttpClient';

const actions: ActionTree<CommonStorageStateInterface, StateInterface> = {

  async listCategories({ commit }) {
    try {
      commit('LOADING', true);
      const response = await HttpClient.get(`/categories/name%2010?blnOrderDesc=true`);
      console.log('Listou as categorias', response.data);
      commit('LIST_CATEGORIES', response.data);
    } catch (error) {
      console.log('Erro na requisição das categorias', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////


};

export default actions;
