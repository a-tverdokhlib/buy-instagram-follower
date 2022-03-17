import mongoose from 'mongoose'

const ParentPackSchema = new mongoose.Schema({
  name: String,
})

module.exports =
  mongoose.models['ParentPack'] ||
  mongoose.model('ParentPack', ParentPackSchema)
