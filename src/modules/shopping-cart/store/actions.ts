import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { ShoppingCartStateInterface } from './state';
import HttpClient from 'src/common/boot/HttpClient';

const actions: ActionTree<ShoppingCartStateInterface, StateInterface> = {

  addToCart({ commit, getters }, payload) {
    try {
      commit('LOADING', true);
      let cart = getters.getCartContents;

      const existingProduct = cart.find((item: any) => item.id === payload.id);

      if (existingProduct) {
        console.log('Alterar quantidade do carrinho');
        commit('UPDATE_QUANTITY', { id: payload.id, quantity: existingProduct.quantity + 1 });
      } else {
        console.log('Adicionado ao carrinho', payload);
        commit('ADD_TO_CART', payload);
      }

      cart = getters.getCartContents;

      console.log('Carrinho atualizado:', cart)

    } catch (error) {
      console.error('Erro: ', error);
    } finally {
      commit('LOADING', false);
    }
  },
  ////////////////////////////////////////////////////////

};

export default actions;

