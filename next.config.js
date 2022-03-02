module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'MySecretKey1235sdwe#w',
    MONGODB_URI: 'mongodb://localhost:27017/buy-insta',
  },
  publicRuntimeConfig: {
    apiUrl: 'https://localhost:3000/api',
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['instagram.com', 'images.firstpost.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
