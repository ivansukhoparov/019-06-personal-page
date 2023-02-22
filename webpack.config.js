const path = require('path')

module.exports = {
    entry: './src/js/main.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'main.js'
    }
}