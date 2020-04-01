import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {
        'SOCKET_<EVENT_NAME>'() {
            // do something
        }
    },
    actions: {
        'SOCKET_<EVENT_NAME>'() {
            // do something
        }
    }
})