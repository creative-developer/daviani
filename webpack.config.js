import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

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

export const getWebpackConfig = (options = {}) => {
  const isDev = options.mode === 'development';
  const webpackConfig = {
    mode: options.mode || 'development',
    devtool: isDev ? 'inline-source-map' : undefined,
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

  return webpackConfig;
};
