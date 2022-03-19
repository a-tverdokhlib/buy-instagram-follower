import { createAction } from '@reduxjs/toolkit'

export const setProviders = createAction<any>('admin/providers/setProviders')
export const addProvider = createAction<any>('admin/providers/addProvider')
export const removeProvider = createAction<any>(
  'admin/providers/removeProvider',
)
export const removeProviders = createAction<any>(
  'admin/providers/removeProviders',
)
export const updateProvider = createAction<any>(
  'admin/providers/updateProvider',
)
export const deactiveProviders = createAction<any>(
  'admin/providers/deactiveProviders',
)
export const activeProviders = createAction<any>(
  'admin/providers/activeProviders',
)
