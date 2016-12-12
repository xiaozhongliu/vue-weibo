let express = require('express');
let ejs = require('ejs-mate');
let compress = require('compression');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let RedisStore = require('connect-redis')(session);

let oauth = require('./midware/oauth');
let index = require('./route/index');
let others = require('./route/others');
let config = require('./config');
let build = require('./build/build');

let app = express();

app.set('views', './dist/view');
app.set('view engine', 'html');
app.engine('html', ejs);

app.use(compress());
app.use(express.static('./webapp'));
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

app.use(oauth.auth);
app.use(oauth.weiboOAuth);
app.use('/', index);
app.use('/others', others);

app.use((req, res, next) => {
    let err = new Error();
    err.message = 'Not Found: ' + req.url;
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.json({
        code: err.status || 500,
        msg: err.message
    });
});

app.listen(config.PORT, () => {
    build();
    console.log(`Webapp starts at http://localhost:${config.PORT}`);
});