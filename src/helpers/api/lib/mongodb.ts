import mongoose from 'mongoose'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0]!.readyState) {
    // Use current db connection
    return handler(req, res)
  }
  // Use new db connection
  await mongoose.connect(serverRuntimeConfig.MONGODB_URI, {
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    // useNewUrlParser: true,
  })
  return handler(req, res)
}

export default connectDB
