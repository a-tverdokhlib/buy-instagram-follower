import Head from 'next/head'
import { Ref, RefObject, useEffect, useRef, useState } from 'react'

import { categoryService } from '@/services/category'
import { serviceService } from '@/services/service'

import EditDialog from './EditDialog'
import Header from './Header'
import { ServiceList } from './ServiceList'
export type ServiceProps = {
  readonly isMobile: boolean
  readonly showOverlay: (b) => void
}
import React from 'react'

import AlertDialog from '@/components/atoms/AlertDialog'
import { Loading } from '@/components/atoms/Loading'
import { setCategories } from '@/redux/reducers/admin/categories'
import {
  activeServices,
  addService,
  deactiveServices,
  offerServices,
  removeService,
  removeServices,
  updateService,
} from '@/redux/reducers/admin/services'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'

import OfferDialog from './OfferDialog'
import { ServiceBlock } from './ServiceBlock'
const Services: React.VFC<ServiceProps> = (props) => {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector((state) => state.adminCategory)
  const [checkedList, setCheckedList] = useState<any[]>([])
  const [collapse, setCollapse] = useState(false)
  const [editDlgShow, setEditDlgShow] = useState(false)
  const [offerDlgShow, setOfferDlgShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [serviceToEdit, setServiceToEdit] = useState({})
  const [dropdownActionVisible, setDropdownActionVisible] = useState(false)
  const [dropdownSortbyVisible, setDropdownSortbyVisible] = useState(false)
  const [alertDescription, setAlertDescription] = useState('')
  const [refClearCheckedList, setRefClearCheckedList] = useState<
    RefObject<HTMLDivElement>[]
  >([])
  const [filteredCategoryID, setFilteredCategoryID] = useState('all')
  const [filteredCategories, setFilteredCategories] = useState(categories)

  const [orderFors, setOrderFors] = useState([])
  const [parentPacks, setParentPacks] = useState([])
  useEffect(() => {
    if (categories.length === 0) setLoading(true)
    getCategories()
    getOrderFors()
    getParentPacks()
  }, [])

  useEffect(() => {
    clearChecks()
    if (filteredCategoryID === 'all') {
      setFilteredCategories(categories)
    } else {
      setFilteredCategories(
        categories.filter((category) => category._id === filteredCategoryID),
      )
    }
  }, [categories, filteredCategoryID])
  useEffect(() => {
    filteredCategories.map((item, id) => {
      const refClearCheckedList1 = React.createRef<HTMLDivElement>()
      setRefClearCheckedList([...refClearCheckedList, refClearCheckedList1])
    })
  }, [filteredCategories])
  const clearChecks = () => {
    setCheckedList([])
    refClearCheckedList.map((item, id) => {
      const ref: RefObject<HTMLDivElement> = item
      if (ref.current !== null && ref.current !== undefined)
        ref.current!.click()
    })
  }
  const getCategories = async () => {
    const resp = await categoryService.search('')
    dispatch(setCategories(resp.data))
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }
  const getOrderFors = async () => {
    const resp = await serviceService.orderFors()
    setOrderFors(resp.data)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }
  const getParentPacks = async () => {
    const resp = await serviceService.parentPacks()
    setParentPacks(resp.data)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  const onAddNewClicked = () => {
    props.showOverlay(true)
    setServiceToEdit({})
    setEditDlgShow(true)
  }
  const onCloseEditDialog = () => {
    props.showOverlay(false)
    setEditDlgShow(false)
  }
  const onCloseOfferDialog = () => {
    props.showOverlay(false)
    setOfferDlgShow(false)
  }
  const onServiceCreated = (service) => {
    dispatch(addService(service))
  }
  const onServiceUpdated = (service) => {
    dispatch(updateService(service))
  }
  const onEditClicked = (service) => {
    props.showOverlay(true)
    setServiceToEdit(service)
    setEditDlgShow(true)
  }
  const onSwitchChanged = async (e, data) => {
    const service = { ...data }
    service.isActive = e
    const updatedService = await serviceService.update({ ...service })
    if (updatedService) {
      dispatch(updateService(updatedService))
    } else {
    }
  }
  const onRemoveConfirmed = async (service) => {
    setLoading(true)
    const resp = await serviceService._delete(service._id)
    if (resp) {
      setLoading(false)
      if (resp.status === 'success') dispatch(removeService(service))
    } else {
      setLoading(false)
    }
  }
  const onCheckedListUpdated = (categoryId, d) => {
    let list = [...checkedList]
    list = [...list.filter((item) => item.categoryId !== categoryId)]
    d.map((serviceId: string, id) => {
      const serviceIdList = [
        ...list.map((item, id) => {
          return item._id
        }),
      ]
      if (serviceIdList.indexOf(serviceId) >= 0) {
        // list = [...list.filter((item) => item.serviceId !== serviceId)]
      } else list = [...list, { _id: serviceId, categoryId: categoryId }]
    })
    setCheckedList(list)
  }
  const onActivateClick = async () => {
    if (!isActionAvailable()) {
      setAlertDescription('Please select any services to do action.')
      setShowAlert(true)
    }
    setLoading(true)
    const resp = await serviceService.setStatus(checkedList, true)
    if (resp) {
      setLoading(false)
      if (resp.status === 'success') {
        dispatch(activeServices(resp.data))
        clearChecks()
      }
    } else {
      setLoading(false)
    }
  }
  const onDeleteAllDeactivedClick = async () => {
    setLoading(true)
    const resp = await serviceService.deleteInactive()
    if (resp) {
      setLoading(false)
      if (resp.status === 'success') {
        dispatch(removeServices(resp.data))
        setAlertDescription(
          `You have removed ${resp.data.length} deactivated services.`,
        )
        setShowAlert(true)
      }
    } else {
      setLoading(false)
    }
  }
  const onDeactiveClick = async () => {
    if (!isActionAvailable()) {
      setAlertDescription('Please select any services to do action.')
      setShowAlert(true)
    }
    setLoading(true)
    const resp = await serviceService.setStatus(checkedList, false)
    if (resp) {
      setLoading(false)
      if (resp.status === 'success') {
        dispatch(deactiveServices(resp.data))
        clearChecks()
      }
    } else {
      setLoading(false)
    }
  }
  const onDeleteClick = async () => {
    if (!isActionAvailable()) {
      setAlertDescription('Please select any services to do action.')
      setShowAlert(true)
    }
    setLoading(true)
    const resp = await serviceService.deleteMany(checkedList)
    if (resp) {
      setLoading(false)
      if (resp.status === 'success') dispatch(removeServices(checkedList))
    } else {
      setLoading(false)
    }
  }
  const onOfferClick = () => {
    props.showOverlay(true)
    setOfferDlgShow(true)
  }
  const onOfferDlgSubmit = async (data) => {
    setLoading(true)
    const resp = await serviceService.createOffer({
      _ids: checkedList,
      startDate: data.startDate,
      endDate: data.endDate,
      discount: data.discount,
      filteredCategoryID: filteredCategoryID,
    })
    if (resp) {
      setLoading(false)
      setOfferDlgShow(false)
      if (resp.status === 'success') {
        dispatch(offerServices({ data: resp.data, filteredCategories }))
        clearChecks()
      }
    } else {
      setOfferDlgShow(false)
      setLoading(false)
    }
  }
  const isActionAvailable = () => {
    if (checkedList!.length <= 0) return false
    return true
  }
  return (
    <>
      <Head>
        <title>Admin Services</title>
      </Head>
      <div className="admin-category flex flex-col flex-wrap w-full min-h-screen bg-fuchsia-100">
        {/* <Header /> */}
        <div className="lg:top-16 h-[56px] flex items-center flex-row flex-nowrap bg-fuchsia-100">
          <div className="fixed w-full h-[56px] p-3 ss:p-8 z-10 bg-fuchsia-100 rounded-b-lg shadow-lg shadow-gray-700"></div>
          <div className="fixed w-full h-[56px] z-[11] flex items-center p-3 ss:p-8 hover:cursor-pointer">
            <div
              className="flex items-center -ml-5 px-5 py-2 rounded-full bg-fuchsia-100 bg-opacity-100"
              onClick={onAddNewClicked}
            >
              <span className="h-6 w-6 rounded-full flex items-center justify-center bg-gray-500 hover:bg-blue-500">
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
              <span className="text-black text-xl ml-1 hidden ss:block">
                Add new
              </span>
            </div>
          </div>
          <div className="fixed  z-[11] bg-fuchsia-100 bg-opacity-100 right-3 ss:right-8 flex flex-row flex-nowrap ls:space-x-3">
            <div
              tabIndex={0}
              onClick={() => setDropdownSortbyVisible(!dropdownSortbyVisible)}
              onBlur={() => {
                setDropdownSortbyVisible(false)
              }}
              className="dropdown mt-auto"
            >
              <div
                className={
                  dropdownSortbyVisible
                    ? 'flex px-2 ls:px-3 py-2 h-full flex-row flex-nowrap space-x-2 ls:space-x-3 items-center text-black border-[1px] border-gray-300 bg-gray-200 hover:cursor-pointer hover:bg-gray-200 transition-all duration-500'
                    : 'flex px-2 ls:px-3 py-2 h-full flex-row flex-nowrap space-x-2 ls:space-x-3 items-center text-black border-[1px] border-gray-300 hover:cursor-pointer hover:bg-gray-200 transition-all duration-500'
                }
              >
                <span>
                  <svg
                    className={
                      dropdownSortbyVisible
                        ? 'h-4 w-4 text-black'
                        : 'h-4 w-4 text-gray-600'
                    }
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
                    <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />{' '}
                    <rect x="9" y="3" width="6" height="4" rx="2" />{' '}
                    <line x1="9" y1="12" x2="9.01" y2="12" />{' '}
                    <line x1="13" y1="12" x2="15" y2="12" />{' '}
                    <line x1="9" y1="16" x2="9.01" y2="16" />{' '}
                    <line x1="13" y1="16" x2="15" y2="16" />
                  </svg>
                </span>
                <span className="text-sm whitespace-nowrap">Category</span>
                <span>
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
                </span>
              </div>
              {dropdownSortbyVisible ? (
                <div className="dropdown-content hover:cursor-pointer w-[270px] !bg-gray-200 left-0">
                  <div className="flex flex-col flex-wrap text-sm">
                    <a
                      onClick={() => setFilteredCategoryID('all')}
                      className="flex flex-row flex-nowrap w-full !text-black hover:!bg-gray-300"
                    >
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 text-red-500"
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
                          <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />{' '}
                          <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />{' '}
                          <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />{' '}
                          <line x1="11" y1="6" x2="20" y2="6" />{' '}
                          <line x1="11" y1="12" x2="20" y2="12" />{' '}
                          <line x1="11" y1="18" x2="20" y2="18" />
                        </svg>
                        <span className="ml-3 whitespace-nowrap">All</span>
                      </span>
                    </a>
                    {categories.map((category, id) => {
                      return (
                        <a
                          key={id}
                          onClick={() => setFilteredCategoryID(category._id)}
                          className="w-full h-9 !text-black hover:!bg-gray-300"
                        >
                          <span className="flex items-center">
                            {/* <svg
                              className="h-4 w-4 text-red-600"
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
                              <rect x="4" y="4" width="16" height="16" rx="4" />{' '}
                              <circle cx="12" cy="12" r="3" />{' '}
                              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg> */}
                            <span className="ml-3">{category.name}</span>
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              tabIndex={0}
              onClick={() => setDropdownActionVisible(!dropdownActionVisible)}
              onBlur={() => {
                setDropdownActionVisible(false)
              }}
              className="dropdown mt-auto"
            >
              <div
                className={
                  dropdownActionVisible
                    ? 'flex px-2 ls:px-3 py-2 flex-row flex-nowrap space-x-2 ls:space-x-3 items-center text-black border-[1px] border-gray-300 bg-gray-200 hover:cursor-pointer hover:bg-gray-200 transition-all duration-500'
                    : 'flex px-2 ls:px-3 py-2 flex-row flex-nowrap space-x-2 ls:space-x-3 items-center text-black border-[1px] border-gray-300 hover:cursor-pointer hover:bg-gray-200 transition-all duration-500'
                }
              >
                <span>
                  <svg
                    className={
                      dropdownActionVisible
                        ? 'h-4 w-4 text-black'
                        : 'h-4 w-4 text-gray-700'
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
                <span className="text-sm">
                  <span className="ls:hidden">&nbsp;</span>
                  <span className="hidden ls:block">Action</span>
                </span>
                <span>
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
                </span>
              </div>
              {dropdownActionVisible ? (
                <div className="dropdown-content hover:cursor-pointer !bg-gray-200 right-0">
                  <div className="flex flex-col flex-wrap w-60 text-sm ">
                    <a
                      onClick={onDeleteClick}
                      className="flex flex-row flex-nowrap w-full !text-black hover:!bg-gray-300"
                    >
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 text-red-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {' '}
                          <polyline points="3 6 5 6 21 6" />{' '}
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{' '}
                          <line x1="10" y1="11" x2="10" y2="17" />{' '}
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        <span className="ml-3">Delete</span>
                      </span>
                    </a>
                    <a
                      onClick={onDeleteAllDeactivedClick}
                      className="w-full !text-black hover:!bg-gray-300"
                    >
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 text-red-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {' '}
                          <polyline points="3 6 5 6 21 6" />{' '}
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{' '}
                          <line x1="10" y1="11" x2="10" y2="17" />{' '}
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        <span className="ml-3">All deactived Services</span>
                      </span>
                    </a>
                    <a
                      onClick={onDeactiveClick}
                      className="w-full !text-black hover:!bg-gray-300"
                    >
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 text-red-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {' '}
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />{' '}
                          <line x1="9" y1="9" x2="15" y2="15" />{' '}
                          <line x1="15" y1="9" x2="9" y2="15" />
                        </svg>
                        <span className="ml-3">Deactive</span>
                      </span>
                    </a>
                    <a
                      onClick={onActivateClick}
                      className="w-full !text-black hover:!bg-gray-300"
                    >
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-600"
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
                          <polyline points="9 11 12 14 20 6" />{' '}
                          <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                        </svg>
                        <span className="ml-3">Active</span>
                      </span>
                    </a>
                    <a
                      onClick={onOfferClick}
                      className="w-full !text-black hover:!bg-gray-300"
                    >
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-600"
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
                          <polyline points="9 11 12 14 20 6" />{' '}
                          <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                        </svg>
                        <span className="ml-3">Offer</span>
                      </span>
                    </a>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="admin-category-content -mt-1 w-full p-3 md:p-3">
          <div
            className={
              !collapse
                ? 'flex-col flex-wrap w-full bg-gray-300 bg-opacity-30 shadow-lg shadow-slate-400'
                : 'flex-col flex-wrap w-full bg-gray-300 bg-opacity-30 h-16 shadow-lg shadow-slate-400'
            }
          >
            {filteredCategories.map((item, id) => {
              const refClearCheckedList1 = refClearCheckedList.at(id)
              return (
                <div
                  key={id}
                  className="mt-10 ml-1 mr-1 rounded-lg shadow-lg shadow-gray-600"
                >
                  <ServiceBlock
                    ref={refClearCheckedList1}
                    category={item}
                    onEditClicked={(d) => onEditClicked(d)}
                    onCheckedListUpdated={(categoryId, d) =>
                      onCheckedListUpdated(categoryId, d)
                    }
                    onRemoveConfirmed={(d) => onRemoveConfirmed(d)}
                    onSwitchChanged={(e, data) => onSwitchChanged(e, data)}
                    setLoading={(b) => setLoading(b)}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {editDlgShow ? (
          <EditDialog
            service={serviceToEdit}
            categories={categories}
            orderFors={orderFors}
            parentPacks={parentPacks}
            onClose={onCloseEditDialog}
            onServiceCreated={(d) => onServiceCreated(d)}
            onServiceUpdated={(d) => onServiceUpdated(d)}
          />
        ) : (
          <></>
        )}
        {offerDlgShow ? (
          <OfferDialog
            onSubmit={onOfferDlgSubmit}
            onClose={onCloseOfferDialog}
          />
        ) : (
          <></>
        )}
      </div>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-opacity-0 bg-black">
          <Loading />
        </div>
      ) : (
        <></>
      )}
      <div>
        <AlertDialog
          title="Category"
          open={showAlert}
          onClose={() => setShowAlert(false)}
        >
          {alertDescription}
        </AlertDialog>
      </div>
    </>
  )
}
export default Services
