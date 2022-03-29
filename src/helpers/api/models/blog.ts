import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  articleTitle: String,
  urlSlug: String,
  thumbImageUrl: String,
  postCategoryId: String,
  isActive: Boolean,
  sort: Number,
  metaKeywords: String,
  metaDescription: String,
  articleDescription: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.models['Blog'] || mongoose.model('Blog', BlogSchema)
