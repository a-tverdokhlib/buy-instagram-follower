import { createAction } from '@reduxjs/toolkit'

export const setCategories = createAction<any>('admin/categories/setCategories')
export const addCategory = createAction<any>('admin/categories/addCategory')
export const removeCategory = createAction<any>(
  'admin/categories/removeCategory',
)
export const removeCategories = createAction<any>(
  'admin/categories/removeCategories',
)
export const updateCategory = createAction<any>(
  'admin/categories/updateCategory',
)
export const deactiveCategories = createAction<any>(
  'admin/categories/deactiveCategories',
)
export const activeCategories = createAction<any>(
  'admin/categories/activeCategories',
)
