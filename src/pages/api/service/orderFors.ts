const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, orderForRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: fetchAll,
  }),
)

async function fetchAll(req, res) {
  const orderFors = await orderForRepo.getAll()
  return res.status(200).json({
    data: orderFors,
    count: orderFors.length,
  })
}
