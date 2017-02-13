import API from '../../api'
import router from '../../router'

export default {

    state: {
        timelines: []
    },

    getters: {
        timelines: state => state.timelines
    },

    mutations: {
        GET_TIMELINES (state, timelines) {
            state.timelines = timelines
        }
    },

    actions: {
        getTimelines({commit}) {
            API.getTimelines().then(res => {
                if (res.body.code == 1001) {
                    return router.push('entry')
                }
                commit('GET_TIMELINES', res.body.statuses)
            })
        }
    }
}