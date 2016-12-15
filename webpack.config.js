let webpack = require('webpack');

module.exports = {
    entry: {
        app: './webapp/app.js'
    },
    output: {
        filename: '[name].js',
        path: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};