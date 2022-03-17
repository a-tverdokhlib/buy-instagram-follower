const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, orderForRepo, parentPackRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()
const orderForList = [
  'Followers',
  'Likes',
  'Auto Likes',
  'Comments',
  'Auto Comments',
  'Views',
  'Custom Comments',
]
const parentPackList = [
  '100 Instagram Likes',
  '300 Instagram Likes',
  '500 Instagram Likes',
  '1000 Instagram Likes',
  '2500 Instagram Likes',
  '5000 Instagram Likes',
  '10k Instagram Likes',
  '20k Instagram Likes',
  '35k Instagram Likes',
  '50k Instagram Likes',
  '100k Instagram Likes',
  '500 Instagram Views',
  '1000 Instagram Views',
  '2500 Instagram Views',
  '5000 Instagram Views',
  '10k Instagram Views',
  '25k Instagram Views',
  '50k Instagram Views',
  '100k Instagram Views',
  '1 Million Instagram Views',
  '50 Instagram Saves',
  '300 Instagram Saves',
  '500 Instagram Saves',
  '1000 Instagram Saves',
  '2500 Instagram Saves',
  '5000 Instagram Saves',
  '10k Instagram Saves',
  '200 Real Instagram Likes',
  '1500 Real Instagram Likes',
  '3000 Real Instagram Likes',
  '8000 Real Instagram Likes',
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
