const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './2/src/index.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: 'bundle.js',
        path: path.resolve(__dirname, '2/dist')
    }
}