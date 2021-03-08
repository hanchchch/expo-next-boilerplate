const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');
const path = require('path');
const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  projectRoot: __dirname,
  webpack: (config, options) => {
    config = withSass({
      cssModules: true
    }).webpack(config, options);
    config = withSourceMaps(withCss({
      cssModules: false
    })).webpack(config, options);
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    config.resolve = {
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@comp': path.join(__dirname, 'src', 'components'),
        '@static': path.join(__dirname, 'src', 'public/static'),
        '@styles': path.join(__dirname, 'src', 'styles')
      },
      ...config.resolve
    };
    return config;
  }
});
