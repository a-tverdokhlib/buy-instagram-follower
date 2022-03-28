const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, FAQRepo } from 'helpers/api'
import getConfig from 'next/config'
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createFAQ,
    get: searchFAQs,
    put: updateFAQ,
  }),
)

async function createFAQ(req, res) {
  const { question, answer, isActive, sort, _id } = req.body
  const FAQOne = await FAQRepo.find({ question: question })
  if (!FAQOne) {
    const FAQAdded = await FAQRepo.create({
      question: question,
      answer: answer,
      isActive: isActive,
      sort: sort,
    }).catch((err) => {
      return res.status(500).json({
        msg: 'Error occured during save in database.',
        error: 500,
      })
    })
    return res.status(200).json({
      data: FAQAdded,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'FAQ you are going to add does already exists',
    })
  }
}

async function updateFAQ(req, res) {
  const { question, answer, isActive, sort, _id } = req.body
  const oldOne = await FAQRepo.find({ _id: _id })
  const updatedOne = await FAQRepo.update(_id, {
    question: question,
    answer: answer,
    isActive: isActive,
    sort: sort,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
  })
}

async function searchFAQs(req, res) {
  if (req.query === undefined) {
    const FAQs = await FAQRepo.getAll()
    return res.status(200).json({
      data: FAQs,
      count: FAQs.length,
    })
  }

  const FAQs = await FAQRepo.findFAQs(req.query)
  if (!FAQs) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: FAQs,
  })
}
