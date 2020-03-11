const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./lib/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({template: './dist/index.html'})
    ]
}