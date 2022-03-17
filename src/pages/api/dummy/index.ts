const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, orderForRepo, parentPackRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()
const orderForList = [
  'Followers',
  'Likes',
  'Views',
  'Comments',
  'Auto Followers',
  'Auto Likes',
  'Auto Views',
  'Auto Comments',
]
const parentPackList = [
  '300 Instagram Likes',
  '500 Instagram Likes',
  '700 Instagram Likes',
  '1000 Instagram Likes',
  '2500 Instagram Likes',
]
export default connectDB(
  apiHandler({
    get: migrate,
  }),
)

async function migrate(req, res) {
  console.log('Migrating, Cookies =>', req.cookies)
  orderForList.map(async (item, id) => {
    const orderFor = await orderForRepo.find({ name: item })
    console.log('OrderFor=>', orderFor)
    if (!orderFor) {
      orderForRepo.create({ name: item })
    }
  })
  parentPackList.map(async (item, id) => {
    const parentPack = await parentPackRepo.find({ name: item })
    if (!parentPack) {
      parentPackRepo.create({ name: item })
    }
  })
}
