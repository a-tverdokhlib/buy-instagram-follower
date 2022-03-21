export type ServiceListDialogProps = {
  readonly serviceList: any
  readonly onClose: () => void
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
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks'
import { providerService } from '@/services/provider'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

const ServiceListDialog: React.VFC<ServiceListDialogProps> = (props) => {
  const [awaiting, setAwaiting] = useState(false)

  const validationSchema = Yup.object().shape({})
  const formOptions = { resolver: yupResolver(validationSchema) }

  return (
    <div className="admin-edit-category fixed right-0 ls:right-1 top-1 h-[97vh] w-full flex-col flex-wrap sm:w-[600px] lg:w-[1000px] bg-[#e8e8e9] shadow-lg shadow-cyan-700/50 rounded-xl z-[1001] ease-out duration-500 overflow-hidden">
      <div className="flex fixed w-full z-[100] sm:w-[600px] lg:w-[1000px] top-1 ls:right-1 border-b-[1px] border-gray-300 bg-gray-100 p-5 rounded-t-xl">
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
        <span className="text-gray-900 font-semibold ml-2">Service List</span>
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
      <div className="flex mt-14 flex-col flex-wrap w-full p-2 space-y-5 h-[94%]">
        <div className="overflow-x-auto w-full h-[95%] md:h-[96%]">
          <table className="min-w-full text-center border-collapse border border-slate-400">
            <thead className="border-b bg-gray-500">
              <tr>
                <th
                  scope="col"
                  className="w-[20px] text-sm font-medium text-white px-6 py-4  border border-slate-400"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="max-w-[280px] text-sm font-medium text-white px-6 py-4 border border-slate-400"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="w-[150px] text-sm font-medium text-white px-6 py-4 border border-slate-400"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="w-[20px] text-sm font-medium text-white px-6 py-4 border border-slate-400"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4 border border-slate-400"
                >
                  Min/Max
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4 border border-slate-400"
                >
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {props.serviceList.map((service, id) => {
                return (
                  <tr key={id} className="bg-white border-b hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                      <span>
                        <span>{service.service}</span>
                      </span>
                    </td>
                    <td className="max-w-[280px] text-sm text-gray-900 px-1 py-1 border border-slate-300">
                      <span>
                        <span>{service.name}</span>
                      </span>
                    </td>
                    <td className="max-w-[150px] [text-sm text-gray-900 px-6 py-4 border border-slate-300">
                      <span>
                        <span>{service.type}</span>
                      </span>
                    </td>
                    <td className="text-sm text-gray-900 px-1 py-1 border border-slate-300">
                      <span>
                        <span>{service.rate}</span>
                      </span>
                    </td>
                    <td className="text-sm text-gray-900 px-1 py-1 border border-slate-300">
                      <span>
                        <span>
                          {service.min} / {service.max}
                        </span>
                      </span>
                    </td>
                    <td className="max-w-[250px] text-sm text-gray-900 border border-slate-300 px-3">
                      <span>
                        <span>{service.category}</span>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

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
export default ServiceListDialog
