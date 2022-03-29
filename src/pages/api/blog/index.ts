const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import { apiHandler, BlogRepo } from 'helpers/api'
import getConfig from 'next/config'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    post: createBlog,
    get: searchBlogs,
    put: updateBlog,
  }),
)

async function createBlog(req, res) {
  const {
    articleTitle,
    urlSlug,
    thumbImageUrl,
    postCategoryId,
    isActive,
    sort,
    metaKeywords,
    metaDescription,
    articleDescription,
    _id,
  } = req.body
  const BlogOne = await BlogRepo.find({ articleTitle: articleTitle })
  if (!BlogOne) {
    const BlogAdded = await BlogRepo.create({
      articleTitle: articleTitle,
      urlSlug: urlSlug,
      thumbImageUrl: thumbImageUrl,
      postCategoryId: postCategoryId,
      isActive: isActive,
      sort: sort,
      metaKeywords: metaKeywords,
      metaDescription: metaDescription,
      articleDescription: articleDescription,
    }).catch((err) => {
      return res.status(500).json({
        msg: 'Error occured during save in database.',
        error: 500,
      })
    })
    return res.status(200).json({
      data: BlogAdded,
    })
  } else {
    return res.status(417).json({
      error: 'duplication',
      msg: 'Blog you are going to add does already exists',
    })
  }
}

async function updateBlog(req, res) {
  const {
    articleTitle,
    urlSlug,
    thumbImageUrl,
    postCategoryId,
    isActive,
    sort,
    metaKeywords,
    metaDescription,
    articleDescription,
    _id,
  } = req.body
  const oldOne = await BlogRepo.find({ _id: _id })
  const updatedOne = await BlogRepo.update(_id, {
    articleTitle: articleTitle,
    urlSlug: urlSlug,
    thumbImageUrl: thumbImageUrl,
    postCategoryId: postCategoryId,
    isActive: isActive,
    sort: sort,
    metaKeywords: metaKeywords,
    metaDescription: metaDescription,
    articleDescription: articleDescription,
  })
  return res.status(200).json({
    status: 'success',
    data: updatedOne,
  })
}

async function searchBlogs(req, res) {
  if (req.query === undefined) {
    const blogs = await BlogRepo.getAll()
    return res.status(200).json({
      data: blogs,
      count: blogs.length,
    })
  }

  const blogs = await BlogRepo.findBlogs(req.query)
  if (!blogs) {
    return res.status(200).json({
      data: {},
    })
  }
  return res.status(200).json({
    data: blogs,
  })
}
