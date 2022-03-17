const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, parentPackRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: fetchAll,
  }),
)

async function fetchAll(req, res) {
  const parentPacks = await parentPackRepo.getAll()
  return res.status(200).json({
    data: parentPacks,
    count: parentPacks.length,
  })
}
