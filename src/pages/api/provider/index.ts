const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, providerRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createProvider,
    get: searchProviders,
    put: updateProvider,
  }),
)

async function createProvider(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const { name, url, apiKey, isActive, description, _id } = req.body
  const providerOne = await providerRepo.find({ name: name })
  if (!providerOne) {
    const providerAdded = await providerRepo
      .create({
        name: name,
        url: url,
        apiKey: apiKey,
        isActive: isActive,
        description: description,
      })
      .catch((err) => {
        return res.status(500).json({
          msg: 'Error occured during save in database.',
          error: 500,
        })
      })
    return res.status(200).json({
      data: providerAdded,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'Provider you are going to add does already exists',
    })
  }
}

async function updateProvider(req, res) {
  console.log('Updating, Cookies =>', req.cookies)
  const { name, url, apiKey, isActive, description, _id } = req.body
  const updatedOne = await providerRepo.update(_id, {
    name: name,
    url: url,
    apiKey: apiKey,
    isActive: isActive,
    description: description,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
  })
}

async function searchProviders(req, res) {
  console.log('Cookies =>', req.cookies)
  const { keyword } = req.query
  if (keyword === '') {
    const providers = await providerRepo.getAll()
    return res.status(200).json({
      data: providers,
      count: providers.length,
    })
  }

  const providerOne = await providerRepo.find({ name: keyword })
  if (!providerOne) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: providerOne,
  })
}
