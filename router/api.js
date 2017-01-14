module.exports = router => {

    router.get('/api', (req, res, next) => {

        // if(err){
        //     return next(err);
        // }

        res.send('api result');
    });
};