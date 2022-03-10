import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  _id: [mongoose.Schema.Types.ObjectId],
  name: String,
  quantity: Number,
  price: Number,
})

module.exports =
  mongoose.models['Order'] || mongoose.model('Order', OrderSchema)
