const fs = require('fs')

import dbConnect from './lib/dbConnect'
var FAQModel = require('./models/FAQ')

export const FAQRepo = {
  getAll: () => allFAQs(),
  find: (x) => findFAQ(x),
  findFAQs: (x) => findFAQs(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allFAQs() {
  const FAQs = await FAQModel.find({})
  return FAQs
}

async function findFAQ(where) {
  const FAQ = await FAQModel.findOne(where)
  return FAQ
}

async function findFAQs(where) {
  const FAQs = await FAQModel.find(where)
  return FAQs
}

async function create(FAQ) {
  const newFAQ = new FAQModel(FAQ)
  const addedOne = await newFAQ.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await FAQModel.findOne({ _id: _id })
  updateOne.question = params.question
  updateOne.answer = params.answer
  updateOne.isActive = params.isActive
  updateOne.sort = params.sort
  await updateOne.save()
  return updateOne
}

async function _delete(_id) {
  const FAQ = await FAQModel.findOne({ _id: _id })
  FAQ.remove()
  return true
}

async function deleteMany(_ids) {
  await FAQModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await FAQModel.find({ isActive: false }).select('_id')
  await FAQModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await FAQModel.update({ _id: { $in: _ids } }, { $set: { isActive: status } })
  return true
}
