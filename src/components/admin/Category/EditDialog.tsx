export type EditDialogProps = {
  readonly onClose: () => void
  readonly onCategoryCreated: (d) => void
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
import { categoryService } from '@/services/category'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const EditDialog: React.VFC<EditDialogProps> = (props) => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.adminPanel)
  const { layout } = useAppSelector((state) => state.sideMenu)
  const { sidebarColor } = useAppSelector((state) => state.sideMenu)
  const [code, setCode] = useState('myMonacoEditor')

  const [name, setName] = useState('')
  const [checkoutCode, setCheckoutCode] = useState('')
  const [nameOfRequiredField, setNameOfRequiredField] = useState('')
  const [socialNetwork, setSocialNetwork] = useState('Instagram')
  const [defaultSortingNumber, setDefaultSortingNumber] = useState(0)
  const [status, setStatus] = useState('Active')
  const [offerDiscount, setOfferDiscount] = useState(0)
  const [urlSlug, setUrlSlug] = useState('')

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
    const category = await categoryService.create({
      ...data,
      content: 'contents',
    })
    if (category) {
      setAwaiting(false)
      props.onClose()
      props.onCategoryCreated(category.data)
    } else {
      setAwaiting(false)
      props.onClose()
    }
  }

  return (
    <div className="admin-edit-category fixed right-1 top-1 h-[97vh] flex-col flex-wrap sm:w-[600px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
      <div className="flex border-b-2 w-full p-5">
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
        <span className="text-gray-900 font-semibold ml-2">Edit Category</span>
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
        <div className="flex flex-col flex-wrap w-full p-5 space-y-5">
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Name</div>
            <div className="flex w-full">
              <input
                {...register('name')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                type="text"
                placeholder="Instagram Followers (Must be greater than 2 words)"
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
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">2checkout Product Code</div>
            <div className="flex w-full">
              <input
                {...register('checkoutCode')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Name of Required Field</div>
            <div className="flex w-full">
              <input
                {...register('requiredField')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="text"
                placeholder="link"
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Social Network Service</div>
            <div className="flex w-full">
              <select
                {...register('socialNetwork')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                placeholder="link"
              >
                <option value="instagram">Instagram</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap w-full space-x-3">
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-black">Default Sorting number</div>
              <div className="flex w-full">
                <input
                  {...register('defaultSortingNumber')}
                  type="number"
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                  placeholder=""
                ></input>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full">
              <div className="text-black">Status</div>
              <div className="flex w-full">
                <select
                  {...register('status')}
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-500"
                  placeholder="link"
                >
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-black">Set Offer Discount</div>
            <div className="flex w-full">
              <input
                {...register('offerDiscount')}
                type="number"
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                placeholder=""
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
              <div className="flex w-full">
                <span className="h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black">
                  https://goread.io/
                </span>
                <input
                  {...register('urlSlug')}
                  type="text"
                  className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                  placeholder="buy-instagram-followers"
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
                />
              </div>
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
