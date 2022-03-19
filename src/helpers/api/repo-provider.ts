const fs = require('fs')

import dbConnect from './lib/dbConnect'
var providerModel = require('./models/provider')

export const providerRepo = {
  getAll: () => allProviders(),
  find: (x) => findProvider(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allProviders() {
  const providers = await providerModel.find({})
  return providers
}

async function findProvider(where) {
  const provider = await providerModel.findOne(where)
  return provider
}

async function create(provider) {
  const newProvider = new providerModel(provider)
  const addedOne = await newProvider.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await providerModel.findOne({ _id: _id })
  updateOne.name = params.name
  updateOne.url = params.url
  updateOne.apiKey = params.apiKey
  updateOne.isActive = params.isActive
  updateOne.description = params.description
  await updateOne.save()
  return updateOne
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(_id) {
  const provider = await providerModel.findOne({ _id: _id })
  provider.remove()
  return true
}

async function deleteMany(_ids) {
  await providerModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await providerModel
    .find({ isActive: false })
    .select('_id')
  await providerModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await providerModel.update(
    { _id: { $in: _ids } },
    { $set: { isActive: status } },
  )
  return true
}
