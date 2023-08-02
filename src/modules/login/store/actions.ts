import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { LoginStateInterface } from './state';
import HttpClient from 'src/boot/HttpClient';
import { LocalStorage } from 'quasar';
import Swal from 'sweetalert2';

const actions: ActionTree<LoginStateInterface, StateInterface> = {

  async login({ commit }, payload) {
    try {
      commit('LOADING', true);
      const loginData = await HttpClient.post('login', payload);
      LocalStorage.set('user', loginData.data.user);
      LocalStorage.set('construapp_user_token', loginData.data.token);
      commit('LOGIN_USER', loginData.data.user);
      commit('SETAR_TOKEN', loginData.data.token);
    } catch (error) {
      console.log('Erro de Login', error);

      if (error === 'Request failed with status code 403') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuário ou senha incorreto',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

  async logout({ commit }) {
    commit('LOADING', true);
    await commit('SET_LOGIN', false);
    commit('LOADING', false);
  },
  ////////////////////////////////////////////////////////

  async createAccountClient({ commit }, payload) {
    try {
      commit('LOADING', true);
      const response = await HttpClient.post('add-client', payload)
      commit('INSERT_NEW_CLIENT', response.data);
      return response;
    } catch (error) {
      console.log('Erro ao criar usuário', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

};

export default actions;
