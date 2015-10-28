var path    = require('path');

module.exports = {
    context : path.resolve('js'),
    entry   : ['./app'],
    output  : {
        path       : path.resolve('build/'),
        publicPath : '/public/assets/',
        filename   : 'bundle.js'
    },

    devServer : {
        contentBase : 'public'
    },

    watch  : true,
    module : {
        loaders : [
            {
                test    : /\.css$/,
                exclude : /node_modules/,
                loader  : 'style-loader!css-loader'
            }, {
                test    : /\.(png|jpg)$/,
                exclude : /node_modules/,
                loader  : 'url-loader?limit=10000'
            }
        ]
    },
    resolve : {
        extensions : ['', '.js', '.es6']
    }
};
