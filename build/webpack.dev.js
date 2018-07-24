const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        app: path.join(__dirname, '../client/index.js')
    },
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, '../dist'),
        publicPath: "/public/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.join(__dirname, '../node_modules')
            },
            {
                test: /\.scss$/,
                // exclude:/node_modules[\\\/]/,
                use:  [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" , // 将 CSS 转化成 CommonJS 模块
                    options: {
                        modules:true
                    }
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }],
            },
            {
                test: /\.css$/,
                // include: /node_modules[\\\/]/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules:false
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale/,
            /(en|zh-cn)\.js/
        ),
    ],
    devServer: {
        port: 7000,
        contentBase: path.join(__dirname, '../dist'),
        inline: true,
        publicPath: "/public/",
        historyApiFallback:{
            index: '/public/index.html'
        },
    }
};
