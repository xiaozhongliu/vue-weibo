module.exports = {
    apps: [{
        name: "weibo-app",
        script: "./app.js",
        exec_mode: 'cluster'
    }, {
        name: "weibo-api",
        script: "./api.js",
        exec_mode: 'cluster'
    }]
}