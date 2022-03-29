import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  question: String,
  answer: String,
  imageUrl: String,
  isActive: Boolean,
  sort: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.models['Blog'] || mongoose.model('Blog', BlogSchema)
