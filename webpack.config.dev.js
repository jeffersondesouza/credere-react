const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const axios = require('axios');

const plugins = [];
const API_URL = JSON.stringify('http://localhost:3000');
const APP_USER_TOKEN_KEY_PARAM = 'userToken';

const FontelloPlugin = require("fontello-webpack-plugin")


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
  },
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});



plugins.push(HtmlWebpackPluginConfig)

// we defined API_URL as a env variable, so if the base url changes, we don't need to modify the api call in every file
plugins.push(new webpack.DefinePlugin({ API_URL }));
plugins.push(new webpack.DefinePlugin({ APP_USER_TOKEN_KEY_PARAM }));

plugins.push(
  new FontelloPlugin({
    config: require("./fontello.config.json"),
    fonts:[ "eot", "woff", "woff2", "ttf", "svg" ],
    name:"icons",
    output: {
      css: "[name].css",
      font: "font/[name].[ext]"
    },
    
  })
)


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'public/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },

      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
        , loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins
}
