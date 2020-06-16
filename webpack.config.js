const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成對應的 html
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './2/src/index.js'
    },
    devServer: {
        contentBase: './2/dist',
        open: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 204800
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 將唯一的 css 掛載至頁面 
                    {
                        loader: 'css-loader', // 將多個 css 合併為一個 css
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader' // web-kit, mozilla etc..
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: '2/src/index.html'
    }), new CleanWebpackPlugin()],
    output: {
        publicPath: '/',
        filename: 'index.js',
        path: path.resolve(__dirname, '2/dist')
    }
}