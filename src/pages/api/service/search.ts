const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, serviceRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: searchByCategory,
  }),
)

async function searchByCategory(req, res) {
  const { categoryId } = req.query
  if (categoryId === undefined) {
    const services = await serviceRepo.getAll()
    return res.status(200).json({
      data: services,
      count: services.length,
    })
  }

  const services = await serviceRepo.findServices({ categoryId: categoryId })
  if (!services) {
    return res.status(200).json({
      data: {},
      categoryId: categoryId,
    })
  }
  return res.status(200).json({
    data: services,
    categoryId: categoryId,
  })
}
