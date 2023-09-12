/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://46.101.210.71:9004/:path*',
        // destination: 'http://localhost:8000/:path*',
      },
    ];
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'st3.depositphotos.com',
      'gateway.ipfscdn.io',
    ],
  },
};

module.exports = nextConfig;
