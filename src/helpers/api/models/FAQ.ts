import mongoose from 'mongoose'

const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String,
  isActive: Boolean,
  sort: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.models['FAQ'] || mongoose.model('FAQ', FAQSchema)
