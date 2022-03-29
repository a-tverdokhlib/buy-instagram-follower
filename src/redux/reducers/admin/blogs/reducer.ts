import { createReducer } from '@reduxjs/toolkit'

import {
  activeBlogs,
  addBlog,
  deactiveBlogs,
  removeBlog,
  removeBlogs,
  setBlogs,
  updateBlog,
} from './actions'

type AdminBlogState = {
  blogs: any[]
}

const initialState: AdminBlogState = {
  blogs: [],
}

export const adminBlogReducer = createReducer(initialState, (builder) => {
  builder.addCase(setBlogs, (state, action) => {
    state.blogs = action.payload
  })
  builder.addCase(addBlog, (state, action) => {
    state.blogs = [...state.blogs, action.payload]
  })
  builder.addCase(removeBlog, (state, action) => {
    const blog = action.payload
    const blogList = [...state.blogs.filter((item) => item._id !== blog._id)]
    state.blogs = blogList
  })
  builder.addCase(removeBlogs, (state, action) => {
    const removedIds = action.payload
    const blogList = [
      ...state.blogs.filter((item) => !removedIds.includes(item._id)),
    ]
    state.blogs = blogList
  })
  builder.addCase(updateBlog, (state, action) => {
    const blog = action.payload
    const blogList = [
      ...state.blogs.map((item) => {
        if (item._id === blog._id) {
          item.question = blog.question
          item.answer = blog.answer
          item.imageUrl = blog.imageUrl
          item.isActive = blog.isActive
          item.sort = blog.sort
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(deactiveBlogs, (state, action) => {
    const deactivatedIds = action.payload
    const blogList = [
      ...state.blogs.map((item) => {
        if (deactivatedIds.includes(item._id)) {
          item.isActive = false
          return item
        } else {
          return item
        }
      }),
    ]
  })
  builder.addCase(activeBlogs, (state, action) => {
    const activatedIds = action.payload
    const blogList = [
      ...state.blogs.map((item) => {
        if (activatedIds.includes(item._id)) {
          item.isActive = true
          return item
        } else {
          return item
        }
      }),
    ]
  })
})
