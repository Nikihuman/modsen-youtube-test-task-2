/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: pathData => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      return `${filepath}/[name][ext]`;
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    modules: ['node_modules', __dirname],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@assets': path.resolve(`${__dirname}/src/assets`),
      '@components': path.resolve(`${__dirname}/src/components`),
      '@constants': path.resolve(`${__dirname}/src/constants`),
      '@pages': path.resolve(`${__dirname}/src/pages`),
      '@store': path.resolve(`${__dirname}/src/store`),
      '@context': path.resolve(`${__dirname}/src/context`),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
