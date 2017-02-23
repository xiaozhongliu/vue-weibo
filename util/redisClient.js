module.exports = (() => {

    let client;

    return function () {
        if (!client) {
            let config = require('../config')();
            client = require('redis').createClient({
                host: config.REDIS_HOST,
                port: config.REDIS_PORT,
                password: config.REDIS_PWD
            });
        }
        return client;
    }
})();