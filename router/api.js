const qs = require('querystring');
const request = require('request');
const config = require('../config')();

module.exports = router => {


    router.get('/', (req, res) => {

        if (!req.session.oauthUser) {
            return res.redirect('/oauth?type=weibo')
        }
        res.redirect(config.APP_REDIRECT_URL)
    });


    /**
     * http://127.0.0.1:3100/oauth?type=weibo
     */
    router.get('/weiboAuth', (req, res, next) => {

        let url = req.session.oauthUser ?
            config.APP_REDIRECT_URL :
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