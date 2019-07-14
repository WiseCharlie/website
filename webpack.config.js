var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loaders: [
                    'url-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
}