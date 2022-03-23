const fs = require('fs')

import dbConnect from './lib/dbConnect'
var autoLikePackModel = require('./models/autoLikePack')

export const autoLikePackRepo = {
  getAll: () => allAutoLikePacks(),
  find: (x) => findAutoLikePack(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allAutoLikePacks() {
  const autoLikePacks = await autoLikePackModel.find({})
  return autoLikePacks
}

async function findAutoLikePack(where) {
  const autoLikePack = await autoLikePackModel.findOne(where)
  return autoLikePack
}

async function create(autoLikePack) {
  const newAutoLikePack = new autoLikePackModel(autoLikePack)
  const addedOne = await newAutoLikePack.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await autoLikePackModel.findOne({ _id: _id })
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
  const autoLikePack = await autoLikePackModel.findOne({ _id: _id })
  autoLikePack.remove()
  return true
}

async function deleteMany(_ids) {
  await autoLikePackModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await autoLikePackModel
    .find({ isActive: false })
    .select('_id')
  await autoLikePackModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await autoLikePackModel.update(
    { _id: { $in: _ids } },
    { $set: { isActive: status } },
  )
  return true
}
