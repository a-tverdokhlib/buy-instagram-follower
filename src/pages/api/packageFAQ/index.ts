const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, packageFAQRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createPackageFAQ,
    get: searchPackageFAQs,
    put: updatePackageFAQ,
  }),
)

async function createPackageFAQ(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const { categoryId, question, answer, isActive, _id } = req.body
  const packageFAQOne = await packageFAQRepo.find({ question: question })
  if (!packageFAQOne) {
    const packageFAQAdded = await packageFAQRepo
      .create({
        categoryId: categoryId,
        question: question,
        answer: answer,
        isActive: isActive,
      })
      .catch((err) => {
        return res.status(500).json({
          msg: 'Error occured during save in database.',
          error: 500,
        })
      })
    return res.status(200).json({
      data: packageFAQAdded,
      categoryId: categoryId,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'PackageFAQ you are going to add does already exists',
    })
  }
}

async function updatePackageFAQ(req, res) {
  console.log('Updating, Cookies =>', req.cookies)
  const { categoryId, question, answer, isActive, _id } = req.body
  console.log('New Category ID=>', categoryId)
  console.log('PackageFAQ ID=>', _id)

  const oldOne = await packageFAQRepo.find({ _id: _id })
  const updatedOne = await packageFAQRepo.update(_id, {
    categoryId: categoryId,
    question: question,
    answer: answer,
    isActive: isActive,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
    oldCategoryId: oldOne.categoryId,
  })
}

async function searchPackageFAQs(req, res) {
  console.log('Cookies =>', req.cookies)
  if (req.query === undefined) {
    const packageFAQs = await packageFAQRepo.getAll()
    return res.status(200).json({
      data: packageFAQs,
      count: packageFAQs.length,
    })
  }

  const packageFAQs = await packageFAQRepo.findPackageFAQs(req.query)
  if (!packageFAQs) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: packageFAQs,
  })
}
