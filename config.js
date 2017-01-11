module.exports = {
    // is debug mode
    DEBUG: true,

    // webapp port
    PORT: 3000,

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
    ]
};