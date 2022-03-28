const fs = require('fs')

import dbConnect from './lib/dbConnect'
var packageFAQModel = require('./models/packageFAQ')

export const packageFAQRepo = {
  getAll: () => allPackageFAQs(),
  find: (x) => findPackageFAQ(x),
  findPackageFAQs: (x) => findPackageFAQs(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allPackageFAQs() {
  const packageFAQs = await packageFAQModel.find({})
  return packageFAQs
}

async function findPackageFAQ(where) {
  const packageFAQ = await packageFAQModel.findOne(where)
  return packageFAQ
}

async function findPackageFAQs(where) {
  const packageFAQs = await packageFAQModel.find(where)
  return packageFAQs
}

async function create(packageFAQ) {
  const newFAQ = new packageFAQModel(packageFAQ)
  const addedOne = await newFAQ.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await packageFAQModel.findOne({ _id: _id })
  updateOne.categoryId = params.categoryId
  updateOne.question = params.question
  updateOne.answer = params.answer
  updateOne.isActive = params.isActive
  await updateOne.save()
  return updateOne
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(_id) {
  const packageFAQ = await packageFAQModel.findOne({ _id: _id })
  packageFAQ.remove()
  return true
}

async function deleteMany(_ids) {
  await packageFAQModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await packageFAQModel
    .find({ isActive: false })
    .select('_id, categoryId')
  await packageFAQModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await packageFAQModel.update(
    { _id: { $in: _ids } },
    { $set: { isActive: status } },
  )
  return true
}
