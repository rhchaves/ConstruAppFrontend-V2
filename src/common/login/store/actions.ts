import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { LoginStateInterface } from './state';
import { createCookie, cookieIsValid, removeCookie } from '../../../common/boot/CookiesHandler';
import HttpClient from 'src/common/boot/HttpClient';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';

const cookieName = 'constru_app_token';

const actions: ActionTree<LoginStateInterface, StateInterface> = {

 async loginAccountAsync({ commit }, payload) {
    try {
      commit('LOADING', true);
      const loginData = await HttpClient.post('authorizations/login', payload);

      createCookie({
        name: cookieName,
        value: loginData.data.token,
        expiresIn: '1h',
      });
      const decodedToken = jwtDecode(loginData.data.token);
      localStorage.setItem('constru_app_user', JSON.stringify({
        user: decodedToken,
      }));

      commit('UPDATE_LOGIN_STATE', loginData.data.authenticated);
      commit('SET_LOGIN_DATA', decodedToken);
    } catch (error) {
      await this.dispatch('logoutAsync', this.getters.getLoginData);
      console.log('entrou no catch')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuário ou senha incorreto ' + error,
          showConfirmButton: true,
        });
    } finally {
      commit('LOADING', false);
    }
  },

  ////////////////////////////////////////////////////////

  async userIsLogged({ commit }) {
    try {
      commit('LOADING', true);
      if (cookieIsValid(cookieName)) {
        const user = localStorage.getItem('constru_app_user');
        commit('UPDATE_LOGIN_STATE', true);
        commit('SET_LOGIN_USER', user);
        return true;
      } else {
        await this.dispatch('logoutAsync', this.getters.getLoginData);
        return false;
      }
    } catch (error) {
      console.log('Erro ao consultar login do usuário', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

  async logoutAsync({ commit }, payload) {
    try {
      commit('LOADING', true);
      // const response = await HttpClient.post('/logout', payload);
      localStorage.removeItem('constru_app_user');
      removeCookie(cookieName);
      commit('UPDATE_LOGIN_STATE', false);
      // return response;
    } catch (error) {
      console.log('Erro realizar o logoutAsync', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

  async registerClientAsync({ commit }, payload) {
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
