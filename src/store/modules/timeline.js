import API from '../../api'

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
                commit('GET_TIMELINES', res.body.statuses)
            })
        }
    }
}