let config = {
    base: {
        ENV: 'prod'
    },
    dev: {
        //API_HOST: 'http://127.0.0.1:3100/'
        API_HOST: 'http://192.168.1.6:3100/'
    },
    prod: {
        API_HOST: 'http://api.weibo.flashbeep.cn/'
    }
};

export default config[config.base.ENV]
