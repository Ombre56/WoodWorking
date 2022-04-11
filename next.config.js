/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    },
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.html$/,
  //       use: ["html-loader"]
  //     },
  //     {
  //       test: /\.(svg | png | jpg | gif | mp4)$/,
  //       use: 'file-loader',
  //     },
  //   ]
  // },

module.exports = nextConfig
