var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/app.ts',
  output: {
    filename: './built/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'G10 FX Pairs',
      filename: './built/index.html'
    })
  ]
}