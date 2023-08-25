import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ProductStateInterface } from './state';
import axios, { AxiosResponse } from 'axios';
import HttpClient from 'src/common/boot/HttpClient';

const actions: ActionTree<ProductStateInterface, StateInterface> = {

  async listProductsAsync({ commit }) {
    try {
      commit('LOADING', true);
      const intQtdProducts = 25;
      const blnOrderDesc = true;
      const response = await HttpClient.get(`/products/sales ${intQtdProducts}?blnOrderDesc=${blnOrderDesc}`);
      // setTimeout(() => {
        commit('LIST_ALL_PRODUCTS', response.data);
      // }, 2000);
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
      // setTimeout(() => {
        commit('LIST_PRODUCTS_BY_CATEGORY', response.data);
      // }, 2000);
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
      // setTimeout(() => {
        commit('LIST_PRODUCTS_BY_NAME', response.data);
      // }, 2000);
    } catch (error) {
      console.log('Erro na requisição da lista', error);
    } finally {
      setTimeout(() => {
        commit('LOADING', false);
      }, 2000);
    }
  },
  ////////////////////////////////////////////////////////

  clearListProducts({ commit }) {
      commit('CLEAR_LIST_PRODUCTS');
  },
  ////////////////////////////////////////////////////////

  insertProductDetail ({ commit }, payload) {
    try {
      commit('LOADING', true);
      commit('INSERT_PRODUCT_DETAIL', payload);
    } catch (error) {
      console.error('Erro: ', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

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



};

export default actions;

