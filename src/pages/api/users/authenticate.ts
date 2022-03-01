const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, usersRepo } from 'helpers/api'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default apiHandler({
  post: authenticate,
})

function authenticate(req, res) {
  const { email, password } = req.body
  const user = usersRepo.find((u) => u.email === email)
  return res.status(200).json({
    id: '0',
    email: 'devsunleez@gmail.com',
    firstName: 'Andriy',
    lastName: 'Tverdokhlib',
    token: 'token',
  })
  // validate
  if (!(user && bcrypt.compareSync(password, user.hash))) {
    throw 'Email or password is incorrect'
  }

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, {
    expiresIn: '7d',
  })

  // return basic user details and token
  return res.status(200).json({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    token,
  })
}
