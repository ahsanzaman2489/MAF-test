const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ['react-html-attrs']
                }
            }
        ]
    }
};
