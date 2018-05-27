const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: [
                    'json-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                quality: '65-90',
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.html$/,
                loaders: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        FailPlugin,
        new HtmlWebpackPlugin({
            template: conf.path.src('index.html')
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => [autoprefixer]
            },
            debug: true
        })
    ],
    devtool: 'source-map',
    output: {
        path: path.join(process.cwd(), conf.paths.tmp),
        filename: 'index.js'
    },
    entry: `./${conf.path.src('index')}`
};
