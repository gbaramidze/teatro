const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const nextConfig = {
    images: { unoptimized: true },
    optimizeFonts: false,
    trailingSlash: true,
}

module.exports = withNextIntl(nextConfig);
