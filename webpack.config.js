const path = require('path');

module.exports = {
    entry: './2/src/index.js',
    output: {
        filename: 'bundle.js',
        path: 'bundle.js',
        path: path.resolve(__dirname, '2/dist')
    }
}