import mongoose from 'mongoose'

const OfferSchema = new mongoose.Schema({
  service_id: String,
  discount: String,
  startDate: Date,
  endDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports =
  mongoose.models['Offer'] || mongoose.model('Offer', OfferSchema)
