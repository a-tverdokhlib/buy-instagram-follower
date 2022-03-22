const fs = require('fs')

import dbConnect from './lib/dbConnect'
var growPackModel = require('./models/growPack')

export const growPackRepo = {
  getAll: () => allGrowPacks(),
  find: (x) => findGrowPack(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allGrowPacks() {
  const growPacks = await growPackModel.find({})
  return growPacks
}

async function findGrowPack(where) {
  const growPack = await growPackModel.findOne(where)
  return growPack
}

async function create(growPack) {
  const newGrowPack = new growPackModel(growPack)
  const addedOne = await newGrowPack.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await growPackModel.findOne({ _id: _id })
  updateOne.name = params.name
  updateOne.coupanCode = params.coupanCode
  updateOne.coupanDiscount = params.coupanDiscount
  updateOne.content = params.content
  updateOne.checkoutCode = params.checkoutCode
  updateOne.keyFeatures = params.keyFeatures
  updateOne.price = params.price
  updateOne.isActive = params.isActive
  updateOne.imageUrl = params.imageUrl
  updateOne.urlSlug = params.urlSlug
  updateOne.pageTitle = params.pageTitle
  updateOne.metaKeywords = params.metaKeywords
  updateOne.metaDescription = params.metaDescription
  updateOne.newPost = params.newPost
  updateOne.apiProviderId = params.apiProviderId
  updateOne.serviceItems = params.serviceItems
  await updateOne.save()
  return updateOne
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(_id) {
  const growPack = await growPackModel.findOne({ _id: _id })
  growPack.remove()
  return true
}

async function deleteMany(_ids) {
  await growPackModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await growPackModel
    .find({ isActive: false })
    .select('_id')
  await growPackModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await growPackModel.update(
    { _id: { $in: _ids } },
    { $set: { isActive: status } },
  )
  return true
}
