const router = require('express').Router();

adopt([
    './api'
]);

function adopt(routes) {
    routes.forEach(item => {
        require(item)(router);
    });
}

module.exports = router;