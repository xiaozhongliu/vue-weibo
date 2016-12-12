let weibo =require('weibo');

weibo.init('weibo', 'appkey', 'secret');

module.exports = {

    weiboOAuth: weibo.oauth({
        loginPath: '/login',
        logoutPath: '/logout',
        callbackPath: '/oauth/callback',
        blogtypeField: 'type',
        afterLogin: function (req, res, callback) {
            console.log(req.session.oauthUser && req.session.oauthUser.screen_name, 'login success');
            process.nextTick(callback);
        },
        beforeLogout: function (req, res, callback) {
            console.log(req.session.oauthUser && req.session.oauthUser.screen_name, 'loging out');
            process.nextTick(callback);
        }
    }),

    auth: function (req, res, next) {
        if (!req.session.oauthUser) {
            return res.send(`
                Login with <a href="/login?type=weibo">Weibo</a> |
                <a href="/login?type=tqq">QQ</a> |
                <a href="/login?type=github">Github</a>
            `);
        }
        next();
    }
};