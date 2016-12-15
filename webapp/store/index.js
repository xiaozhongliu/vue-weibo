import Vue from '../lib/vue'
import Vuex from '../lib/vuex'
import state from './state'
import getters from'./getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters
})