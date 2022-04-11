module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'MySecretKey1235sdwe#w',
    MONGODB_URI: 'mongodb://localhost:27017/buy-insta',
    smtp: {
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'audelkabristante@gmail.com',
        pass: 'ynjmvnurlrzqhwja',
      },
      sender: 'support@goread.io',
    },
  },
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:3001/api',
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: [
      'instagram.com',
      'images.firstpost.com',
      'goread.io',
      'instagram.fblq3-1.fna.fbcdn.net',
      'instagram.ffab2-1.fna.fbcdn.net',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
