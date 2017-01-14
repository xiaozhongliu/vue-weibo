module.exports = {

    // is debug mode
    DEBUG: true,

    // webapp port
    PORT: 3100,

    // redis
    REDIS_HOST: '127.0.0.1',
    REDIS_PORT: 6379,

    // secret for cookie and session
    SECRET: '^u-Dont-KNOW$',

    // common libs needed to move from bower folders
    COMMON_LIBS: [
        'vue/dist/vue.js',
        'vuex/dist/vuex.js',
        'vue-router/dist/vue-router.js',
    ],

    // weibo
    APP_KEY: '242299217',
    APP_SECRET: 'f87e10f774d412cfecf2a7c2e98d3c05',
};