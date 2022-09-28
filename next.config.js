module.exports = {
  target: 'serverless',
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
          emitWarning: true,
          fix: true,
        },
      })
    }
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  },
}
