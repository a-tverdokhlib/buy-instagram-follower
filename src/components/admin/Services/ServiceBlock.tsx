import { ForwardRefRenderFunction, useEffect, useRef, useState } from 'react'
import React from 'react'

import { setServices } from '@/redux/reducers/admin/services'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { serviceService } from '@/services/service'

import { ServiceList } from './ServiceList'
type Props = {
  readonly category: any
  readonly setLoading: (b) => void
  readonly onEditClicked: (any) => void
  readonly onRemoveConfirmed: (any) => void
  readonly onSwitchChanged: (e, any) => void
  readonly onCheckedListUpdated: (String, any) => void
}
const MyComponentRenderFn: ForwardRefRenderFunction<any, Props> = (
  props,
  ref,
) => {
  const dispatch = useAppDispatch()
  const { services } = useAppSelector((state) => state.adminService)
  const [collapse, setCollapse] = useState(false)
  const refClearCheckedList = useRef<HTMLDivElement>(null)
  useEffect(() => {
    getServices()
  }, [])
  const getServices = async () => {
    const resp = await serviceService.search(`categoryId=${props.category._id}`)
    dispatch(setServices(resp))
  }
  const clearCheckedList = () => {
    console.log('Please clear')
    refClearCheckedList.current!.click()
  }
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  const onRemoveConfirmed = (service) => {
    props.onRemoveConfirmed(service)
  }
  const onCheckedListUpdated = (data) => {
    props.onCheckedListUpdated(props.category._id, data)
  }
  const onSwitchChanged = async (e, data) => {
    props.onSwitchChanged(e, data)
  }
  const onEditClicked = (service) => {
    props.onEditClicked(service)
  }
  const onViewClicked = (category) => {
    window.open(category.urlSlug)
  }

  return (
    <>
      <div className="w-full flex flex-row flex-nowrap pt-5 px-5 pb-0">
        <div className="flex">
          <span>
            <span className="text-gray-700 text-sm font-semibold ls:text-base ss:text-lg">
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
          services={services[`${props.category._id}`] || []}
          onEditClicked={(data) => onEditClicked(data)}
          onViewClicked={(data) => onViewClicked(data)}
          onRemoveConfirmed={(data) => onRemoveConfirmed(data)}
          onSwitchChanged={(e, data) => onSwitchChanged(e, data)}
          onCheckedListUpdated={(data) => onCheckedListUpdated(data)}
        />
      ) : (
        <></>
      )}
      <div
        ref={ref}
        onClick={() => clearCheckedList()}
        className="hidden"
      ></div>
    </>
  )
}
export const ServiceBlock = React.forwardRef(MyComponentRenderFn)
