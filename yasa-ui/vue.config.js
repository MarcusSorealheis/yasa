const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  publicPath: '.',
  devServer: {
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8983',
        secure: false,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@store': path.join(__dirname, 'src/store'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@service': path.join(__dirname, 'src/service'),
        '@components': path.join(__dirname, 'src/components'),
      },
    },
    performance: {
      hints: false,
    },
  },
  chainWebpack: (config) => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        languages: ['json', 'javascript', 'html', 'xml'],
      },
    ]);
  },
};
