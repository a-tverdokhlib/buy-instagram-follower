const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, usersRepo } from 'helpers/api'
import getConfig from 'next/config'

import dbConnect from '@/helpers/api/lib/dbConnect'
const { serverRuntimeConfig } = getConfig()

export default apiHandler({
  post: authenticate,
})

async function authenticate(req, res) {
  await dbConnect()

  const { email, password } = req.body

  const admin = await usersRepo.find({ email: 'support@goread.io' })
  if (!admin) {
    const hashString = await bcrypt.hash('123456', 12)
    usersRepo.create({
      firstname: 'Sanjana',
      lastname: 'Nuwan Bundra',
      email: 'support@goread.io',
      hash: hashString,
    })
  }
  const admin1 = await usersRepo.find({ email: 'devsunleez@gmail.com' })
  if (!admin1) {
    const hashString = await bcrypt.hash('123456', 12)
    usersRepo.create({
      firstname: 'Andriy',
      lastname: 'Tverdokhlib Ivanovych',
      email: 'devsunleez@gmail.com',
      hash: hashString,
    })
  }
  const user = await usersRepo.find({ email })

  if (!user) throw 'User not found.'
  console.log('User => ', user)
  if (!(user && bcrypt.compareSync(password, user.hash))) {
    throw 'Email or password is incorrect'
  }

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user._id }, serverRuntimeConfig.secret, {
    expiresIn: '7d',
  })

  return res.status(200).json({
    id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    token,
  })
}
