const config = require('../config')();

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', `http://${config.APP_DOMAIN}:${config.APP_PORT}`);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'token,ts');
    next();
};