import Vuex from 'vuex';
import Vue from 'vue';
import common from './common'
import auth from './auth'
import timeline from './timeline'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        auth,
        timeline
    }
})