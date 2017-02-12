module.exports = {

    DEBUG: false,

    // app
    APP_DOMAIN: '127.0.0.1',
    APP_PORT: 3000,
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