export type EditDialogProps = {
  readonly service: any
  readonly categories: any
  readonly providers: any
  readonly orderFors: any
  readonly parentPacks: any
  readonly onClose: () => void
  readonly onServiceCreated: (d) => void
  readonly onServiceUpdated: (d) => void
}
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Switch from 'react-switch'
import {
  basic,
  complex,
  formatting,
} from 'suneditor-react/dist/misc/buttonList'
import * as Yup from 'yup'

import { Loading } from '@/components/atoms/Loading'
import service from '@/pages/api/service'
import { setThemeMode } from '@/redux/reducers/admin/panel'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { providerService } from '@/services/provider'
import { serviceService } from '@/services/service'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const EditDialog: React.VFC<EditDialogProps> = (props) => {
  const [name, setName] = useState(props.service ? props.service.name : '')
  const [isMostPopular, setIsMostPopular] = useState(
    props.service ? props.service.isMostPopular : false,
  )
  const [isShownInActiveTab, setIsShownInActiveTab] = useState(
    props.service ? props.service.isShownInActiveTab : false,
  )
  const [categoryId, setCategoryId] = useState(
    props.service ? props.service.categoryId : '',
  )
  const [isInstagramSaves, setIsInstagramSaves] = useState(
    props.service ? props.service.isInstagramSaves : false,
  )
  const [parentPackId, setParentPackId] = useState(
    props.service ? props.service.parentPackId : '',
  )
  const [orderForId, setOrderForId] = useState(
    props.service ? props.service.orderForId : '',
  )
  const [coupanCode, setCoupanCode] = useState(
    props.service ? props.service.coupanCode : '',
  )
  const [coupanDiscount, setCoupanDiscount] = useState(
    props.service ? props.service.coupanDiscount : 0,
  )
  const [content, setContent] = useState(
    props.service ? props.service.content : '',
  )
  const [quantity, setQuantity] = useState(
    props.service ? props.service.quantity : '',
  )
  const [price, setPrice] = useState(props.service ? props.service.price : '')
  const [isActive, setIsActive] = useState(
    props.service ? props.service.isActive : false,
  )
  const [sortNumber, setSortNumber] = useState(
    props.service ? props.service.sortNumber : '',
  )
  const [imageUrl, setImageUrl] = useState(
    props.service ? props.service.imageUrl : '',
  )
  const [urlSlug, setUrlSlug] = useState(
    props.service ? props.service.urlSlug : '',
  )
  const [pageTitle, setPageTitle] = useState(
    props.service ? props.service.pageTitle : '',
  )
  const [metaKeywords, setMetaKeywords] = useState(
    props.service ? props.service.metaKeywords : '',
  )
  const [metaDescription, setMetaDescription] = useState(
    props.service ? props.service.metaDescription : '',
  )
  const [apiType, setApiType] = useState(
    props.service ? props.service.apiType : 'manual',
  )
  const [apiProviderId, setApiProviderId] = useState(
    props.service ? props.service.apiProviderId : '0',
  )
  const [serviceItem, setServiceItem] = useState(
    props.service ? props.service.serviceItem : '',
  )
  const [reelApiProviderId, setReelApiProviderId] = useState(
    props.service ? props.service.reelApiProviderId : '0',
  )
  const [reelServiceItem, setReelServiceItem] = useState(
    props.service ? props.service.reelServiceItem : '',
  )
  const [variations, setVariations] = useState(
    props.service
      ? props.service.variations !== undefined
        ? [...props.service.variations]
        : [{ variationDays: '', offPercent: '', isDefaultActive: false }]
      : [{ variationDays: '', offPercent: '', isDefaultActive: false }],
  )
  const [serviceList, setServiceList] = useState<any>([])
  const [reelServiceList, setReelServiceList] = useState<any>([])
  const [rate, setRate] = useState(props.service ? props.service.rate : '')
  const [min, setMin] = useState(props.service ? props.service.min : '')
  const [max, setMax] = useState(props.service ? props.service.max : '')
  const [_id, set_Id] = useState(props.service ? props.service._id : '-1')

  const [awaiting, setAwaiting] = useState(false)
  const [loadingServices, setLoadingServices] = useState(false)
  const [loadingReelServices, setLoadingReelServices] = useState(false)
  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  useEffect(() => {
    if (apiProviderId !== '') onApiProviderChange(apiProviderId)
  }, [apiProviderId])
  useEffect(() => {
    console.log('Service Item =>', serviceItem)
    if (serviceItem !== '') onServiceItemChanged(serviceItem)
  }, [serviceItem])
  useEffect(() => {
    if (reelApiProviderId !== '') onReelApiProviderChange(apiProviderId)
  }, [reelApiProviderId])
  useEffect(() => {
    if (reelServiceItem !== '') onReelServiceItemChanged(serviceItem)
  }, [reelServiceItem])
  const onSubmit = async (data) => {
    setAwaiting(true)
    if (data._id === '-1' || data._id === '') {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      data['isMostPopular'] = isMostPopular
      data['isShownInActiveTab'] = isShownInActiveTab
      data['isInstagramSaves'] = isInstagramSaves
      data['variations'] = variations
      data['rate'] = rate
      data['min'] = min
      data['max'] = max
      data['serviceItem'] = serviceItem
      data['reelServiceItem'] = reelServiceItem
      const service = await serviceService.create({
        ...data,
        content: content,
        apiType: apiType,
      })
      if (service) {
        setAwaiting(false)
        props.onClose()
        props.onServiceCreated(service)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    } else {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      data['isMostPopular'] = isMostPopular
      data['isShownInActiveTab'] = isShownInActiveTab
      data['isInstagramSaves'] = isInstagramSaves
      data['variations'] = variations
      data['rate'] = rate
      data['min'] = min
      data['max'] = max
      data['serviceItem'] = serviceItem
      data['reelServiceItem'] = reelServiceItem
      const service = await serviceService.update({
        ...data,
        content: content,
        apiType: apiType,
      })
      if (service) {
        setAwaiting(false)
        props.onClose()
        props.onServiceUpdated(service)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    }
  }
  const onAddSubClick = () => {
    setVariations([
      ...variations,
      { variationDays: '', offPercent: '', isDefaultActive: false },
    ])
  }

  const onRemoveSubClick = (id) => {
    let newVariations = [...variations]
    newVariations.splice(id, 1)
    setVariations(newVariations)
  }
  const onApiProviderChange = async (_id) => {
    if (_id === '0' || _id === undefined) setServiceList([])
    else {
      setLoadingServices(true)
      const resp = await providerService.getServiceList(_id)
      if (resp) {
        if (resp.status === 'success') {
          setServiceList(resp.data)
          setServiceItem(props.service.serviceItem)
          setLoadingServices(false)
        }
      } else {
        setLoadingServices(false)
      }
    }
  }
  const onServiceItemChanged = async (service) => {
    const selectedServices = serviceList.filter(
      (item) => item.service === service,
    )
    if (selectedServices.length > 0) {
      setRate(selectedServices[0].rate)
      setMin(selectedServices[0].min)
      setMax(selectedServices[0].max)
    }
  }
  const onReelApiProviderChange = async (_id) => {
    if (_id === '0' || _id === undefined) setReelServiceList([])
    else {
      setLoadingReelServices(true)
      const resp = await providerService.getServiceList(_id)
      if (resp) {
        if (resp.status === 'success') {
          setReelServiceList(resp.data)
          setReelServiceItem(props.service.reelServiceItem)
          setLoadingReelServices(false)
        }
      } else {
        setLoadingReelServices(false)
      }
    }
  }
  const onReelServiceItemChanged = async (service) => {}
  return (
    <div className="admin-edit-category fixed w-[98%] right-1 top-1 h-[97vh] flex-col flex-wrap sm:w-[600px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
      <div className="flex fixed w-[98%] z-[100] sm:w-[600px] top-1 right-1 border-b-[1px] border-gray-300 bg-gray-100 p-5 rounded-t-xl">
        <span className="font-semibold text-black">
          <svg
            className="h-6 w-6 text-gray-800"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{' '}
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{' '}
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg>
        </span>
        <span className="text-gray-900 font-semibold ml-2">Edit Service</span>
        <span className="ml-auto hover:cursor-pointer" onClick={props.onClose}>
          <svg
            className="h-6 w-6 text-gray-500"
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
            <line x1="18" y1="6" x2="6" y2="18" />{' '}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </div>
      <form onSubmit={handleSubmit((d) => onSubmit(d))}>
        <div className="flex mt-14 flex-col flex-wrap w-full p-5 space-y-5">
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Package Name</div>
            <div className="flex w-full">
              <input
                {...register('_id')}
                className="hidden"
                type="text"
                value={_id}
              />
              <input
                {...register('name')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex w-full">
              <Switch
                {...register('isMostPopular')}
                height={25}
                width={50}
                onChange={(e) => setIsMostPopular(e)}
                checked={isMostPopular}
              />
              <span>
                <span
                  className={
                    isMostPopular
                      ? 'text-gray-700 ml-3 font-semibold'
                      : 'text-gray-500 ml-3 font-semibold'
                  }
                >
                  Most Popular
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex w-full">
              <Switch
                {...register('isShownInActiveTab')}
                height={25}
                width={50}
                onChange={(e) => setIsShownInActiveTab(e)}
                checked={isShownInActiveTab}
              />
              <span>
                <span
                  className={
                    isShownInActiveTab
                      ? 'text-gray-700 ml-3 font-semibold'
                      : 'text-gray-500 ml-3 font-semibold'
                  }
                >
                  Show In Active Tab
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">
                  Choose a category
                </span>
              </span>
            </div>
            <div className="flex">
              <select
                {...register('categoryId')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {props.categories.map((item, id) => {
                  return (
                    <option key={id} value={item._id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex w-full">
              <Switch
                {...register('isInstagramSaves')}
                height={25}
                width={50}
                onChange={(e) => setIsInstagramSaves(e)}
                checked={isInstagramSaves}
              />
              <span>
                <span
                  className={
                    isInstagramSaves
                      ? 'text-gray-700 ml-3 font-semibold'
                      : 'text-gray-500 ml-3 font-semibold'
                  }
                >
                  Instagram Saves
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">
                  Choose a parent pack
                </span>
              </span>
            </div>
            <div className="flex">
              <select
                {...register('parentPackId')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                onChange={(e) => setParentPackId(e.target.value)}
                value={parentPackId}
              >
                {props.parentPacks.map((item, id) => {
                  return (
                    <option key={id} value={item._id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">Order For</span>
              </span>
            </div>
            <div className="flex">
              <select
                {...register('orderForId')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                onChange={(e) => setOrderForId(e.target.value)}
                value={orderForId}
              >
                {props.orderFors.map((item, id) => {
                  return (
                    <option key={id} value={item._id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Coupan Code</div>
            <div className="flex w-full">
              <input
                {...register('coupanCode')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="text"
                placeholder=""
                value={coupanCode}
                onChange={(e) => setCoupanCode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">
              <span>
                <span>Coupan Discount (In percentage %)</span>
              </span>
            </div>
            <div className="flex w-full">
              <input
                {...register('coupanDiscount')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="number"
                placeholder=""
                value={coupanDiscount}
                onChange={(e) => setCoupanDiscount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">Content</span>
              </span>
            </div>
            <div className="flex">
              <SunEditor
                height="350px"
                setOptions={{
                  buttonList: basic.concat(formatting), // Or Array of button list, eg. [['font', 'align'], ['image']]
                  // plugins: [font] set plugins, all plugins are set by default
                  // Other option
                }}
                setContents={content}
                onChange={(content) => {
                  // setToggle((value) => !value)
                  setContent(content)
                }}
              />
            </div>
          </div>

          <div className="flex flex-col flex-wrap ss:flex-row ss:flex-nowrap w-full space-y-3 ss:space-x-3 ss:space-y-0">
            <div className="flex flex-row flex-nowrap w-full space-x-3">
              <div className="flex flex-col flex-wrap w-full">
                <div className="text-gray-700 font-semibold">Quantity</div>
                <div className="flex w-full">
                  <input
                    {...register('quantity')}
                    className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-wrap w-full">
                <div className="text-gray-700 font-semibold">Price</div>
                <div className="flex w-full">
                  <input
                    {...register('price')}
                    className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                    type="number"
                    step=".01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">Status</div>
              <div className="flex w-full">
                <select
                  {...register('isActive')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                  value={isActive === true ? 'active' : 'inactive'}
                  onChange={(e) =>
                    setIsActive(e.target.value === 'active' ? true : false)
                  }
                >
                  <option value="active">Active</option>
                  <option value="inactive">Deactive</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Sort</div>
            <div className="flex w-full">
              <input
                {...register('sortNumber')}
                type="number"
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                value={sortNumber}
                onChange={(e) => setSortNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Image</div>
            <div className="flex w-full">
              <input
                {...register('imageUrl')}
                type="text"
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">
              <span className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />{' '}
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                <span>
                  <span className="ml-3 text-lg font-semibold">
                    Page SEO informations
                  </span>
                </span>
              </span>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">URL Slug</div>
              <div className="flex w-full">
                <span className="h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-700">
                  https://goread.io/
                </span>
                <input
                  {...register('urlSlug')}
                  type="text"
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder="buy-instagram-followers"
                  value={urlSlug}
                  onChange={(e) => setUrlSlug(e.target.value)}
                />
              </div>
              <div className="w-full">
                <span>
                  <span className="text-[#45aaf2] text-sm">
                    Ex: buy-instagram-followers, facebook-likes-buy etc
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">Page Title</div>
              <div className="flex w-full">
                <input
                  {...register('pageTitle')}
                  type="text"
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder=""
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">Meta Keywords</div>
              <div className="flex w-full">
                <textarea
                  {...register('metaKeywords')}
                  className="w-full p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder=""
                  rows={3}
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-gray-700 font-semibold">
                Meta description
              </div>
              <div className="flex w-full">
                <textarea
                  {...register('metaDescription')}
                  className="w-full p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder=""
                  rows={3}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">
                  Auto Instagram Followers create days variations
                </span>
              </span>
            </div>
            <div className="flex flex-col flex-wrap w-full px-3 py-5 border-[1px] border-gray-300">
              <div className="flex flex-col flex-wrap w-full">
                {variations.map((variation, id) => {
                  return (
                    <div
                      key={id}
                      className="flex flex-col flex-wrap w-full ss:flex-row ss:flex-nowrap ss:space-x-3 px-3 py-3"
                    >
                      <div className="flex flex-row flex-nowrap w-full space-x-3">
                        <div className="flex flex-col flex-wrap w-full">
                          <div className="text-gray-700 font-semibold">
                            Days
                          </div>
                          <div className="flex w-full">
                            <input
                              className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                              type="number"
                              step="0.01"
                              value={variation.variationDays}
                              onChange={(e) =>
                                setVariations([
                                  ...variations.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        variationDays: e.target.value,
                                        offPercent: item.offPercent,
                                        isDefaultActive: item.isDefaultActive,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-col flex-wrap w-full">
                          <div className="text-gray-700 font-semibold">
                            Off %
                          </div>
                          <div className="flex w-full">
                            <input
                              className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                              type="number"
                              step="0.01"
                              value={variation.offPercent}
                              onChange={(e) =>
                                setVariations([
                                  ...variations.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        variationDays: item.variationDays,
                                        offPercent: e.target.value,
                                        isDefaultActive: item.isDefaultActive,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row flex-nowrap w-full space-x-3">
                        <div className="flex flex-col flex-wrap w-full">
                          <span className="text-gray-700 w-10 font-semibold">
                            Default Active
                          </span>
                          <div className="flex w-full">
                            <Switch
                              height={25}
                              width={50}
                              checked={variation.isDefaultActive}
                              onChange={(e) =>
                                setVariations([
                                  ...variations.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        variationDays: item.variationDays,
                                        offPercent: item.offPercent,
                                        isDefaultActive: e,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-col flex-wrap items-center justify-center w-full">
                          <div className="w-full flex">
                            {id === 0 ? (
                              <span
                                onClick={onAddSubClick}
                                className="m-auto items-center"
                              >
                                <span className="text-white text-sm ls:text-base px-2 ls:px-3 py-2 rounded-full hover:cursor-pointer hover:text-gray-700 bg-[#45aaf2] font-semibold transition-all duration-500">
                                  Add Subs
                                </span>
                              </span>
                            ) : (
                              <span
                                onClick={() => onRemoveSubClick(id)}
                                className="m-auto items-center"
                              >
                                <span className="text-white text-sm ls:text-base px-2 ls:px-3 py-2 rounded-full hover:cursor-pointer hover:text-gray-400 bg-[#d81212] font-semibold transition-all duration-500">
                                  Remove
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Type</div>
            <div className="flex w-full">
              <div className="flex flex-row flex-nowrap space-x-5 w-full">
                <div
                  onClick={() => setApiType('manual')}
                  className="flex items-center hover:cursor-pointer"
                >
                  <span
                    className={
                      apiType === 'manual'
                        ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                        : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                    }
                  ></span>
                  <span className="ml-3 text-gray-700">Manual</span>
                </div>
                <div
                  onClick={() => setApiType('api')}
                  className="flex items-center hover:cursor-pointer"
                >
                  <span
                    className={
                      apiType === 'api'
                        ? 'check-mark h-5 w-5 bg-[#2daee3] rounded-full'
                        : 'check-mark h-5 w-5 bg-gray-300 rounded-full'
                    }
                  ></span>
                  <span className="ml-3 text-gray-700">API</span>
                </div>
              </div>
            </div>
          </div>
          {apiType === 'api' ? (
            <div className="flex flex-col flex-wrap w-full space-y-3">
              <div className="flex flex-col flex-wrap w-full rounded-lg px-3 pt-3 pb-7 ss:px-5 ss:pt-5 ss:pb-10 border-[1px] border-gray-300 bg-gray-300">
                <div className="text-gray-700 font-semibold">
                  API Provider Name
                </div>
                <div className="flex w-full">
                  <select
                    {...register('apiProviderId')}
                    className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-gray-500"
                    onChange={(e) => {
                      setApiProviderId(e.target.value)
                      // onApiProviderChange(e.target.value)
                    }}
                    value={apiProviderId}
                  >
                    <option value="0">Choose a Provider</option>
                    {props.providers.map((provider, id) => {
                      return (
                        <option key={id} value={provider._id}>
                          {provider.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="mt-5 text-gray-700 font-semibold">
                  <span>
                    <span>Provider Listing Services</span>
                  </span>
                </div>
                <div className="flex w-full">
                  <select
                    className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-gray-500"
                    onChange={(e) => {
                      setServiceItem(e.target.value)
                      // onServiceItemChanged(e.target.value)
                    }}
                    value={serviceItem}
                  >
                    {serviceList.map((serviceItem, id) => {
                      return (
                        <option key={id} value={serviceItem.service}>
                          {serviceItem.service} - {serviceItem.name}
                        </option>
                      )
                    })}
                  </select>
                  <div
                    className={
                      !loadingServices
                        ? 'awaiting hidden absolute w-[85%] h-full bg-opacity-50 bg-transparent rounded-lg z-[1002]'
                        : 'awaiting absolute flex items-center justify-center w-[85%] bg-opacity-50 bg-transparent rounded-lg z-[1002]'
                    }
                  >
                    <Loading />
                  </div>
                </div>
                <div className="mt-5 flex flex-col flex-wrap w-full space-y-2 md:flex-row md:flex-nowrap md:space-x-3 md:space-y-0">
                  <div className="flex flex-col flex-wrap w-full">
                    <span>
                      <span className="text-gray-700 font-semibold">
                        Rate per 1000($)
                      </span>
                    </span>
                    <span className="w-full border-gray-400 border-[1px] text-gray-700 p-3">
                      <span>{rate}</span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-wrap w-full">
                    <span>
                      <span className="text-gray-700 font-semibold">
                        Minimum Amount
                      </span>
                    </span>
                    <span className="w-full border-gray-400 border-[1px] text-gray-700 p-3">
                      <span>{min}</span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-wrap w-full">
                    <span>
                      <span className="text-gray-700 font-semibold">
                        Maximum Amount
                      </span>
                    </span>
                    <span className="w-full border-gray-400 border-[1px] text-gray-700 p-3">
                      <span>{max}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-wrap w-full rounded-lg px-3 pt-3 pb-7 ss:px-5 ss:pt-5 ss:pb-10 border-[1px] border-gray-300 bg-gray-300">
                <div className="text-gray-700 font-semibold">
                  API Provider Name(Try Again only reel views)
                </div>
                <div className="flex w-full">
                  <select
                    {...register('reelApiProviderId')}
                    className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-gray-500"
                    onChange={(e) => {
                      setReelApiProviderId(e.target.value)
                      // onApiProviderChange(e.target.value)
                    }}
                    value={reelApiProviderId}
                  >
                    <option value="0">Choose a Provider</option>
                    {props.providers.map((provider, id) => {
                      return (
                        <option key={id} value={provider._id}>
                          {provider.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="mt-5 text-gray-700 font-semibold">
                  <span>
                    <span>
                      Provider Listing Services(Try Again only reel views)
                    </span>
                  </span>
                </div>
                <div className="flex w-full">
                  <select
                    className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-gray-500"
                    onChange={(e) => {
                      setReelServiceItem(e.target.value)
                      // onServiceItemChanged(e.target.value)
                    }}
                    value={reelServiceItem}
                  >
                    {reelServiceList.map((serviceItem, id) => {
                      return (
                        <option key={id} value={serviceItem.service}>
                          {serviceItem.service} - {serviceItem.name}
                        </option>
                      )
                    })}
                  </select>
                  <div
                    className={
                      !loadingReelServices
                        ? 'awaiting hidden absolute w-[85%] h-full bg-opacity-50 bg-transparent rounded-lg z-[1002]'
                        : 'awaiting absolute flex items-center justify-center w-[85%] bg-opacity-50 bg-transparent rounded-lg z-[1002]'
                    }
                  >
                    <Loading />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col flex-wrap ss:flex-row ss:flex-nowrap w-full justify-end items-center p-5 space-x-0 space-y-3 ss:space-x-3 ss:space-y-0">
          <div
            onClick={() => {}}
            className="flex bg-[#45aaf2] py-3 px-4 ls:px-7 rounded-full hover:cursor-pointer hover:bg-fuchsia-500 transition-colors duration-500"
          >
            <span>
              <span className="text-sm ls:text-base">
                ADD NEW SERVICE VIA API
              </span>
            </span>
          </div>
          <input
            type="submit"
            className="flex bg-[#45aaf2] py-3 px-7 rounded-full hover:cursor-pointer hover:bg-fuchsia-500 transition-colors duration-500"
            value="SUBMIT"
          ></input>
          <div
            onClick={props.onClose}
            className="flex bg-gray-600 py-3 px-7 rounded-full hover:cursor-pointer hover:bg-gray-900 transition-colors duration-500"
          >
            <span>
              <span>CANCEL</span>
            </span>
          </div>
        </div>
      </form>
      <div
        className={
          !awaiting
            ? 'awaiting hidden fixed top-1 right-1 w-full h-[97vh] sm:w-[600px] bg-opacity-50 bg-gray-800 rounded-lg z-[1002]'
            : 'awaiting fixed flex items-center justify-center top-1 right-1 w-full h-[97vh] sm:w-[600px] bg-opacity-50 bg-gray-800 rounded-lg z-[1002]'
        }
      >
        <Loading />
      </div>
    </div>
  )
}
export default EditDialog
