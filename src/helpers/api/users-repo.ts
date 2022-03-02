const fs = require('fs')

import dbConnect from './lib/dbConnect'
var userModel = require('./models/user')

// dbConnect()

export const usersRepo = {
  getAll: () => users,
  find: (x) => findUser(x),
  create,
  update,
  delete: _delete,
}

async function users() {
  const users = await userModel.find({})
  return users
}

async function findUser(credentials) {
  const user = await userModel.findOne({ email: credentials.email })
  return user
}

async function create(user) {
  const newUser = new userModel(user)
  console.log('New User to Create =>', newUser)
  newUser.save()
}

async function update(id, params) {
  // // set date updated
  // user.dateUpdated = new Date().toISOString()
  // // update and save
  // Object.assign(user, params)
  // saveData()
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id) {
  // filter out deleted user and save
}
