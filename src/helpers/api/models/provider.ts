import mongoose from 'mongoose'

const ProviderSchema = new mongoose.Schema({
  name: String,
  url: String,
  apiKey: String,
  isActive: Boolean,
  description: String,
  balance: Number,
})

module.exports =
  mongoose.models['Provider'] || mongoose.model('Provider', ProviderSchema)
