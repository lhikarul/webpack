const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './2/src/index.js'
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
                    'css-loader', // 將多個 css 合併為一個 css
                    'sass-loader',
                    'postcss-loader' // web-kit, mozilla etc..
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: 'bundle.js',
        path: path.resolve(__dirname, '2/dist')
    }
}