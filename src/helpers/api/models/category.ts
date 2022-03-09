import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: String,
  content: String,
  checkoutCode: String,
  requiredField: String,
  socialNetwork: String,
  defaultSortingNumber: Number,
  isActive: Boolean,
  offerDiscount: Number,
  urlSlug: String,
  pageTitle: String,
  metaKeywords: String,
  metaDescription: String,
})

module.exports =
  mongoose.models['Category'] || mongoose.model('Category', CategorySchema)
