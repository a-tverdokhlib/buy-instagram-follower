import mongoose from 'mongoose'

const OtherServiceSchema = new mongoose.Schema({
  name: String,
  minQuantity: Number,
  maxQuantity: Number,
  priceList: [{ quantity: Number, regularPrice: Number, salePrice: Number }],
  apiProviderId: String,
  serviceItem: String,
  rate: Number,
  min: Number,
  max: Number,
  isActive: Boolean,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports =
  mongoose.models['OtherService'] ||
  mongoose.model('OtherService', OtherServiceSchema)
