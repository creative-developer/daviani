const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const env = process.env.NODE_ENV || 'production';
const mode = env === 'development' ? 'development' : process.env.NODE_ENV || 'production';
const isDev = mode === 'development';

const config = {
  mode,
  devtool: isDev ? 'inline-source-map' : undefined,
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};

module.exports = config;
