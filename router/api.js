module.exports = router => {

    router.get('/', (req, res) => {
        res.json({code: 1, msg: 'service is running'});
    });

    router.get('/api', (req, res, next) => {

        // if(err){
        //     return next(err);
        // }

        res.json({code: 1, msg: 'get called'});
    });
};