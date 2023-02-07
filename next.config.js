/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
}

module.exports = nextConfig
