const fs = require('fs')

import dbConnect from './lib/dbConnect'
var orderModel = require('./models/order')

export const orderRepo = {
  getAll: () => allOrders(),
  find: (x) => findOrder(x),
  create,
  update,
  delete: _delete,
}

async function allOrders() {
  const orders = await orderModel.find({})
  return orders
}

async function findOrder(where) {
  const order = await orderModel.findOne(where)
  return order
}

async function create(order) {
  const newOrder = new orderModel(order)
  const addedOne = await newOrder.save()
  return addedOne
}

async function update(id, params) {}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id) {}
