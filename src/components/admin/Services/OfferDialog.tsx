export type OfferDialogProps = {
  readonly onClose: () => void
  readonly onSubmit: (any) => void
}
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
// import DateTimePicker from 'react-datetime-picker'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Loading } from '@/components/atoms/Loading'

const OfferDialog: React.VFC<OfferDialogProps> = (props) => {
  const [discount, setDiscount] = useState('')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [awaiting, setAwaiting] = useState(false)

  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const onSubmit = async (data) => {
    props.onClose()
    props.onSubmit({ discount: data['discount'], startDate, endDate })
  }
  return (
    <div className="admin-edit-category w-[98%] fixed right-0 ls:right-1 top-1 h-[97vh] flex-col flex-wrap sm:w-[600px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] overflow-y-scroll ease-out duration-500">
      <div className="flex fixed w-[98%] z-[100] sm:w-[600px] top-1 ls:right-1 border-b-[1px] border-gray-300 bg-gray-100 p-5 rounded-t-xl">
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
        <span className="text-gray-900 font-semibold ml-2">Add Offer</span>
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
        <div className="flex mt-14 flex-col flex-wrap w-full p-5 space-y-12">
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Discount %</div>
            <div className="flex w-full">
              <input
                {...register('discount')}
                className="w-full h-12 p-3 bg-transparent border-[1px] border-gray-300 text-gray-900"
                type="number"
                step="0.01"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">Start Date</div>
            <div className="flex w-full">
              <DateTimePicker
                format="y-MM-dd hh:mm:ss a"
                className="w-full h-12 text-gray-700"
                onChange={(e) => setStartDate(e)}
                value={startDate}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <div className="text-gray-700 font-semibold">End Date</div>
            <div className="flex w-full">
              <DateTimePicker
                format="y-MM-dd hh:mm:ss a"
                className="w-full h-12 text-gray-700"
                onChange={(e) => setEndDate(e)}
                value={endDate}
              />
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
export default OfferDialog
