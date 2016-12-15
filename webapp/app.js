import Vue from './lib/vue'
import store from './store'
import WeiboList from './com/WeiboList.vue'

new Vue({
    el: '#app',
    store,
    render: h => h(WeiboList)
});