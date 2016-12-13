module.exports = {
    entry: {
        app: './webapp/app.js',
        search: './webapp/store/index.js'
    },
    output: {
        filename: '[name].js',
        path: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'vue-loader'
            }
        ]
    }
};