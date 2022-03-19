import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import type { Reducer } from 'react'

import { adminCategoryReducer } from '@/redux/reducers/admin/categories'
import { adminPanelReducer } from '@/redux/reducers/admin/panel'
import { adminProviderReducer } from '@/redux/reducers/admin/providers'
import { adminServiceReducer } from '@/redux/reducers/admin/services'
import { sideMenuReducer } from '@/redux/reducers/admin/sideMenu'
import { autoFollowersReducer } from '@/redux/reducers/autoFollowers'
import { autoLikesReducer } from '@/redux/reducers/autoLikes'
import { blogReducer } from '@/redux/reducers/blog'
import { commentsReducer } from '@/redux/reducers/comments'
import { customCommentsReducer } from '@/redux/reducers/customComments'
import { followersReducer } from '@/redux/reducers/followers'
import { growthReducer } from '@/redux/reducers/growth'
import { likesReducer } from '@/redux/reducers/likes'
import { storyViewsReducer } from '@/redux/reducers/storyViews'
import { viewsReducer } from '@/redux/reducers/views'
const combinedReducer = combineReducers({
  followers: followersReducer,
  likes: likesReducer,
  views: viewsReducer,
  comments: commentsReducer,
  growth: growthReducer,
  autoLikes: autoLikesReducer,
  customComments: customCommentsReducer,
  storyViews: storyViewsReducer,
  autoFollowers: autoFollowersReducer,
  blog: blogReducer,
  sideMenu: sideMenuReducer,
  adminPanel: adminPanelReducer,
  adminCategory: adminCategoryReducer,
  adminProvider: adminProviderReducer,
  adminService: adminServiceReducer,
})

const reducer: Reducer<ReturnType<typeof combinedReducer>, AnyAction> | any = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action['payload'], // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer,
  })

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper(makeStore, { debug: true })
