const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, providerRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: deleteMany,
    delete: _delete,
  }),
)

async function deleteMany(req, res) {
  console.log('Cookies =>', req.cookies)
  const { _ids } = req.body
  if (_ids === undefined) {
    throw 'The ids is not defined'
  }
  console.log('_IDS =>', _ids)
  await providerRepo.deleteMany(_ids)
  return res.status(200).json({
    status: 'success',
    removedIds: _ids,
  })
}
async function _delete(req, res) {
  console.log('Cookies =>', req.cookies)
  const { _id, _type } = req.query
  if (_type === 'one') {
    if (_id === '' || _id === undefined) {
      throw 'The id of Category is not defined'
    }
    await providerRepo.delete(_id)
    return res.status(200).json({
      status: 'success',
      removedId: _id,
    })
  } else if (_type === 'inactive') {
    const inactiveIds = await providerRepo.deleteInactive()
    return res.status(200).json({
      status: 'success',
      data: inactiveIds,
    })
  }
}
