let express = require('express');
let compress = require('compression');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let RedisStore = require('connect-redis')(session);

let {oauth} = require('./midware');
let router = require('./router');
let config = require('./config');

let app = express();
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
app.use(oauth);
app.use(router);

app.use((req, res, next) => {
    let err = new Error(`API Not Found: ${req.url}`);
    err.status = 404;
    next(err);
});
app.use(({status = 500, message}, req, res, next) => {
    res.json({code: status, msg: message});
});

app.listen(config.API_PORT, () => {
    console.log(`API service starts at http://localhost:${config.API_PORT}`);
});