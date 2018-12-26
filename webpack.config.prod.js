const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babiliPlugin = require('babili-webpack-plugin');

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
const CommonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' });


plugins.push(HtmlWebpackPluginConfig)
plugins.push(new webpack.DefinePlugin({ API_URL }));
plugins.push(new webpack.DefinePlugin({APP_USER_TOKEN_KEY_PARAM}));


plugins.push(new babiliPlugin());
plugins.push(CommonChunksPlugin);



module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/index.js',
  },
  output: {
    filename: 'public/[name].js',
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
    ]
  },
  plugins
}
