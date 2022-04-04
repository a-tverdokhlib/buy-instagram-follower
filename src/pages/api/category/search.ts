const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import {
  apiHandler,
  autoLikePackRepo,
  categoryRepo,
  growPackRepo,
  serviceRepo,
} from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: searchCategory,
  }),
)

async function searchCategory(req, res) {
  const { urlSlug } = req.query
  if (urlSlug === undefined) {
    throw 'Please provide the category urlSlug.'
  }

  const category = await categoryRepo.find({ urlSlug: urlSlug })
  if (!category) {
    return res.status(200).json({
      data: {},
      services: [],
    })
  } else {
    if (urlSlug === 'instagram-growth') {
      const services = await growPackRepo.getAll()
      return res.status(200).json({
        data: category,
        services: services,
      })
    } else if (urlSlug === 'buy-auto-instagram-likes') {
      const services = await autoLikePackRepo.getAll()
      return res.status(200).json({
        data: category,
        services: services,
      })
    } else {
      const services = await serviceRepo.findServicesInBrief({
        categoryId: category._id,
      })
      return res.status(200).json({
        data: category,
        services: services,
      })
    }
  }
}
