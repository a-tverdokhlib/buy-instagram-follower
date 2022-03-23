const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, autoLikePackRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createAutoLikePack,
    get: searchAutoLikePacks,
    put: updateAutoLikePack,
  }),
)

async function createAutoLikePack(req, res) {
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
  const autoLikePack = await autoLikePackRepo.find({ name: name })
  if (!autoLikePack) {
    const autoLikePackAdded = await autoLikePackRepo
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
      data: autoLikePackAdded,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'Autolike pack you are going to add does already exists',
    })
  }
}

async function updateAutoLikePack(req, res) {
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
  const updatedOne = await autoLikePackRepo.update(_id, {
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

async function searchAutoLikePacks(req, res) {
  console.log('Cookies =>', req.cookies)
  const { keyword } = req.query
  if (keyword === '') {
    const autoLikePacks = await autoLikePackRepo.getAll()
    return res.status(200).json({
      data: autoLikePacks,
      count: autoLikePacks.length,
    })
  }

  const autoLikePackOne = await autoLikePackRepo.find({ name: keyword })
  if (!autoLikePackOne) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: autoLikePackOne,
  })
}
