import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  hash: String,
  token: String,
})

module.exports = mongoose.models['User'] || mongoose.model('User', UserSchema)
