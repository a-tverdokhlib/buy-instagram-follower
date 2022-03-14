import { createAction } from '@reduxjs/toolkit'

export const setServices = createAction<any>('admin/services/setServices')
export const addService = createAction<any>('admin/services/addService')
export const removeService = createAction<any>('admin/services/removeService')
export const removeServices = createAction<any>('admin/services/removeServices')
export const updateService = createAction<any>('admin/services/updateService')
export const deactiveServices = createAction<any>(
  'admin/services/deactiveServices',
)
export const activeServices = createAction<any>('admin/services/activeServices')
