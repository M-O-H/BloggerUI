/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true
}

module.exports = nextConfig 