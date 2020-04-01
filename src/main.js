// Libs.
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

// Local files.
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:8081'), //options object is Optional
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
