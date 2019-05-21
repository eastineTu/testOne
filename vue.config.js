
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-pxtorem')({//这里是配置项，详见官方文档
                    rootValue : 75, // 换算的基数
                    propList   : ['*'],
                }),
            ]
        }
    }
},
}