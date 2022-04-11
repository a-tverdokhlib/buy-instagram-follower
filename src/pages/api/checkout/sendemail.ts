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
  const { email, username, quantity, name, link } = req.body
  await transfer(email, 'support@goread.io', { username, quantity, name, link })
}
