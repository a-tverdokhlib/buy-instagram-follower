const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, orderRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createOrder,
    get: searchOrders,
  }),
)

async function createOrder(req, res) {
  console.log('Cookies =>', req.cookies)
  const { id } = req.body
  const orderOne = await orderRepo.find({ _id: id })
  if (!orderOne) {
    const orderAdded = await orderRepo.create({}).catch((err) => {
      return res.status(500).json({
        msg: 'Error occured during save in database.',
        error: 500,
      })
    })
    return res.status(200).json({
      data: orderAdded,
    })
  }
  return res.status(417).json({
    error: 'duplication',
    msg: 'Category you are going to add does already exists',
  })
}

async function searchOrders(req, res) {
  console.log('Cookies =>', req.cookies)
  const { keyword } = req.query
  if (keyword === '') {
    const orders = await orderRepo.getAll()
    return res.status(200).json({
      data: orders,
      count: orders.length,
    })
  }

  const orderOne = await orderRepo.find({ name: keyword })
  if (!orderOne) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: orderOne,
  })
}
