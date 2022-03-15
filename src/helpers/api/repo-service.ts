const fs = require('fs')

import dbConnect from './lib/dbConnect'
var serviceModel = require('./models/service')

export const serviceRepo = {
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
  const services = await serviceModel.find({})
  return services
}

async function findService(where) {
  const service = await serviceModel.findOne(where)
  return service
}

async function findServices(where) {
  const services = await serviceModel.find(where)
  return services
}

async function create(service) {
  console.log('Service to Create =>', service)
  const newService = new serviceModel(service)
  const addedOne = await newService.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await serviceModel.findOne({ _id: _id })
  updateOne.name = params.name
  updateOne.isMostPopular = params.isMostPopular
  updateOne.isShownInActiveTab = params.isShownInActiveTab
  updateOne.categoryId = params.categoryId
  updateOne.isInstagramSaves = params.isInstagramSaves
  updateOne.parentPackId = params.parentPackId
  updateOne.orderForId = params.orderForId
  updateOne.coupanCode = params.coupanCode
  updateOne.coupanDiscount = params.coupanDiscount
  updateOne.content = params.content
  updateOne.quantity = params.quantity
  updateOne.price = params.price
  updateOne.isActive = params.isActive
  updateOne.sortNumber = params.sortNumber
  updateOne.imageUrl = params.imageUrl
  updateOne.urlSlug = params.urlSlug
  updateOne.pageTitle = params.pageTitle
  updateOne.metaKeywords = params.metaKeywords
  updateOne.metaDescription = params.metaDescription
  updateOne.apiType = params.apiType
  updateOne.variationDays = params.variationDays
  updateOne.offPercent = params.offPercent
  updateOne.isDefaultActive = params.isDefaultActive
  await updateOne.save()
  return updateOne
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(_id) {
  const service = await serviceModel.findOne({ _id: _id })
  service.remove()
  return true
}

async function deleteMany(_ids) {
  await serviceModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await serviceModel.find({ isActive: false }).select('_id')
  await serviceModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await serviceModel.update(
    { _id: { $in: _ids } },
    { $set: { isActive: status } },
  )
  return true
}
