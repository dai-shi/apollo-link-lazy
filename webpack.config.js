// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { DIR, EXT = 'ts' } = process.env;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: `./examples/${DIR}/src/index.${EXT}`,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./examples/${DIR}/public/index.html`,
    }),
  ],
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    }, {
      test: /\.mjs/,
      include: /node_modules/,
      type: 'javascript/auto',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    alias: {
      'apollo-link-lazy': `${__dirname}/src`,
    },
  },
  devServer: {
    port: process.env.PORT || '8080',
    contentBase: `./examples/${DIR}/public`,
  },
};
