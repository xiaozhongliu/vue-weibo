import API from '../api'
import router from '../router'

export default {

    state: {
        timelineType: 'public',
        timelines: []
    },

    getters: {
        timelineType: state => state.timelineType == 'public' ? '公共微博' : '朋友微博',
        timelines: state => state.timelines
    },

    mutations: {
        GET_TIMELINE_TYPE(state, type){
            state.timelineType = type;
        },
        GET_TIMELINES (state, timelines) {
            state.timelines = timelines
        }
    },

    actions: {
        getTimelines({commit}, type = 'public') {
            API.getTimelines(type).then(res => {
                if (res.body.code == 1001) {
                    return router.push('/entry')
                }
                commit('GET_TIMELINE_TYPE', type);
                commit('GET_TIMELINES', res.body.statuses)
            })
        }
    }
}