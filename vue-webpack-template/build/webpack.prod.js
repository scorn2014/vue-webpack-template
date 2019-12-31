const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(webpackConfig,{
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({ //定义环境变量
          'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
          }),
          new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, '../public'),
              to: path.resolve(__dirname, '../dist')
            }
          ]),
          new CleanWebpackPlugin(),
          new BundleAnalyzerPlugin(
            {
               analyzerMode: 'static'
                 }
        )  
      ]
})