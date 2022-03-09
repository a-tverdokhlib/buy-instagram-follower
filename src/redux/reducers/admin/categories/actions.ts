import { createAction } from '@reduxjs/toolkit'

export const setCategories = createAction<any>('admin/categories/setCategories')
export const addCategory = createAction<any>('admin/categories/addCategory')
export const removeCategory = createAction<any>(
  'admin/categories/removeCategory',
)
