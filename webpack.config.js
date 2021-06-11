const path = require('path');

module.exports = {
    entry: './Assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development'
}