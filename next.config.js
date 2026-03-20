const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'kbar']
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/rajatresume.pdf',
        permanent: true
      },
      {
        source: '/gg',
        destination: '/ggwp.zip',
        permanent: true
      }
    ];
  }
};

module.exports = withContentlayer(nextConfig);
