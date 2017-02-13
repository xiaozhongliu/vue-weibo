const config = require('../config')();
const IP_REG = /((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/;

module.exports = (req, res, next) => {

    // if is domain name and has no www.
    if (!IP_REG.test(config.APP_DOMAIN) && !config.APP_DOMAIN.includes('www')) {
        config.APP_DOMAIN = `www.${config.APP_DOMAIN}`
    }

    // if is default port
    let originUrl = config.APP_PORT == 80 ?
        `http://${config.APP_DOMAIN}` :
        `http://${config.APP_DOMAIN}:${config.APP_PORT}`;

    res.header('Access-Control-Allow-Origin', originUrl);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'token,ts');
    next()
};