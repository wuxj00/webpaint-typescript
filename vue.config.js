module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: '../static/dist',
  devServer: {
    proxy: {
      '/migu-content-console': {
        target: 'http://172.28.20.7:8080',
        changeOrigin: true
      }
    }
  }
}
