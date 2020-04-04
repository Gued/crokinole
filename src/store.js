import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({    
    state: {
      isConnected: false,
      socketMessage: ''
    },

    mutations: {
        SET_ISCONNECTED(state, payload) {
            state.isConnected = payload;
        },

        SET_SOCKETMESSAGE(state, payload) {
            state.socketMessage = payload;
        }
    },
  
    actions:{
      SOCKET_CONNECT(state) {
        state.isConnected = true;
      },
  
      SOCKET_DISCONNECT(state) {
        state.isConnected = false;
      },
  
      SOCKET_MESSAGECHANNEL(state, message) {
        state.commit('SET_SOCKETMESSAGE', message);
      }
    }
})