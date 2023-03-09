/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  env: {
    API_BACKEND: 'http://localhost:8000/',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}


module.exports = nextConfig
