const qs = require('querystring');
const request = require('request');

module.exports = router => {

    router.get('/', (req, res) => {
        if (!req.session.oauthUser) {
            res.redirect('/oauth?type=weibo');
        }
        res.json({code: 1, msg: 'auth succeeds'});
    });

    // http://127.0.0.1:3100/timelines
    router.get('/timelines', (req, res, next) => {

        let {
            type = 'public',
            count = 20,
            page = 1
        }=req.query;
        let access_token = req.session.oauthUser.access_token;

        let params = qs.stringify({access_token, count, page});
        let url = `https://api.weibo.com/2/statuses/${type}_timeline.json?${params}`;

        request.get(url).on('error', next).pipe(res);
    });
};