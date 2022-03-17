const fs = require('fs')

import dbConnect from './lib/dbConnect'
var parentPackModel = require('./models/parentPack')

export const parentPackRepo = {
  getAll: () => parentPacks(),
  find: (x) => findParentPack(x),
  create,
}

async function parentPacks() {
  const parentPacks = await parentPackModel.find({})
  return parentPacks
}

async function findParentPack(where) {
  const parentPack = await parentPackModel.findOne(where)
  return parentPack
}

async function create(parentPack) {
  const newItem = new parentPackModel(parentPack)
  newItem.save()
}
