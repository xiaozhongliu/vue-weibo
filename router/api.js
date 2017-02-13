const qs = require('querystring');
const request = require('request');
const config = require('../config')();

const APP_REDIRECT_URL = `http://${config.APP_DOMAIN}:${config.APP_PORT}`;

module.exports = router => {


    router.get('/', (req, res, next) => {

        if (!req.session.oauthUser) {
            return res.redirect('/oauth?type=weibo')
        }
        next(MessageErr('AuthAlreadyDone'))
    });


    /**
     * http://127.0.0.1:3100/weiboAuth
     */
    router.get('/weiboAuth', (req, res, next) => {

        if (!req.session.oauthUser) {
            return res.redirect('/oauth?type=weibo')
        }
        res.redirect(APP_REDIRECT_URL)
    });


    /**
     * http://127.0.0.1:3100/timeline
     */
    router.get('/timeline', (req, res, next) => {

        if (!req.session.oauthUser) {
            return next(MessageErr('AuthFail'))
        }

        let {
            type = 'public',
            count = 20,
            page = 1
        }=req.query;
        let access_token = req.session.oauthUser.access_token;

        let params = qs.stringify({access_token, count, page});
        let url = `https://api.weibo.com/2/statuses/${type}_timeline.json?${params}`;

        request.get(url, (err, response, body) => {
            if (err) {
                return next(err)
            }
            res.json(JSON.parse(body))
        })
    })
};