import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
  name: String,
  isMostPopular: Boolean,
  isShownInActiveTab: Boolean,
  categoryId: String,
  isInstagramSaves: Boolean,
  parentPackId: String,
  orderForId: String,
  coupanCode: String,
  coupanDiscount: Number,
  content: String,
  quantity: Number,
  price: Number,
  isActive: Boolean,
  sortNumber: Number,
  imageUrl: String,
  urlSlug: String,
  pageTitle: String,
  metaKeywords: String,
  metaDescription: String,
  apiType: String,
  variationDays: Number,
  offPercent: Number,
  isDefaultActive: Boolean,
  offer: { type: [mongoose.Schema.Types.ObjectId], ref: 'Offer' },
})

module.exports =
  mongoose.models['Service'] || mongoose.model('Service', ServiceSchema)
