const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    
    'react-hot-loader/patch',
    //activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    //bundle the client for webpack dev server
    //and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    //bundle the client for hot reloading
    //only- means to only hot reload for successful updates

    './src/index.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
      //activate hot reloading

      contentBase: './src',
      //match the output path

      publicPath: '/'
      //match the output publicPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', "stage-0"]
          }
        }
      },
      {
        test: /\.global\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css-loader?modules'
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js','.jsx', '.css']
  },
};