const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, serviceRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createService,
    get: searchServices,
    put: updateService,
  }),
)

async function createService(req, res) {
  console.log('Creating, Cookies =>', req.cookies)
  const {
    name,
    isMostPopular,
    isShownInActiveTab,
    categoryId,
    isInstagramSaves,
    parentPackId,
    orderForId,
    coupanCode,
    coupanDiscount,
    content,
    quantity,
    price,
    isActive,
    sortNumber,
    imageUrl,
    urlSlug,
    pageTitle,
    metaKeywords,
    metaDescription,
    apiType,
    variations,
    _id,
  } = req.body
  const categoryOne = await serviceRepo.find({ name: name })
  if (!categoryOne) {
    const categoryAdded = await serviceRepo
      .create({
        name: name,
        isMostPopular: isMostPopular,
        isShownInActiveTab: isShownInActiveTab,
        categoryId: categoryId,
        isInstagramSaves: isInstagramSaves,
        parentPackId: parentPackId,
        orderForId: orderForId,
        coupanCode: coupanCode,
        coupanDiscount: coupanDiscount,
        content: content,
        quantity: quantity,
        price: price,
        isActive: isActive,
        sortNumber: sortNumber,
        imageUrl: imageUrl,
        urlSlug: urlSlug,
        pageTitle: pageTitle,
        metaKeywords: metaKeywords,
        metaDescription: metaDescription,
        apiType: apiType,
        variations: variations,
      })
      .catch((err) => {
        return res.status(500).json({
          msg: 'Error occured during save in database.',
          error: 500,
        })
      })
    return res.status(200).json({
      data: categoryAdded,
      categoryId: categoryId,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'Category you are going to add does already exists',
    })
  }
}

async function updateService(req, res) {
  console.log('Updating, Cookies =>', req.cookies)
  const {
    name,
    isMostPopular,
    isShownInActiveTab,
    categoryId,
    isInstagramSaves,
    parentPackId,
    orderForId,
    coupanCode,
    coupanDiscount,
    content,
    quantity,
    price,
    isActive,
    sortNumber,
    imageUrl,
    urlSlug,
    pageTitle,
    metaKeywords,
    metaDescription,
    apiType,
    variations,
    _id,
  } = req.body
  const oldOne = await serviceRepo.find({ _id: _id })
  const updatedOne = await serviceRepo.update(_id, {
    name: name,
    isMostPopular: isMostPopular,
    isShownInActiveTab: isShownInActiveTab,
    categoryId: categoryId,
    isInstagramSaves: isInstagramSaves,
    parentPackId: parentPackId,
    orderForId: orderForId,
    coupanCode: coupanCode,
    coupanDiscount: coupanDiscount,
    content: content,
    quantity: quantity,
    price: price,
    isActive: isActive,
    sortNumber: sortNumber,
    imageUrl: imageUrl,
    urlSlug: urlSlug,
    pageTitle: pageTitle,
    metaKeywords: metaKeywords,
    metaDescription: metaDescription,
    apiType: apiType,
    variations: variations,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
    oldCategoryId: oldOne.categoryId,
  })
}

async function searchServices(req, res) {
  console.log('Cookies =>', req.cookies)
  if (req.query === undefined) {
    const services = await serviceRepo.getAll()
    return res.status(200).json({
      data: services,
      count: services.length,
    })
  }

  const services = await serviceRepo.findServices(req.query)
  if (!services) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: services,
  })
}
