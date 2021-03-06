// @generated: @expo/next-adapter@2.1.61
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = { 
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    "@emotion",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["module-resolver", {
      root: ['./src'],
      alias: {
        '@src': './src',
        '@mobile': './src/mobile',
        '@comp': './src/components',
        '@static': './public/static',
        '@styles': './src/styles',
      }
    }],
  ]
};
