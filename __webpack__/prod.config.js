/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
