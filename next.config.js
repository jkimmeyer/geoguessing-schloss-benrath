/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  }
}

module.exports = nextConfig
