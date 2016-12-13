import Vue from 'vue'
import store from './store'
import WeiboList from './com/WeiboList.vue'

new Vue({
    el: '#app',
    store,
    render: h => h(WeiboList)
});