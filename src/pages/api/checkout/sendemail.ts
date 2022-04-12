const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const transfer = require('@/helpers/api/lib/email')

import { apiHandler, categoryRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'
const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: sendemail,
  }),
)

async function sendemail(req, res) {
  const { email, username, quantity, name, link, coupan, coupanDiscount } =
    req.body
  const result = await transfer(email, 'Support', {
    email,
    username,
    quantity,
    name,
    coupan,
    coupanDiscount,
    link,
  })

  return res.status(200).json({
    status: 'success',
  })
}
