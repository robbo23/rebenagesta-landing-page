/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rebenagesta.com', 'panel.rebenagesta.com'],
    minimumCacheTTL: 60 * 60 * 24 * 31 * 12, // 1 year cache
    formats: ['image/avif', 'image/webp']
  }
  //async rewrites() {
  //  return [
  //    {
  //      source: '/admin/:path*',
  //      destination: 'https://orange-admin.rebenagesta.pl/:path*/'
  //    },
  //    {
  //      source: '/admin2/:slug',
  //      destination: 'https://orange-admin.rebenagesta.pl/wp-admin/:slug'
  //    },
  //    {
  //      source: '/admin2/:slug',
  //      destination: 'https://orange-admin.rebenagesta.pl/wp-admin/:slug'
  //    }
  //  ];
  //}
};

module.exports = nextConfig;
