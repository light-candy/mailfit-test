const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(woff|woff2|png)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.scss', '.png', '.woff', '.woff2']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin( {
        template: path.resolve(__dirname, './src/index.html'),
      })
    ],
    devServer: {
       contentBase: path.resolve(__dirname, './dist'),
    },
    devtool: 'source-map',
};
