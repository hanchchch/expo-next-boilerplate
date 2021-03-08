const path = require('path');
const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  projectRoot: __dirname,
  webpack: (config, options) => {
    config.resolve = {
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@mobile': path.join(__dirname, 'src', 'mobile'),
        '@comp': path.join(__dirname, 'src', 'components'),
        '@static': path.join(__dirname, 'src', 'public/static'),
        '@styles': path.join(__dirname, 'src', 'styles')
      },
      ...config.resolve
    };
    return config;
  }
});
