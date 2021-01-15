/* eslint-disable no-undef */
const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
    mode: 'production',
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }
})