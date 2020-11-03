const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    runtimeCompiler : true,
    lintOnSave: true,
    publicPath: './',
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components',resolve('./src/components'))
            .set('views',resolve('./src/views'))
            .set('assets',resolve('./src/assets'))
            .set('network',resolve('./src/network'))
            .set('video',resolve('./public/video'))
            .set('image',resolve('./public/image'))
    },
    devServer: {
        proxy: {
            '/api': {    //将www.example.com映射为/apis
                target: 'http://10.222.137.122:8081',  // 接口域名
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': ''   //需要rewrite的,
                }
            }
        }
    },
}
