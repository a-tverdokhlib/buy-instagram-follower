import { createAction } from '@reduxjs/toolkit'

export const setBlogs = createAction<any>('admin/blogs/setBlogs')
export const addBlog = createAction<any>('admin/blogs/addBlog')
export const removeBlog = createAction<any>('admin/blogs/removeBlog')
export const removeBlogs = createAction<any>('admin/blogs/removeBlogs')
export const updateBlog = createAction<any>('admin/blogs/updateBlog')
export const deactiveBlogs = createAction<any>('admin/blogs/deactiveBlogs')
export const activeBlogs = createAction<any>('admin/blogs/activeBlogs')
