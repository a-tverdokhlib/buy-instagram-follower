export type EditDialogProps = {
  readonly autoLikePack: any
  readonly providers: any
  readonly onClose: () => void
  readonly onAutoLikePackCreated: (d) => void
  readonly onAutoLikePackUpdated: (d) => void
}
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  basic,
  complex,
  formatting,
} from 'suneditor-react/dist/misc/buttonList'
import * as Yup from 'yup'

import { Loading } from '@/components/atoms/Loading'
import { SmallLoading } from '@/components/atoms/SmallLoading'
import { setThemeMode } from '@/redux/reducers/admin/panel'
import {
  setSidebarColor,
  setSideMenuLayout,
} from '@/redux/reducers/admin/sideMenu'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { autoLikePackService } from '@/services/autoLikePack'
import { providerService } from '@/services/provider'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const EditDialog: React.VFC<EditDialogProps> = (props) => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)
  // const [code, setCode] = useState('myMonacoEditor')
  const [_id, set_Id] = useState(
    props.autoLikePack ? props.autoLikePack._id : '-1',
  )
  const [name, setName] = useState(
    props.autoLikePack ? props.autoLikePack.name : '',
  )
  const [coupanCode, setCoupanCode] = useState(
    props.autoLikePack ? props.autoLikePack.coupanCode : '',
  )
  const [coupanDiscount, setCoupanDiscount] = useState(
    props.autoLikePack ? props.autoLikePack.coupanDiscount : '',
  )
  const [content, setContent] = useState(
    props.autoLikePack ? props.autoLikePack.content : '',
  )
  const [checkoutCode, setCheckoutCode] = useState(
    props.autoLikePack ? props.autoLikePack.checkoutCode : '',
  )
  const [keyFeatures, setKeyFeatures] = useState(
    props.autoLikePack ? props.autoLikePack.keyFeatures : '',
  )
  const [price, setPrice] = useState(
    props.autoLikePack ? props.autoLikePack.price : '',
  )
  const [isActive, setIsActive] = useState(
    props.autoLikePack ? props.autoLikePack.isActive : false,
  )
  const [imageUrl, setImageUrl] = useState(
    props.autoLikePack ? props.autoLikePack.imageUrl : '',
  )
  const [urlSlug, setUrlSlug] = useState(
    props.autoLikePack ? props.autoLikePack.urlSlug : '',
  )
  const [pageTitle, setPageTitle] = useState(
    props.autoLikePack ? props.autoLikePack.pageTitle : '',
  )
  const [metaKeywords, setMetaKeywords] = useState(
    props.autoLikePack ? props.autoLikePack.metaKeywords : '',
  )
  const [metaDescription, setMetaDescription] = useState(
    props.autoLikePack ? props.autoLikePack.metaDescription : '',
  )
  const [newPost, setNewPost] = useState(
    props.autoLikePack ? props.autoLikePack.newPost : '',
  )
  const [apiProviderId, setApiProviderId] = useState(
    props.autoLikePack ? props.autoLikePack.apiProviderId : '',
  )
  const [serviceItems, setServiceItems] = useState(
    props.autoLikePack
      ? props.autoLikePack.serviceItems !== undefined
        ? [...props.autoLikePack.serviceItems]
        : [{ serviceItem: '', minQuantity: '', maxQuantity: '' }]
      : [{ serviceItem: '', minQuantity: '', maxQuantity: '' }],
  )

  const [awaiting, setAwaiting] = useState(false)

  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }
  const [serviceList, setServiceList] = useState<any>([])
  const [loadingServices, setLoadingServices] = useState(false)

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  useEffect(() => {
    onApiProviderChange(apiProviderId)
  }, [apiProviderId])

  const onApiProviderChange = async (_id) => {
    if (_id === '0' || _id === undefined) setServiceList([])
    else {
      setLoadingServices(true)
      const resp = await providerService.getServiceList(_id)
      if (resp) {
        if (resp.status === 'success') {
          setServiceList(resp.data)
          setLoadingServices(false)
        }
      } else {
        setLoadingServices(false)
      }
    }
  }
  const onSubmit = async (data) => {
    setAwaiting(true)
    if (data._id === '-1' || data._id === '') {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      data['keyFeatures'] = keyFeatures
      data['serviceItems'] = serviceItems
      const autoLikePack = await autoLikePackService.create({
        ...data,
        content: content,
      })
      if (autoLikePack) {
        setAwaiting(false)
        props.onClose()
        props.onAutoLikePackCreated(autoLikePack.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    } else {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      data['keyFeatures'] = keyFeatures
      data['serviceItems'] = serviceItems
      const autoLikePack = await autoLikePackService.update({
        ...data,
        content: content,
      })
      if (autoLikePack) {
        setAwaiting(false)
        props.onClose()
        props.onAutoLikePackUpdated(autoLikePack.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    }
  }

  const onAddServiceClick = () => {
    console.log('Add Service Clicked')
    setServiceItems([
      ...serviceItems,
      { serviceItem: '', minQuantity: '', maxQuantity: '' },
    ])
  }

  const onRemoveServiceClick = (id) => {
    let newItems = [...serviceItems]
    newItems.splice(id, 1)
    setServiceItems(newItems)
  }
  return (
    <div className="admin-edit-category fixed right-1 top-1 h-[97vh] w-[98%] flex-col flex-wrap sm:w-[640px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
      <div className="flex fixed w-[98%] z-[100] sm:w-[640px] top-1 right-1 border-b-[1px] border-gray-300 bg-gray-100 p-5 rounded-t-xl">
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
        <span className="text-gray-900 font-semibold ml-2">
          Edit Subscription Plan
        </span>
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
        <div className="flex mt-14 flex-col flex-wrap w-full p-2 ls:p-5 space-y-5">
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Name</div>
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
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Coupan Code</div>
            <div className="flex w-full">
              <input
                {...register('coupanCode')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="text"
                placeholder=""
                value={coupanCode}
                onChange={(e) => setCoupanCode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Coupan Discount (In percentage %)</div>
            <div className="flex w-full">
              <input
                {...register('coupanDiscount')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="number"
                placeholder=""
                step="0.01"
                value={coupanDiscount}
                onChange={(e) => setCoupanDiscount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-black">Content</span>
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
                  console.log('Content =>', content)
                  setContent(content)
                }}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-black">Key Features</span>
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
                setContents={keyFeatures}
                onChange={(content) => {
                  // setToggle((value) => !value)
                  setKeyFeatures(content)
                }}
              />
            </div>
          </div>
          <div className="flex flex-row flex-nowrap w-full space-x-3">
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-black">Price</div>
              <div className="flex w-full">
                <input
                  {...register('price')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  type="number"
                  step="0.01"
                  placeholder=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-black">Status</div>
              <div className="flex w-full">
                <select
                  {...register('isActive')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                  placeholder="link"
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
            <div className="text-black">Image</div>
            <div className="flex w-full">
              <input
                {...register('imageUrl')}
                type="text"
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                placeholder=""
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
                <span className="ml-3 text-lg font-semibold">
                  Page SEO informations
                </span>
              </span>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-black">URL Slug</div>
              <div className="flex flex-col flex-wrap w-full ss:flex-nowrap ss:flex-row">
                <span className="h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black">
                  https://goread.io/subscription
                </span>
                <input
                  {...register('urlSlug')}
                  type="text"
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder=""
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
              <div className="text-black">Page Title</div>
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
              <div className="text-black">Meta Keywords</div>
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
              <div className="text-black">Meta description</div>
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
            <div className="text-black">New Post</div>
            <div className="flex w-full">
              <input
                {...register('newPost')}
                type="number"
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                placeholder=""
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="font-semibold text-red-600">
              <span>
                <span>
                  Note: Min Qty will treated as fix qty for simple Pack and keep
                  Max Qty value as 0
                </span>
              </span>
            </div>
            <div className="flex flex-col flex-wrap w-full space-y-3">
              <div className="flex flex-col flex-wrap w-full rounded-lg px-3 pt-3 pb-3 ss:px-5 ss:pt-5 ss:pb-5 border-[1px] border-gray-300 bg-gray-300">
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
                <div className="h-4"></div>
                {serviceItems.map((serviceItem, id) => {
                  return (
                    <div key={id} className="flex flex-col flex-wrap w-full">
                      <div className="flex flex-col flex-wrap w-full space-y-2 md:flex-row md:flex-nowrap md:space-x-2 md:space-y-0">
                        <div className="flex w-full text-gray-700 font-semibold">
                          <div className="w-full">
                            <span>
                              <span>Provider Listing Services</span>
                            </span>
                            <div>
                              <select
                                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-gray-500"
                                onChange={(e) =>
                                  setServiceItems([
                                    ...serviceItems.map((item, key) => {
                                      if (key === id) {
                                        return {
                                          serviceItem: e.target.value,
                                          minQuantity: item.minQuantity,
                                          maxQuantity: item.maxQuantity,
                                        }
                                      } else return item
                                    }),
                                  ])
                                }
                                value={serviceItem.serviceItem}
                              >
                                <option value="0">Select an Item</option>
                                {serviceList.map((serviceItem, id) => {
                                  return (
                                    <option
                                      key={id}
                                      value={serviceItem.service}
                                    >
                                      {serviceItem.service} - {serviceItem.name}
                                    </option>
                                  )
                                })}
                              </select>
                              <div
                                className={
                                  !loadingServices
                                    ? 'awaiting hidden relative -mt-[42px] w-[100%] h-full bg-opacity-50 bg-transparent rounded-lg z-[1002]'
                                    : 'awaiting relative -mt-[42px] flex items-center justify-center w-[100%] bg-opacity-50 bg-transparent rounded-lg z-[1002]'
                                }
                              >
                                <SmallLoading />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-row flex-nowrap space-x-2">
                          <div className="flex flex-col flex-wrap w-full">
                            <span>
                              <span className="text-gray-700 font-semibold">
                                Min Qty/Pkg
                              </span>
                            </span>
                            <input
                              type="number"
                              className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-black"
                              placeholder=""
                              value={serviceItem.minQuantity}
                              onChange={(e) =>
                                setServiceItems([
                                  ...serviceItems.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        serviceItem: item.serviceItem,
                                        minQuantity: e.target.value,
                                        maxQuantity: item.maxQuantity,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </div>
                          <div className="flex flex-col flex-wrap w-full">
                            <span>
                              <span className="text-gray-700 font-semibold">
                                Max Qty
                              </span>
                            </span>
                            <input
                              type="number"
                              className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-400 text-black"
                              placeholder=""
                              value={serviceItem.maxQuantity}
                              onChange={(e) =>
                                setServiceItems([
                                  ...serviceItems.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        serviceItem: item.serviceItem,
                                        minQuantity: item.minQuantity,
                                        maxQuantity: e.target.value,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {id !== 0 ? (
                        <div className="ml-auto py-2">
                          <span
                            onClick={() => onRemoveServiceClick(id)}
                            className="text-white text-sm ls:text-base px-2 ls:px-3 py-2 rounded-full hover:cursor-pointer hover:text-gray-400 bg-[#d81212] font-semibold transition-all duration-500"
                          >
                            Remove
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )
                })}
                <div className="flex items-center ml-auto mt-3">
                  <span
                    onClick={() => onAddServiceClick()}
                    className="bg-[#45aaf2] py-3 px-3 rounded-lg hover:cursor-pointer hover:bg-fuchsia-500 transition-colors duration-500"
                  >
                    Add Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap ss:flex-row ss:flex-nowrap w-full justify-end items-center p-5 space-x-0 space-y-3 ss:space-x-3 ss:space-y-0">
          <div
            onClick={props.onClose}
            className="bg-[#45aaf2] py-3 px-7 rounded-full hover:cursor-pointer hover:bg-fuchsia-500 transition-colors duration-500"
          >
            <span>
              <span>ADD NEW SERVICE VIA API</span>
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
            ? 'awaiting hidden fixed top-1 right-1 w-full h-[97vh] sm:w-[640px] bg-opacity-50 bg-gray-800 rounded-lg z-[1002]'
            : 'awaiting fixed flex items-center justify-center top-1 right-1 w-full h-[97vh] sm:w-[640px] bg-opacity-50 bg-gray-800 rounded-lg z-[1002]'
        }
      >
        <Loading />
      </div>
    </div>
  )
}
export default EditDialog
