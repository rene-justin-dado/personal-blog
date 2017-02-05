const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'src', 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // Babel Loader
      {
        loader: 'babel-loader?cacheDirectory',
        test: /\.jsx?$/,
        exclude: 'node_modules'
      },
      // Sass Loader
      {
        loader: ExtractTextPlugin.extract('css-loader?sourceMap', 'sass-loader?sourceMap'),
        test: /\.scss$/
      }
    ]
  },
  sassLoader: {
    file: path.resolve(__dirname, 'src', 'public', 'styles', 'main.scss'),
    includePaths: [path.resolve(__dirname, 'src', 'public', 'styles')],
    outFile: path.resolve(__dirname, 'src', 'public', 'styles', 'main.css'),
    outputStyle: 'compressed'
  },
  // For outputting css file during bundling
  plugins: [
    new ExtractTextPlugin('public/styles/main.css', {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
