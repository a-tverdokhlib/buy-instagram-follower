const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, providerRepo } from 'helpers/api'
import getConfig from 'next/config'
const axios = require('axios')

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: getBalance,
  }),
)

async function getBalance(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const { _id } = req.query
  const provider = await providerRepo.find({ _id: _id })
  console.log('Provider URL =>', provider.url)
  console.log('Provider ApiKEY =>', provider.apiKey)
  await axios
    .post(`${provider.url}`, { key: provider.apiKey, action: 'balance' })
    .then((response) => {
      return res.status(200).json({ data: response.data, status: 'success' })
    })
    .catch((error) => {
      return res.status(500).json({
        status: 'failure',
        error: error,
      })
    })
}
