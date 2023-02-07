/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'krittin.dev',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
