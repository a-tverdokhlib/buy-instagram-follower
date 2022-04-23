import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  // _id: [mongoose.Schema.Types.ObjectId],
  username: String,
  email: String,
  price: Number,
  coupanCode: String,
  // itemId: { type: [mongoose.Schema.Types.ObjectId], ref: 'Service' },
  item: String,
  orderAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports =
  mongoose.models['Order'] || mongoose.model('Order', OrderSchema)
