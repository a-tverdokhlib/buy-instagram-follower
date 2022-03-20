export type EditDialogProps = {
  readonly provider: any
  readonly onClose: () => void
  readonly onProviderCreated: (d) => void
  readonly onProviderUpdated: (d) => void
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
  const [_id, set_Id] = useState(props.provider ? props.provider._id : '-1')
  const [name, setName] = useState(props.provider ? props.provider.name : '')
  const [url, setUrl] = useState(props.provider ? props.provider.url : '')
  const [apiKey, setApiKey] = useState(
    props.provider ? props.provider.apiKey : '',
  )
  const [isActive, setIsActive] = useState(
    props.provider ? props.provider.isActive : false,
  )
  const [description, setDescription] = useState(
    props.provider ? props.provider.description : '',
  )

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
      const provider = await providerService.create({
        ...data,
        description: description,
      })
      if (provider) {
        setAwaiting(false)
        props.onClose()
        props.onProviderCreated(provider.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    } else {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      const provider = await providerService.update({
        ...data,
        description: description,
      })
      if (provider) {
        setAwaiting(false)
        props.onClose()
        props.onProviderUpdated(provider.data)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    }
  }

  return (
    <div className="admin-edit-category fixed right-0 ls:right-1 top-1 h-[97vh] flex-col flex-wrap sm:w-[600px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
      <div className="flex fixed w-full z-[100] sm:w-[600px] top-1 ls:right-1 border-b-[1px] border-gray-300 bg-gray-100 p-5 rounded-t-xl">
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
        <span className="text-gray-900 font-semibold ml-2">Edit API</span>
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
            <div className="text-red-500 text-sm">
              <span>
                <span>
                  Note: This script supports most of all API Providers like:
                  justanotherpanel.com, followiz.com etc. So it doesnt support
                  another API provider which have different API Parameters
                </span>
              </span>
            </div>
            <div className="mt-3 text-gray-700 font-semibold">Name</div>
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
            <div className="text-gray-700 font-semibold">URL</div>
            <div className="flex w-full">
              <input
                {...register('url')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="text"
                placeholder=""
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">API Key</div>
            <div className="flex w-full">
              <input
                {...register('apiKey')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-black"
                type="text"
                placeholder=""
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Status</div>
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
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">Description</span>
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
                setContents={description}
                onChange={(content) => {
                  // setToggle((value) => !value)
                  setDescription(content)
                }}
              />
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
