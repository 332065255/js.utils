var path=require('path')
module.exports={
    entry:path.resolve(__dirname, './src/index.js'),
    output:{
        path:path.resolve(__dirname,'./lib'),
        filename:'index.js',
        libraryTarget:'commonjs2',
    },
    module:{
        loaders:[
            { test: /\.js?$/, loaders: ['babel-loader']},
        ]
    }
}