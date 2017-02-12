module.exports = {

    DEBUG: false,

    // app
    APP_DOMAIN: 'flashbeep.cn',
    APP_PORT: 80,
    APP_REDIRECT_URL: `http://${this.APP_DOMAIN}:${this.APP_PORT}/#/public_timeline`,

    // api port
    API_PORT: 3100,

    MYSQL: {
        host: '',
        name: '',
        user: '',
        pwd: '',
    },
};