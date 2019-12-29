const path = require('path')

module.exports = {
    mode: 'production',
    entry: '../src/main.js',
    output: {
      path: path.resolve(__dirname,'../dist'),
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[hash:8].js',
      publicPath:'./'
    }
  };