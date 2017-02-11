import Vue from 'vue'

export default {

    weiboAuth() {
        location.href = 'http://127.0.0.1:3100/weiboAuth'
    },

    getTimelines() {
        return Vue.http.get('http://127.0.0.1:3100/timeline')
    }
}