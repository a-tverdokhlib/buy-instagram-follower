const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const sha256 = require('js-sha256')
const Cardinity = require('cardinity-nodejs')

import axios from 'axios'
import { apiHandler } from 'helpers/api'
import getConfig from 'next/config'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: makeSignature,
  }),
)

async function makeSignature(req, res) {
  const Client = Cardinity.client()
  const client = new Client(
    serverRuntimeConfig.cardinity.consumerKey,
    serverRuntimeConfig.cardinity.consumerSecret,
  )
  const {
    amount,
    cancel_url,
    currency,
    country,
    language,
    description,
    order_id,
    return_url,
  } = req.body

  var project_id = serverRuntimeConfig.cardinity.project_id
  var project_secret = serverRuntimeConfig.cardinity.project_secret

  var attributes = {
    return_url: return_url,
    amount: amount,
    cancel_url: cancel_url,
    country: country,
    language: language,
    currency: currency,
    description: description,
    order_id: order_id,
    project_id: project_id,
  }

  var keys = <any>[],
    message = ''

  Object.keys(attributes).map((k: string) => {
    if (attributes.hasOwnProperty(k)) {
      keys.push(k)
    }
  })

  keys.sort()
  keys.map((key) => {
    message += key + attributes[key]
  })

  const signature = sha256.hmac(project_secret, message)
  return res.status(200).json({
    signature: signature,
    project_id: project_id,
  })
}

// 'pan': '5555555555554444',
// 'exp_year': 2022,
// 'exp_month': 12,
// 'cvc': '222',
// 'holder': 'John Doe',
