const fs = require('fs')

import dbConnect from './lib/dbConnect'
var BlogModel = require('./models/blog')

export const BlogRepo = {
  getAll: () => allBlogs(),
  find: (x) => findBlog(x),
  findBlogs: (x) => findBlogs(x),
  create,
  update,
  delete: _delete,
  deleteMany: deleteMany,
  deleteInactive: deleteInactive,
  setStatus: setStatus,
}

async function allBlogs() {
  const blogs = await BlogModel.find({})
  return blogs
}

async function findBlog(where) {
  const blog = await BlogModel.findOne(where)
  return blog
}

async function findBlogs(where) {
  const blogs = await BlogModel.find(where)
  return blogs
}

async function create(blog) {
  const newBlog = new BlogModel(blog)
  const addedOne = await newBlog.save()
  return addedOne
}

async function update(_id, params) {
  const updateOne = await BlogModel.findOne({ _id: _id })
  updateOne.articleTitle = params.articleTitle
  updateOne.urlSlug = params.urlSlug
  updateOne.thumbImageUrl = params.thumbImageUrl
  updateOne.postCategoryId = params.postCategoryId
  updateOne.isActive = params.isActive
  updateOne.sort = params.sort
  updateOne.metaKeywords = params.metaKeywords
  updateOne.metaDescription = params.metaDescription
  updateOne.articleDescription = params.articleDescription
  await updateOne.save()
  return updateOne
}

async function _delete(_id) {
  const blog = await BlogModel.findOne({ _id: _id })
  blog.remove()
  return true
}

async function deleteMany(_ids) {
  await BlogModel.deleteMany({ _id: { $in: _ids } })
  return true
}

async function deleteInactive() {
  const inactiveIds = await BlogModel.find({ isActive: false }).select('_id')
  await BlogModel.deleteMany({ isActive: false })
  return inactiveIds
}

async function setStatus(_ids, status) {
  await BlogModel.update({ _id: { $in: _ids } }, { $set: { isActive: status } })
  return true
}
