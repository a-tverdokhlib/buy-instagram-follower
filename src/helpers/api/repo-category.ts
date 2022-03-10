const fs = require('fs')

import dbConnect from './lib/dbConnect'
var categoryModel = require('./models/category')

export const categoryRepo = {
  getAll: () => allCategories(),
  find: (x) => findCategory(x),
  create,
  update,
  delete: _delete,
}

async function allCategories() {
  const categories = await categoryModel.find({})
  return categories
}

async function findCategory(where) {
  const category = await categoryModel.findOne(where)
  return category
}

async function create(category) {
  const newCategory = new categoryModel(category)
  const addedOne = await newCategory.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await categoryModel.findOne({ _id: _id })
  updateOne.name = params.name
  updateOne.content = params.content
  updateOne.checkoutCode = params.checkoutCode
  updateOne.requiredField = params.requiredField
  updateOne.socialNetwork = params.socialNetwork
  updateOne.defaultSortingNumber = params.defaultSortingNumber
  updateOne.isActive = params.isActive
  updateOne.offerDiscount = params.offerDiscount
  updateOne.urlSlug = params.urlSlug
  updateOne.pageTitle = params.pageTitle
  updateOne.metaKeywords = params.metaKeywords
  updateOne.metaDescription = params.metaDescription
  await updateOne.save()
  return updateOne
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(_id) {
  const category = await categoryModel.findOne({ _id: _id })
  category.remove()
  return true
}
