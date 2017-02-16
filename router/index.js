const router = require('express').Router();

adopt([
    './timeline',
    './emotion'
]);

function adopt(routes) {
    routes.forEach(item => {
        require(item)(router);
    });
}

module.exports = router;