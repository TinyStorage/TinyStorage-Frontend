const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/app/',
  devServer: {
    port: 5000,
    proxy: {
      '/v1': {
        target: 'http://localhost:8080',
      },
    },
  },
});
