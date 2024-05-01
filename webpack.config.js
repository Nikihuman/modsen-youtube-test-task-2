/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const common = require('./__webpack__/common.config');
const dev = require('./__webpack__/dev.config');
const prod = require('./__webpack__/prod.config');
const { merge } = require('webpack-merge');

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return merge(common, dev);
    case 'production':
      return merge(common, prod);
    default:
      throw new Error('No matching configuration was found!');
  }
};
