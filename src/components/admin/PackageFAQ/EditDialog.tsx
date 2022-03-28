export type EditDialogProps = {
  readonly packageFAQ: any
  readonly categories: any
  readonly onClose: () => void
  readonly onPackageFAQCreated: (d) => void
  readonly onPackageFAQUpdated: (d) => void
}

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Switch from 'react-switch'
import * as Yup from 'yup'

import { Loading } from '@/components/atoms/Loading'
import { setThemeMode } from '@/redux/reducers/admin/panel'
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { packageFAQService } from '@/services/packageFAQ'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const EditDialog: React.VFC<EditDialogProps> = (props) => {
  const [categoryId, setCategoryId] = useState(
    props.packageFAQ ? props.packageFAQ.categoryId : '',
  )
  const [question, setQuestion] = useState(
    props.packageFAQ ? props.packageFAQ.question : '',
  )
  const [answer, setAnswer] = useState(
    props.packageFAQ ? props.packageFAQ.answer : '',
  )
  const [isActive, setIsActive] = useState(
    props.packageFAQ ? props.packageFAQ.isActive : false,
  )
  const [_id, set_Id] = useState(props.packageFAQ ? props.packageFAQ._id : '-1')

  const [awaiting, setAwaiting] = useState(false)
  const [loadingPackageFAQs, setLoadingPackageFAQs] = useState(false)
  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const onSubmit = async (data) => {
    setAwaiting(true)
    if (data._id === '-1' || data._id === '') {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      const packageFAQ = await packageFAQService.create({
        ...data,
      })
      if (packageFAQ) {
        setAwaiting(false)
        props.onClose()
        props.onPackageFAQCreated(packageFAQ)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    } else {
      data['isActive'] = data['isActive'] === 'active' ? true : false
      const packageFAQ = await packageFAQService.update({
        ...data,
      })
      if (packageFAQ) {
        setAwaiting(false)
        props.onClose()
        props.onPackageFAQUpdated(packageFAQ)
      } else {
        setAwaiting(false)
        props.onClose()
      }
    }
  }
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
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">
                  Choose a category
                </span>
              </span>
            </div>
            <div className="flex">
              <input
                {...register('_id')}
                className="hidden"
                type="text"
                value={_id}
              />
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
            <div className="text-gray-700 font-semibold">Question</div>
            <div className="flex w-full">
              <input
                {...register('question')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="text"
                placeholder=""
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">
              <span>
                <span>Answer</span>
              </span>
            </div>
            <div className="flex w-full">
              <textarea
                {...register('answer')}
                className="w-full p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                placeholder=""
                rows={3}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="flex">
              <span>
                <span className="text-gray-700 font-semibold">Status</span>
              </span>
            </div>
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
        <div className="flex flex-col flex-wrap ss:flex-row ss:flex-nowrap w-full justify-end items-center p-5 space-x-0 space-y-3 ss:space-x-3 ss:space-y-0">
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
