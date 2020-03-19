const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./lib/index.ts",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
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
    ],
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }
}