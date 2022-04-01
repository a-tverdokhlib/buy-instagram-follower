module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'MySecretKey1235sdwe#w',
    MONGODB_URI: 'mongodb://localhost:27017/buy-insta',
  },
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:3001/api',
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['instagram.com', 'images.firstpost.com', 'goread.io'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
