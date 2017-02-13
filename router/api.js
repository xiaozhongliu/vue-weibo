const qs = require('querystring');
const request = require('request');
const config = require('../config')();

const APP_REDIRECT_URL = `http://${config.APP_DOMAIN}:${config.APP_PORT}/#/public_timeline`;

module.exports = router => {


    router.get('/', (req, res) => {

        if (!req.session.oauthUser) {
            return res.redirect('/oauth?type=weibo')
        }
        res.redirect(APP_REDIRECT_URL)
    });


    /**
     * http://127.0.0.1:3100/weiboAuth
     */
    router.get('/weiboAuth', (req, res) => {

        let url = req.session.oauthUser ?
            APP_REDIRECT_URL :
            '/oauth?type=weibo';
        res.redirect(url)
    });


    /**
     * http://127.0.0.1:3100/timeline
     */
    router.get('/timeline', (req, res, next) => {

        let {
            type = 'public',
            count = 20,
            page = 1
        }=req.query;
        let access_token = req.session.oauthUser.access_token;

        let params = qs.stringify({access_token, count, page});
        let url = `https://api.weibo.com/2/statuses/${type}_timeline.json?${params}`;

        request.get(url).on('error', next).pipe(res)
    })
};