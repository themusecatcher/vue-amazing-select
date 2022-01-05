module.exports = {
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(__dirname + 'packages') // 注意这里需要绝对路径，所以要拼接__dirname
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
