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
      sender: 'devsunleez@gmail.com',
    },
    cardinity: {
      consumerKey: 'test_omnqchxlrusrpequzdepwip0patjql',
      consumerSecret: 'cwsb3fqddtu02gdmmfnvz6skr9lwv9qlmbll0zq5zbhoeylojj',
      project_id: 'test_pr_xnm9euovq3rypgt7gurlaeulb3silu',
      project_secret: 'kduzu7xbizgtnp8wy7cv4hukdpuujaealc0tcs8tibp7kcgfut',
    },
  },
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:3001/api',
    behindApiUrl: 'http://localhost:4000/v1',
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
