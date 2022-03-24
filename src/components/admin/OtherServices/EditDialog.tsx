export type EditDialogProps = {
  readonly service: any
  readonly onClose: () => void
  readonly onServiceCreated: (d) => void
  readonly onServiceUpdated: (d) => void
}
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  basic,
  complex,
  formatting,
} from 'suneditor-react/dist/misc/buttonList'
import * as Yup from 'yup'

import { Loading } from '@/components/atoms/Loading'
import { setThemeMode } from '@/redux/reducers/admin/panel'
import {
  setSidebarColor,
  setSideMenuLayout,
} from '@/redux/reducers/admin/sideMenu'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { otherServiceService } from '@/services/otherService'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const EditDialog: React.VFC<EditDialogProps> = (props) => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)
  const [_id, set_Id] = useState(props.service ? props.service._id : '-1')
  const [name, setName] = useState(props.service ? props.service.name : '')
  const [minQuantity, setMinQuantity] = useState(
    props.service ? props.service.minQuantity : '',
  )
  const [maxQuantity, setMaxQuantity] = useState(
    props.service ? props.service.maxQuantity : '',
  )
  const [priceList, setPriceList] = useState(
    props.service
      ? props.service.priceList !== undefined
        ? [...props.service.priceList]
        : [{ quantity: '', regularPrice: '', salePrice: '' }]
      : [{ quantity: '', regularPrice: '', salePrice: '' }],
  )
  const [apiProviderId, setApiProviderId] = useState(
    props.service ? props.service.apiProviderId : '',
  )
  const [serviceItem, setServiceItem] = useState(
    props.service ? props.service.serviceItem : '',
  )
  const [rate, setRate] = useState(props.service ? props.service.rate : '')
  const [min, setMin] = useState(props.service ? props.service.min : '')
  const [max, setMax] = useState(props.service ? props.service.max : '')

  const [awaiting, setAwaiting] = useState(false)

  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const setLayoutMode = (e) => {
    dispatch(setSideMenuLayout(e))
  }

  const setColorOption = (e) => {
    dispatch(setSidebarColor(e))
  }

  const onSubmit = async (data) => {
    setAwaiting(true)
    if (data._id === '-1' || data._id === '') {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      data['priceList'] = priceList
      const service = await otherServiceService.create({
        ...data,
      })
      if (service) {
        setAwaiting(false)
        props.onClose()
        props.onServiceCreated(service.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    } else {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      data['priceList'] = priceList
      const service = await otherServiceService.update({
        ...data,
      })
      if (service) {
        setAwaiting(false)
        props.onClose()
        props.onServiceUpdated(service.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    }
  }
  const onRemoveClick = (id) => {
    let newList = [...priceList]
    newList.splice(id, 1)
    setPriceList(newList)
  }

  const onAddPriceItemClick = () => {
    setPriceList([
      ...priceList,
      { quantity: '', regularPrice: '', salePrice: '' },
    ])
  }
  return (
    <div className="admin-edit-category fixed right-1 top-1 h-[97vh] w-[98%] flex-col flex-wrap sm:w-[600px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
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
        <span className="text-gray-900 font-semibold ml-2">
          Edit Other Services
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
        <div className="flex mt-14 flex-col flex-wrap w-full p-3 ls:p-5 space-y-5">
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Name</div>
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
            <div className="text-gray-700 font-semibold">Min Quantity</div>
            <div className="flex w-full">
              <input
                {...register('minQuantity')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="number"
                placeholder=""
                value={minQuantity}
                onChange={(e) => setMinQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Max Quantity</div>
            <div className="flex w-full">
              <input
                {...register('maxQuantity')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="number"
                placeholder=""
                value={maxQuantity}
                onChange={(e) => setMaxQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="w-full overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="min-w-full text-center border-collapse">
                  <thead className="bg-gray-500">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-1 "
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-1 "
                      >
                        Regular Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-1 "
                      >
                        Sale Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-1 "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((priceItem, id) => {
                      return (
                        <tr
                          key={priceItem._id}
                          className="bg-transparent border-b border-gray-300"
                        >
                          <td className="text-base text-gray-500 px-2 py-2 whitespace-nowrap">
                            <input
                              className="h-10 w-full bg-transparent border-[1px] border-gray-300"
                              type="number"
                              value={priceItem.quantity}
                              onChange={(e) =>
                                setPriceList([
                                  ...priceList.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        quantity: e.target.value,
                                        regularPrice: item.regularPrice,
                                        salePrice: item.salePrice,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </td>
                          <td className="text-base text-gray-500 px-2 py-2 whitespace-nowrap">
                            <input
                              className="h-10 w-full bg-transparent border-[1px] border-gray-300"
                              type="number"
                              value={priceItem.regularPrice}
                              onChange={(e) =>
                                setPriceList([
                                  ...priceList.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        quantity: item.quantity,
                                        regularPrice: e.target.value,
                                        salePrice: item.salePrice,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </td>
                          <td className="text-base text-gray-500 px-2 py-2 whitespace-nowrap">
                            <input
                              className="h-10 w-full bg-transparent border-[1px] border-gray-300"
                              type="number"
                              value={priceItem.salePrice}
                              onChange={(e) =>
                                setPriceList([
                                  ...priceList.map((item, key) => {
                                    if (key === id) {
                                      return {
                                        quantity: item.quantity,
                                        regularPrice: item.regularPrice,
                                        salePrice: e.target.value,
                                      }
                                    } else return item
                                  }),
                                ])
                              }
                            />
                          </td>
                          <td className="text-base text-gray-700">
                            <div className="flex flex-row flex-nowrap w-full justify-center items-center">
                              <span
                                onClick={() => onRemoveClick(id)}
                                className="flex w-10 h-full justify-center items-center py-3 border-[1px] border-[#FF6275] bg-[#FF6275] hover:cursor-pointer hover:bg-red-600 text-white hover:text-white  transition-all duration-500 delay-100"
                              >
                                <svg
                                  className="h-4 w-4"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="4"
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
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <span
                onClick={() => onAddPriceItemClick()}
                className="bg-[#45aaf2] py-3 px-5 rounded-lg hover:cursor-pointer hover:bg-fuchsia-500 transition-colors duration-500"
              >
                ADD
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap w-full justify-end items-center p-5 space-x-5">
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
