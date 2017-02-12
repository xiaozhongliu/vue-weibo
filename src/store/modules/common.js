export default {

    state: {
        isMenuShow: false
    },

    getters: {
        isMenuShow: state => state.isMenuShow
    },

    mutations: {
        TOGGLE_MENU (state) {
            state.isMenuShow = !state.isMenuShow
        }
    },
}