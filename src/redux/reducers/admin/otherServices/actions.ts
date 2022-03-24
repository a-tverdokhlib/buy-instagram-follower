import { createAction } from '@reduxjs/toolkit'

export const setServices = createAction<any>('admin/otherServices/setServices')
export const addService = createAction<any>('admin/otherServices/addService')
export const removeService = createAction<any>(
  'admin/otherServices/removeService',
)
export const removeServices = createAction<any>(
  'admin/otherServices/removeServices',
)
export const updateService = createAction<any>(
  'admin/otherServices/updateService',
)
export const deactiveServices = createAction<any>(
  'admin/otherServices/deactiveServices',
)
export const activeServices = createAction<any>(
  'admin/otherServices/activeServices',
)
