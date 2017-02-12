import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'

// app config
window.config = config

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...App
})