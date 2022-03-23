import mongoose from 'mongoose'

const AutoLikePackSchema = new mongoose.Schema({
  name: String,
  coupanCode: String,
  coupanDiscount: Number,
  content: String,
  checkoutCode: String,
  keyFeatures: String,
  price: Number,
  isActive: Boolean,
  imageUrl: String,
  urlSlug: String,
  pageTitle: String,
  metaKeywords: String,
  metaDescription: String,
  newPost: Number,
  apiProviderId: String,
  serviceItems: [
    { serviceItem: String, minQuantity: Number, maxQuantity: Number },
  ],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports =
  mongoose.models['AutoLikePack'] ||
  mongoose.model('AutoLikePack', AutoLikePackSchema)
