const expressJwt = require('express-jwt')
const util = require('util')
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export { jwtMiddleware }

function jwtMiddleware(req, res) {
  const middleware = expressJwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ['HS256'],
  }).unless({
    path: [
      // public routes that don't require authentication
      '/api/users/register',
      '/api/users/authenticate',
      '/api/category',
      '/api/category/search',
      '/api/dummy',
      '/api/service/parentPacks',
      '/api/service/orderFors',
      '/api/checkout/sendemail',
      '/api/instagram',
      '/api/cardinity/sign',
    ],
  })

  return util.promisify(middleware)(req, res)
}
