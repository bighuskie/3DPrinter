// vue.config.js

const webpack = require("webpack");

module.exports = {
    publicPath: '/',
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        hot: true,
        host: 'locahost',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        proxy: {
            //配置跨域
            '/api': {
                target: "http://192.168.1.243:7001",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        before: app => {}
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // proxyTable: {
    //   '/api': {
    //     target: 'http://localhost:3000/',
    //     changeOrigin: true,    
    //     pathRewrite: {
    //       '^/api': '/'        
    //     }
    //   }
    // }
}