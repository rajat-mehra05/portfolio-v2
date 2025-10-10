const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Profile Picture,
      'res.cloudinary.com',
      'flagcdn.com'
    ]
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/rajat_resume.pdf',
        permanent: true
      },
      {
        source: '/gg',
        destination: '/ggwp.zip',
        permanent: true
      }
    ];
  }
});
