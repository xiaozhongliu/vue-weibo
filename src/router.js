import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'entry',
            path: '/entry',
            component: resolve => require(['./com/Entry.vue'], resolve)
        },
        {
            path: '/main',
            component: resolve => require(['./com/Main.vue'], resolve),
            children: [
                {
                    path: '/public_timeline',
                    component: resolve => require(['./com/Timeline.vue'], resolve)
                },
                {
                    path: '/friends_timeline',
                    component: resolve => require(['./com/Timeline.vue'], resolve)
                }
            ]
        },
        {
            path: '*',
            redirect: '/public_timeline'
        }
    ]
})