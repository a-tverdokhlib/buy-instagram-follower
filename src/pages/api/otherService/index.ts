const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, otherServiceRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createService,
    get: searchServices,
    put: updateService,
  }),
)

async function createService(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const {
    name,
    minQuantity,
    maxQuantity,
    priceList,
    apiProviderId,
    serviceItem,
    rate,
    min,
    max,
    isActive,
    _id,
  } = req.body
  const categoryOne = await otherServiceRepo.find({ name: name })
  if (!categoryOne) {
    const categoryAdded = await otherServiceRepo
      .create({
        name: name,
        minQuantity: minQuantity,
        maxQuantity: maxQuantity,
        priceList: priceList,
        apiProviderId: apiProviderId,
        serviceItem: serviceItem,
        rate: rate,
        min: min,
        max: max,
        isActive: isActive,
      })
      .catch((err) => {
        return res.status(500).json({
          msg: 'Error occured during save in database.',
          error: 500,
        })
      })
    return res.status(200).json({
      data: categoryAdded,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'Category you are going to add does already exists',
    })
  }
}

async function updateService(req, res) {
  console.log('Updating, Cookies =>', req.cookies)
  const {
    name,
    minQuantity,
    maxQuantity,
    priceList,
    apiProviderId,
    serviceItem,
    rate,
    min,
    max,
    isActive,
    _id,
  } = req.body
  const oldOne = await otherServiceRepo.find({ _id: _id })
  const updatedOne = await otherServiceRepo.update(_id, {
    name: name,
    minQuantity: minQuantity,
    maxQuantity: maxQuantity,
    priceList: priceList,
    apiProviderId: apiProviderId,
    serviceItem: serviceItem,
    rate: rate,
    min: min,
    max: max,
    isActive: isActive,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
  })
}

async function searchServices(req, res) {
  console.log('Cookies =>', req.cookies)
  if (req.query === undefined) {
    const services = await otherServiceRepo.getAll()
    return res.status(200).json({
      data: services,
      count: services.length,
    })
  }

  const services = await otherServiceRepo.findServices(req.query)
  if (!services) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: services,
  })
}
