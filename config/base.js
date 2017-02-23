module.exports = {

    NODE_ENV: 'prod',

    //redis hashset key
    REDIS_SET_KEY: 'user',

    //security
    REQUEST_TOKEN: 'b98891420f3b284cabb6777322da82ec',
    HASH_SECRET: '!h@sh~$ECRET',
    //secret for cookie and session
    SECRET: '^u-Dont-KNOW$',

    //log
    API_LOG_PATH: `${__dirname}/../log/`,
    TASK_LOG_PATH: `${__dirname}/../log/task/`,

    //no auth files or paths
    NO_AUTH_REG: /\.log$|\.ico$/,
    NO_AUTH_PATHS: [
        '/'
    ],

    //apply http auth on log
    HTTP_AUTH: {
        username: 'admin',
        password: 'admin',
        itemsReg: /\.log$/,
    },

    // weibo
    APP_KEY: '242299217',
    APP_SECRET: 'f87e10f774d412cfecf2a7c2e98d3c05',
};