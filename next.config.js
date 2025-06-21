const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const nextConfig = {
  images: {unoptimized: true},
  optimizeFonts: false,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  poweredByHeader: false,
}

module.exports = withNextIntl(nextConfig);
