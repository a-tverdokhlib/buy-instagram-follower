const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, growPackRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createGrowPack,
    get: searchGrowPacks,
    put: updateGrowPack,
  }),
)

async function createGrowPack(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const {
    name,
    coupanCode,
    coupanDiscount,
    content,
    checkoutCode,
    keyFeatures,
    price,
    isActive,
    imageUrl,
    urlSlug,
    pageTitle,
    metaKeywords,
    metaDescription,
    newPost,
    apiProviderId,
    serviceItems,
    _id,
  } = req.body
  const categoryOne = await growPackRepo.find({ name: name })
  if (!categoryOne) {
    const categoryAdded = await growPackRepo
      .create({
        name: name,
        coupanCode: coupanCode,
        coupanDiscount: coupanDiscount,
        content: content,
        checkoutCode: checkoutCode,
        keyFeatures: keyFeatures,
        price: price,
        isActive: isActive,
        imageUrl: imageUrl,
        urlSlug: urlSlug,
        pageTitle: pageTitle,
        metaKeywords: metaKeywords,
        metaDescription: metaDescription,
        newPost: newPost,
        apiProviderId: apiProviderId,
        serviceItems: serviceItems,
      })
      .catch((err) => {
        return res.status(500).json({
          msg: 'Error occured during save in database.',
          error: 500,
        })
      })
    return res.status(200).json({
      data: categoryAdded,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'Category you are going to add does already exists',
    })
  }
}

async function updateGrowPack(req, res) {
  console.log('Updating, Cookies =>', req.cookies)
  const {
    name,
    coupanCode,
    coupanDiscount,
    content,
    checkoutCode,
    keyFeatures,
    price,
    isActive,
    imageUrl,
    urlSlug,
    pageTitle,
    metaKeywords,
    metaDescription,
    newPost,
    apiProviderId,
    serviceItems,
    _id,
  } = req.body
  const updatedOne = await growPackRepo.update(_id, {
    name: name,
    coupanCode: coupanCode,
    coupanDiscount: coupanDiscount,
    content: content,
    checkoutCode: checkoutCode,
    keyFeatures: keyFeatures,
    price: price,
    isActive: isActive,
    imageUrl: imageUrl,
    urlSlug: urlSlug,
    pageTitle: pageTitle,
    metaKeywords: metaKeywords,
    metaDescription: metaDescription,
    newPost: newPost,
    apiProviderId: apiProviderId,
    serviceItems: serviceItems,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
  })
}

async function searchGrowPacks(req, res) {
  console.log('Cookies =>', req.cookies)
  const { keyword } = req.query
  if (keyword === '') {
    const growPacks = await growPackRepo.getAll()
    return res.status(200).json({
      data: growPacks,
      count: growPacks.length,
    })
  }

  const growPackOne = await growPackRepo.find({ name: keyword })
  if (!growPackOne) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: growPackOne,
  })
}
