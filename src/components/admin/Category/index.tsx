import Head from 'next/head'
import { useEffect, useState } from 'react'

import { categoryService } from '@/services/category'

import { CategoryList } from './CategoryList'
import EditDialog from './EditDialog'
import Header from './Header'
export type CategoryProps = {
  readonly isMobile: boolean
  readonly showOverlay: (b) => void
}
import { Loading } from '@/components/atoms/Loading'
import {
  addCategory,
  removeCategory,
  setCategories,
} from '@/redux/reducers/admin/categories'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
const Category: React.VFC<CategoryProps> = (props) => {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector((state) => state.adminCategory)

  const [collapse, setCollapse] = useState(false)
  const [editDlgShow, setEditDlgShow] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCategories()
  }, [])

  const getCategories = async () => {
    const categories = await categoryService.search('')
    dispatch(setCategories(categories.data))
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  const onAddNewClicked = () => {
    props.showOverlay(true)
    setEditDlgShow(true)
  }
  const onCloseEditDialog = () => {
    props.showOverlay(false)
    setEditDlgShow(false)
  }
  const onCategoryCreated = (category) => {
    dispatch(addCategory(category))
  }
  return (
    <>
      <Head>
        <title>Admin Services</title>
      </Head>
      <div className="flex flex-col flex-wrap w-full min-h-screen px-3 md:px-5 bg-fuchsia-100">
        <Header />
        <div className="flex flex-row flex-nowrap w-full p-8">
          <div
            onClick={onAddNewClicked}
            className="w-full flex items-center hover:cursor-pointer"
          >
            <span className="h-6 w-6 rounded-full flex items-center justify-center bg-[#dd80d6]">
              <svg
                className="h-5 w-5 text-white "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <line x1="12" y1="5" x2="12" y2="19" />{' '}
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
            <span className="text-black text-xl ml-1">Add new</span>
          </div>
          <div className="w-full ml-auto flex">
            <div className="w-full text-black">Sort by</div>
            <div className="w-full text-black">Action</div>
          </div>
        </div>
        <div
          className={
            !collapse
              ? 'flex flex-col flex-wrap w-full bg-gray-300 bg-opacity-30 h-screen shadow-lg shadow-slate-400'
              : 'flex flex-col flex-wrap w-full bg-gray-300 bg-opacity-30 h-16 shadow-lg shadow-slate-400'
          }
        >
          <div className="w-full flex flex-row flex-nowrap p-5">
            <div className="flex">
              <span>
                <span className="text-black text-xl">Instagram</span>
              </span>
            </div>
            <div className="flex ml-auto">
              <span
                onClick={toggleCollapse}
                className="p-2 hover:cursor-pointer"
              >
                {!collapse ? (
                  <svg
                    className="h-4 w-4 text-gray-500 hover:text-gray-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" />{' '}
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4 text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" />{' '}
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </span>
              <span className="p-2 hover:cursor-pointer">
                <svg
                  className="h-4 w-4 text-gray-500 hover:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
          {!collapse && categories ? (
            <CategoryList categories={categories} />
          ) : (
            <></>
          )}
        </div>
        {editDlgShow ? (
          <EditDialog
            onClose={onCloseEditDialog}
            onCategoryCreated={(d) => onCategoryCreated(d)}
          />
        ) : (
          <></>
        )}
      </div>
      {loading ? (
        <div className="fixed top-0 xl:-ml-[200px] flex items-center justify-center w-full h-full bg-opacity-0 bg-black">
          <Loading />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
export default Category
