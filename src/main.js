import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import config from './config'

Vue.use(MintUI)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require('./asset/img/loading.gif'),
    attempt: 1,
    listenEvents: ['scroll']
})
window.config = config

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...App
})