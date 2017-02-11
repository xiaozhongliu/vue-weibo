import Vue from 'vue'

export default {

    /**
     * directly redirect to weibo oauth page
     * @returns {*}
     */
    weiboAuth() {
        return REDIRECT('weiboAuth')
    },

    /**
     * get latest public timelines
     * @returns {*}
     */
    getTimelines() {
        return GET('timeline');
    }
}

function GET(url) {
    return Vue.http.get(config.API_HOST + url)
}

function REDIRECT(url) {
    location.href = config.API_HOST + url
}