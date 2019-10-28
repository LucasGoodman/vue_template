// vue.config.js
const path = require('path'); // 引入path模块（node）
const resolve = dir => path.join(__dirname, dir); // 将文件组成绝对路径

module.exports = {
    // 在htmlWebpackPlugin中增加环境变量，在index.html中使用
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].environment = process.env.NODE_ENV;
            return args;
        });
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'));
    },
    productionSourceMap: false,
    devServer: {
        port: 8091,
        open: true,
        proxy: {
            '/api-local': {
                target: 'http://demo.com',
                progress: false,
                pathRewrite: {
                    '^/api-local': '/'
                }
            }
        }
    },
    assetsDir: 'assets',
    publicPath: process.env.ENV_BASE_URL // 当使用基于 HTML5 history.pushState 的路由时不能使用相对路径
};
