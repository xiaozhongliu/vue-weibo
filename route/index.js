var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    // if(err){
    //     return next(err);
    // }

    res.render('index.html');
});

module.exports = router;