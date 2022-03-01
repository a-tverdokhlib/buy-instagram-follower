module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'MySecretKey1235sdwe#w',
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
}
