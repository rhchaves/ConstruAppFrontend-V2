import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { MainStateInterface } from './state';
import axios, { AxiosResponse } from 'axios';
import HttpClient from 'src/common/boot/HttpClient';

const actions: ActionTree<MainStateInterface, StateInterface> = {

  async listCepAsync({ commit }, payload) {
    try {
      commit('LOADING', true);
      const response: AxiosResponse = await axios.get(`https://viacep.com.br/ws/${payload}/json`);
      commit('LIST_CEP', response.data);
      console.log(response);
      alert(response.data.logradouro); // atributo
    } catch (error) {
      console.error('Erro na busca do endereço', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

  async listProductsAsync({ commit }) {
    try {
      commit('LOADING', true);
      const intQtdProducts = 10;
      const blnOrderDesc = true;
      const response = await HttpClient.get(`/products/sales ${intQtdProducts}?blnOrderDesc=${blnOrderDesc}`);
      console.log('Listou os produtos', response.data);

      setTimeout(() => {
        commit('LIST_PRODUCTS', response.data);
      }, 2000);
    } catch (error) {
      console.log('Erro na requisição da lista', error);
    } finally {
      setTimeout(() => {
        commit('LOADING', false);
      }, 2000);
    }
  },
  ////////////////////////////////////////////////////////

  async listProductsByCategoryAsync({ commit }, payload) {
    try {
      commit('LOADING', true);
      const intQtdProducts = 10;
      const blnOrderDesc = true;
      const response = await HttpClient.get(`/products/category ${payload}?intQtdProducts=${intQtdProducts}&blnOrderDesc=${blnOrderDesc}`);
      console.log('Listou os produtos', response.data);

      setTimeout(() => {
        commit('LIST_PRODUCTS', response.data);
      }, 2000);
    } catch (error) {
      console.log('Erro na requisição da lista', error);
    } finally {
      setTimeout(() => {
        commit('LOADING', false);
      }, 2000);
    }
  },
  ////////////////////////////////////////////////////////

  async listProductsByNameAsync({ commit }, payload) {
    try {
      commit('LOADING', true);
      const intQtdProducts = 10;
      const blnOrderDesc = true;
      const response = await HttpClient.get(`/products/find?name=${payload}&intQtdProducts=${intQtdProducts}&blnOrderDesc=${blnOrderDesc}`);
      console.log('Listou os produtos', response.data);

      setTimeout(() => {
        commit('LIST_PRODUCTS', response.data);
      }, 2000);
    } catch (error) {
      console.log('Erro na requisição da lista', error);
    } finally {
      setTimeout(() => {
        commit('LOADING', false);
      }, 2000);
    }
  },
  ////////////////////////////////////////////////////////


};

export default actions;

