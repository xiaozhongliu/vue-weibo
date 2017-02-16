const qs = require('querystring');
const request = require('request');
const config = require('../config')();

module.exports = router => {


    router.get('/emotion', (req, res, next) => {

        if (!req.session.oauthUser) {
            return next(MessageErr('AuthFail'))
        }

        let {
            type = 'face',
            language = 'cnname'
        }=req.query;
        let access_token = req.session.oauthUser.access_token;

        let params = qs.stringify({access_token, type, language});
        let url = `https://api.weibo.com/2/emotions.json?${params}`;

        request.get(url, (err, response, data) => {
            if (err) {
                return next(err)
            }
            res.json(JSON.parse(data))
        })
    })
};