/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { NODE_ENV } = process.env;

const inProduction = NODE_ENV === 'production';

module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      inProduction && [
        'babel-plugin-jsx-remove-data-test-id',
        {
          attributes: ['data-test-id', 'data-testid'],
        },
      ],
    ].filter(Boolean),
  };
};
