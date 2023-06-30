/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com", "unsplash.com"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**'
          },
          {
            protocol: 'http',
            hostname: '**'
          }
        ]
      },
}

module.exports = nextConfig
