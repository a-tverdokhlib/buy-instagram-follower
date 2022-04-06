const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import axios from 'axios'
import { apiHandler } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: getUserInfo,
  }),
)

async function getUserInfo(req, res) {
  const { username } = req.query
  if (username === '') {
    throw 'No username given'
  }

  axios
    .get(`https://www.instagram.com/${username}/?__a=1`, {
      proxy: {
        host: 'proxy.froxy.com',
        port: 9000,
        auth: { username: 'BBis8yzzuum8tR9n', password: 'mobile;;;;' },
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
