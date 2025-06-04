const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api/students',
        createProxyMiddleware({
            target: 'http://localhost:5000/students', // 目标服务器地址
            changeOrigin: true, //控制服务器收到的请求头中的Host的值
        })
    );
    app.use(
        '/api/cars',
        createProxyMiddleware({
            target: 'http://localhost:5001/cars',
            changeOrigin: true,
        })
    );
};