/** @type {import('next').NextConfig} */
const isProd = process.env.VERCEL_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://rebenagesta-landing-page.vercel.app' : undefined,
  images: {
    domains: ['rebenagesta.com', 'panel.rebenagesta.com'],
    minimumCacheTTL: 60 * 60 * 24 * 31 * 12, // 1 year cache
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    nextScriptWorkers: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
