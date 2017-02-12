import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import config from './config'

Vue.use(MintUI)
window.config = config

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...App
})