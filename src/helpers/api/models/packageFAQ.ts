import mongoose from 'mongoose'

const PackageFAQSchema = new mongoose.Schema({
  categoryId: String,
  question: String,
  answer: String,
  isActive: Boolean,
})

module.exports =
  mongoose.models['PackageFAQ'] ||
  mongoose.model('PackageFAQ', PackageFAQSchema)
