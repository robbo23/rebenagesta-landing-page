/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  assetPrefix: isProd ? 'https://rebenagesta-landing-page.vercel.app' : undefined,
  images: {
    domains: ['rebenagesta.com', 'panel.rebenagesta.com'],
    minimumCacheTTL: 60 * 60 * 24 * 31 * 12, // 1 year cache
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;
