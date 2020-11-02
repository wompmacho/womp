// Packages
const webpack = require('webpack'),
      path = require('path');

// Webpack Plugins
const CopyPlugin = require('copy-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Paths
const srcPath = path.join(__dirname, 'src'),
      distPath = path.join(__dirname, 'build'),
      node_modulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  mode: 'production',

  resolve: {
    alias: {
      src: srcPath
    }
  },
  context: srcPath,
  entry: {
    content: './content/',
    background: './background/',
    options: './options.js',
    welcomePage: './welcomePage.js'
  },
  output: {
    path: distPath,
    filename: './[name].js'
  },

  module: {
    rules: [
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'], exclude: /node_modules/ }
    ]
  },

  plugins: [
    new CopyPlugin([
      'manifest.json',
      'html/**/*',
      'assets/**/*',
    ], {
      ignore: [
        '**/*.psd'
      ]
    }),

    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          beautify: false,
          comments: false
        }
      }
    })
  ],

  devtool: '#inline-cheap-source-map'
};
