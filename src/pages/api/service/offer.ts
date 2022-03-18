const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, offerRepo, serviceRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'
const moment = require('moment-timezone')

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createOffer,
  }),
)

async function createOffer(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const { discount, startDate, endDate, _ids } = req.body

  const startDateLocal = moment.tz(startDate, 'Europe/Kiev')
  const endDateLocal = moment.tz(endDate, 'Europe/Kiev')
  console.log('Local start=>', startDateLocal)
  console.log('Local ehnd=>', endDateLocal)
  const ids = _ids.map((item) => {
    return item._id
  })
  if (ids.length === 0) {
    const services = await serviceRepo.getAll()
    services.map(async (service) => {
      const offer = await offerRepo.find({ service_id: service._id })
      if (!offer) {
        const createdOffer = await offerRepo.create({
          service_id: service._id,
          startDate: startDateLocal,
          endDate: endDateLocal,
          discount: discount,
        })
        service.offer = createdOffer._id
        service.save()
      } else {
        offerRepo.update(service._id, {
          startDate: startDateLocal,
          endDate: endDateLocal,
          discount: discount,
        })
      }
    })
  } else {
    const services = await serviceRepo.findServices({ _id: { $in: ids } })
    services.map(async (service) => {
      const offer = await offerRepo.find({ service_id: service._id })
      if (!offer) {
        const createdOffer = await offerRepo.create({
          service_id: service._id,
          startDate: startDateLocal,
          endDate: endDateLocal,
          discount: discount,
        })
        service.offer = createdOffer._id
        service.save()
      } else {
        offerRepo.update(service._id, {
          startDate: startDateLocal,
          endDate: endDateLocal,
          discount: discount,
        })
      }
    })
  }
  return res.status(200).json({
    status: 'success',
    data: { discount, startDate, endDate, _ids },
  })
}
