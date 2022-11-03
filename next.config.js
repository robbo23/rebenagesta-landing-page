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

  /**
   experimental: {
   nextScriptWorkers: true
  },
   */
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
      },
      {
        source: '/:all*(ttf|otf|woff|woff2|svg|png|jpg|mp4|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
