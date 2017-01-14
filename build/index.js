let fs = require('fs');
let config = require('../config');
let webpack = require('webpack');
let webpackConfig = require('../webpack.config');

/**
 * copy min libs to webapp/lib/ folder
 */
let bowerFolder = 'bower_components/';
let targetFolder = 'webapp/lib/';

if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
}

config.COMMON_LIBS.forEach(file => {
    let fileName = file.substr(file.lastIndexOf('/') + 1);
    fs.writeFileSync(
        targetFolder + fileName,
        fs.readFileSync(bowerFolder + file)
    );
});

/**
 * pack all vue stuffs to dist folder
 */
webpack(webpackConfig, (err) => {
    console.log(err || 'Got packed by webpack');
});