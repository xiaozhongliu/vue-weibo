let express = require('express');
let ejs = require('ejs-mate');
let compress = require('compression');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let RedisStore = require('connect-redis')(session);

let oauth = require('./midware/oauth');
let router = require('./router');
let config = require('./config');
let build = require('./build');

let app = express();
app.set('views', './');
app.set('view engine', 'html');
app.engine('html', ejs);

app.use(compress());
app.use(bodyParser.urlencoded({
    extended: true, limit: '1mb'
}));
app.use(bodyParser.json());
app.use(cookieParser(config.SECRET));
app.use(session({
    secret: config.SECRET,
    store: new RedisStore({
        port: config.REDIS_PORT,
        host: config.REDIS_HOST
    }),
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('./dist'));
app.use(oauth.weiboOAuth);

app.use(router);
app.use('/', (req, res) => {
    res.render('index.html');
});

app.use((req, res, next) => {
    let err = new Error(`Not Found: ${req.url}`);
    err.status = 404;
    next(err);
});
app.use(({status = 500, message}, req, res, next) => {
    res.json({code: status, msg: message});
});

app.listen(config.PORT, () => {
    console.log(`Webapp starts at http://localhost:${config.PORT}`);
});