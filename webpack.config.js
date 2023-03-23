const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ];

  return loaders;
};

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './app/js/main.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // },
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
