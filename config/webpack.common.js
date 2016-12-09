var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    resolve: {
        alias: {
            materializecss: 'materialize-css/dist/css/materialize.css',
            materialize: 'materialize-css/dist/js/materialize.js'
        },
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.css/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                loader: 'file?name=assets/images/[name].[ext]'
            }, {
                test: /\.(json)$/,
                loader: 'file?name=assets/lang/[name].[ext]'
            }]
    },
    sassLoader: {
        includePaths: ['client/style']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Hammer: "hammerjs/hammer"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: helpers.root('src/assets/lang'),
                to: 'assets/lang'
            },
            {
                from: helpers.root('src/assets/images'),
                to: 'assets/images'
            }
        ])
    ]
};
;
