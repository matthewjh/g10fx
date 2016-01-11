var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/main.tsx',
  output: {
    path: './built',
    filename: 'bundle.js'
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
      filename: 'index.html',
      template: './client/index.html',
      inject: 'body'
    })
  ]
}