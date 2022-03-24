const fs = require('fs')

import dbConnect from './lib/dbConnect'
var otherServiceModel = require('./models/otherService')

export const otherServiceRepo = {
  getAll: () => allServices(),
  find: (x) => findService(x),
  findServices: (x) => findServices(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allServices() {
  const services = await otherServiceModel.find({})
  return services
}

async function findService(where) {
  const service = await otherServiceModel.findOne(where)
  return service
}

async function findServices(where) {
  const services = await otherServiceModel.find(where)
  return services
}

async function create(service) {
  console.log('Service to Create =>', service)
  const newService = new otherServiceModel(service)
  const addedOne = await newService.save()
  return addedOne
}

async function update(_id, params) {
  console.log('Params=>', params)
  const updateOne = await otherServiceModel.findOne({ _id: _id })
  updateOne.name = params.name
  updateOne.minQuantity = params.minQuantity
  updateOne.maxQuantity = params.maxQuantity
  updateOne.priceList = params.priceList
  updateOne.apiProviderId = params.apiProviderId
  updateOne.serviceItem = params.serviceItem
  updateOne.rate = params.rate
  updateOne.min = params.min
  updateOne.max = params.max
  updateOne.isActive = params.isActive
  await updateOne.save()
  return updateOne
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(_id) {
  const service = await otherServiceModel.findOne({ _id: _id })
  service.remove()
  return true
}

async function deleteMany(_ids) {
  await otherServiceModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await otherServiceModel
    .find({ isActive: false })
    .select('_id, categoryId')
  await otherServiceModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await otherServiceModel.update(
    { _id: { $in: _ids } },
    { $set: { isActive: status } },
  )
  return true
}
