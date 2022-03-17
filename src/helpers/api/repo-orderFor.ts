const fs = require('fs')

import dbConnect from './lib/dbConnect'
var orderForModel = require('./models/orderFor')

export const orderForRepo = {
  getAll: () => orderFors(),
  find: (x) => findOrderFor(x),
  create,
}

async function orderFors() {
  const orderFors = await orderForModel.find({})
  return orderFors
}

async function findOrderFor(where) {
  const orderFor = await orderForModel.findOne(where)
  return orderFor
}

async function create(orderFor) {
  const newItem = new orderForModel(orderFor)
  newItem.save()
}
