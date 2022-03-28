const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, packageFAQRepo } from 'helpers/api'
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
    const packageFAQs = await packageFAQRepo.getAll()
    return res.status(200).json({
      data: packageFAQs,
      count: packageFAQs.length,
    })
  }

  const packageFAQs = await packageFAQRepo.findPackageFAQs({
    categoryId: categoryId,
  })
  if (!packageFAQs) {
    return res.status(200).json({
      data: {},
      categoryId: categoryId,
    })
  }
  return res.status(200).json({
    data: packageFAQs,
    categoryId: categoryId,
  })
}
