var express = require('express');
var ejs = require('ejs-mate');
var compress = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var index = require('./route/index');
var others = require('./route/others');
var config = require('./config');

var app = express();

app.set('views', './dist/view');
app.set('view engine', 'html');
app.engine('html', ejs);

app.use(compress());
app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
app.use(bodyParser.json());
app.use(cookieParser(config.SECRET));
app.use(session({
    secret: config.SECRET,
    store: new RedisStore({
        port: config.REDIS_PORT,
        host: config.REDIS_HOST
    }),
    // Forces the session to be saved back to the session store,
    // even if the session was never modified during the request.
    resave: true,
    saveUninitialized: true
}));

app.use('/', index);
app.use('/others', others);

app.use(function (req, res, next) {
    var err = new Error();
    err.message = 'Not Found: ' + req.url;
    err.status = 404;
    next(err);
});

app.use(function (err, req, res) {
    res.json({
        code: err.status || 500,
        msg: err.message
    });
});

app.listen(config.PORT, function () {
    console.log('Webapp listening at http://localhost:' + config.PORT);
});