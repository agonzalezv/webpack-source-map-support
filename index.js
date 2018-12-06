const webpack = require('webpack')

const plugin = function () {
  return new webpack.BannerPlugin({
    banner: "import 'source-map-support/register'",
    raw: true,
    entryOnly: false
  })
}

module.exports = plugin
