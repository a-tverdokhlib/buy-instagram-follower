const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, providerRepo } from 'helpers/api'
import getConfig from 'next/config'
const axios = require('axios')

import { iteratorSymbol } from 'immer/dist/internal'

import { ProductItem } from '@/components/organisms/ProductItem'
import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: getServices,
  }),
)

async function getServices(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const { _id } = req.query
  const provider = await providerRepo.find({ _id: _id })
  await axios
    .post(`${provider.url}`, { key: provider.apiKey, action: 'services' })
    .then((response) => {
      const services = response.data.filter(
        (item) =>
          item.category.includes('Instagram') === true ||
          item.category.includes('Snapchat Spotlight') === true,
      )
      return res.status(200).json({ data: services, status: 'success' })
    })
    .catch((error) => {
      return res.status(500).json({
        status: 'failure',
        error: error,
      })
    })
}
