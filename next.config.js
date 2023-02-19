/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'krittin.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
