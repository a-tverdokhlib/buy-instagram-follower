import { useEffect, useRef, useState } from 'react'

import { setServices } from '@/redux/reducers/admin/services'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { serviceService } from '@/services/service'

import { ServiceList } from './ServiceList'
type Props = {
  readonly category: any
}
export const ServiceBlock: React.VFC<Props> = (props) => {
  const dispatch = useAppDispatch()
  const { services } = useAppSelector((state) => state.adminService)
  const [collapse, setCollapse] = useState(false)
  const refClearCheckedList = useRef<HTMLDivElement>(null)
  useEffect(() => {
    getServices()
  }, [])
  const getServices = async () => {
    const resp = await serviceService.search(`${props.category.name}`)
    dispatch(setServices(resp.data))
  }
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  const onRemoveConfirmed = async (category) => {
    // setLoading(true)
    // const resp = await categoryService._delete(category._id)
    // if (resp) {
    //   setLoading(false)
    //   if (resp.status === 'success') dispatch(removeCategory(category))
    // } else {
    //   setLoading(false)
    // }
  }
  const onCheckedListUpdated = (data) => {
    // setCheckedList(data)
  }
  const onSwitchChanged = async (e, data) => {
    // const category = { ...data }
    // category.isActive = e
    // const updatedCategory = await categoryService.update({ ...category })
    // if (updatedCategory) {
    //   dispatch(updateCategory(updatedCategory.data))
    // } else {
    // }
  }
  const onEditClicked = (category) => {
    // props.showOverlay(true)
    // setCategoryToEdit(category)
    // setEditDlgShow(true)
  }
  const onViewClicked = (category) => {
    window.open(category.urlSlug)
  }

  return (
    <>
      <div className="w-full flex flex-row flex-nowrap pt-5 px-5 pb-0">
        <div className="flex">
          <span>
            <span className="text-black text-sm ls:text-base ss:text-lg">
              {props.category.name}
            </span>
          </span>
        </div>
        <div className="flex ml-auto">
          <span onClick={toggleCollapse} className="p-2 hover:cursor-pointer">
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
      {!collapse ? (
        <ServiceList
          ref={refClearCheckedList}
          services={services[`${props.category.name}`] || []}
          onEditClicked={(data) => onEditClicked(data)}
          onViewClicked={(data) => onViewClicked(data)}
          onRemoveConfirmed={(data) => onRemoveConfirmed(data)}
          onSwitchChanged={(e, data) => onSwitchChanged(e, data)}
          onCheckedListUpdated={(data) => onCheckedListUpdated(data)}
        />
      ) : (
        <></>
      )}
    </>
  )
}
