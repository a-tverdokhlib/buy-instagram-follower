import mongoose from 'mongoose'

const OrderForSchema = new mongoose.Schema({
  name: String,
})

module.exports =
  mongoose.models['OrderFor'] || mongoose.model('OrderFor', OrderForSchema)
