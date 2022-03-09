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
  console.log('New Category to Create =>', newCategory)
  const addedOne = await newCategory.save()
  return addedOne
}

async function update(id, params) {}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id) {}
