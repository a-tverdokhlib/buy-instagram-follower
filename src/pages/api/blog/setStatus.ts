const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, BlogRepo } from 'helpers/api'
import getConfig from 'next/config'
import { json } from 'stream/consumers'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: setStatus,
  }),
)

async function setStatus(req, res) {
  const { _ids, status } = req.body
  if (_ids === undefined) {
    throw 'The ids is not defined'
  }
  const ids = _ids.map((item, id) => {
    return item._id
  })
  await BlogRepo.setStatus(ids, status)
  if (status)
    return res.status(200).json({
      status: 'success',
      data: _ids,
    })
  else
    return res.status(200).json({
      status: 'success',
      data: _ids,
    })
}
