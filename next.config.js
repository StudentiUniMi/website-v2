/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
  },
}

module.exports = nextConfig
