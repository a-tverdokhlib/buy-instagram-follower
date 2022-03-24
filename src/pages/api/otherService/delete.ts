const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, otherServiceRepo } from 'helpers/api'
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
  console.log('Cookies =>', req.cookies)
  const { _ids } = req.body
  if (_ids === undefined) {
    throw 'The ids is not defined'
  }
  console.log('_IDS =>', _ids)
  const ids = _ids.map((item, id) => {
    return item._id
  })
  await otherServiceRepo.deleteMany(ids)
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
    await otherServiceRepo.delete(_id)
    return res.status(200).json({
      status: 'success',
      removedId: _id,
    })
  } else if (_type === 'inactive') {
    const inactiveIds = await otherServiceRepo.deleteInactive()
    console.log('InActiveIDS=>', inactiveIds)
    return res.status(200).json({
      status: 'success',
      data: inactiveIds,
    })
  }
}
