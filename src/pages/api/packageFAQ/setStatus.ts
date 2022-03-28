const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, packageFAQRepo } from 'helpers/api'
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
  console.log('Cookies =>', req.cookies)
  const { _ids, status } = req.body
  if (_ids === undefined) {
    throw 'The ids is not defined'
  }
  console.log('_IDS =>', _ids)
  const ids = _ids.map((item, id) => {
    return item._id
  })
  await packageFAQRepo.setStatus(ids, status)
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
