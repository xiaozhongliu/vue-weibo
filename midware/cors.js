const config = require('../config')();

module.exports = (req, res, next) => {

    let originUrl = config.APP_PORT == 80 ?
        `http://${config.APP_DOMAIN}` :
        `http://${config.APP_DOMAIN}:${config.APP_PORT}`;

    res.header('Access-Control-Allow-Origin', originUrl);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'token,ts');
    next()
};