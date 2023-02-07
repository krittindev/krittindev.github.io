/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? 'tuliptgr.github.io' : '',
  images: {
    unoptimized: true,
  },
}