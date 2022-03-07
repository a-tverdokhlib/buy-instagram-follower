import { createAction } from '@reduxjs/toolkit'

export const setSideMenuLayout = createAction<any>('admin/sideMenu/setLayout')
export const setSidebarColor = createAction<any>(
  'admin/sideMenu/setSidebarColor',
)
