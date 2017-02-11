import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import config from './config'

Vue.use(VueResource)

// ajax requests will send session cookie
Vue.http.options.credentials = true

// app config
window.config = config

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
    store
})