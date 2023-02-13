/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/proudest",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
