const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, BlogRepo } from 'helpers/api'
import getConfig from 'next/config'
import { json } from 'stream/consumers'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: deleteMany,
    delete: _delete,
  }),
)

async function deleteMany(req, res) {
  const { _ids } = req.body
  if (_ids === undefined) {
    throw 'The ids is not defined'
  }
  const ids = _ids.map((item, id) => {
    return item._id
  })
  await BlogRepo.deleteMany(ids)
  return res.status(200).json({
    status: 'success',
    removedIds: _ids,
  })
}
async function _delete(req, res) {
  const { _id, _type } = req.query
  if (_type === 'one') {
    if (_id === '' || _id === undefined) {
      throw 'The id of Category is not defined'
    }
    await BlogRepo.delete(_id)
    return res.status(200).json({
      status: 'success',
      removedId: _id,
    })
  } else if (_type === 'inactive') {
    const inactiveIds = await BlogRepo.deleteInactive()
    return res.status(200).json({
      status: 'success',
      data: inactiveIds,
    })
  }
}
