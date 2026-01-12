module.exports = {
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}