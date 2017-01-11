import Vue from './lib/vue'
import store from './store'
import router from './router'
import WeiboList from './com/WeiboList.vue'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(WeiboList)
});