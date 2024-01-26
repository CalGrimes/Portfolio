const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    domains: ['cdn.builder.io', 'i0.wp.com'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  },
});

module.exports = nextConfig;