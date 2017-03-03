const config = require('../config')();

module.exports = (req, res, next) => {

    let clientHost = req.query.clientHost;

    //app is behind nginx in prod, so port is 80
    let originUrl = config.DEBUG ?
        `http://${clientHost}:${config.APP_PORT}` :
        `http://${clientHost}`;

    res.header('Access-Control-Allow-Origin', originUrl);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'token,ts');
    next()
};
