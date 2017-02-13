import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/entry',
            component: resolve => require(['./com/Entry.vue'], resolve)
        },
        {
            path: '/main',
            component: resolve => require(['./com/Main.vue'], resolve),
            children: [
                {
                    path: '/timeline/:type',
                    component: resolve => require(['./com/Timeline.vue'], resolve)
                }
            ]
        },
        {
            path: '*',
            redirect: '/timeline/public'
        }
    ]
})