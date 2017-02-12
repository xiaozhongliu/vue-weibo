module.exports = {

    DEBUG: false,

    // app
    APP_DOMAIN: '118.178.186.122',
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