/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it'
  },
  async redirects() {
    return [
      // Redirect users from old /courses route to /
      {
        source: '/courses/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
