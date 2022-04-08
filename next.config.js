/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg | png | jpg | gif | mp4)$/,
        use: 'file-loader',
      },
    ]
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')
module.exports = withVideos()
