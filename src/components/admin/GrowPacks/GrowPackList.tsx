type Props = {
  readonly growPacks: any
  readonly onRemoveConfirmed: (data) => void
  readonly onEditClicked: (data) => void
  readonly onViewClicked: (data) => void
  readonly onSwitchChanged: (e, data) => void
  readonly onCheckedListUpdated: (data) => void
}
import moment from 'moment'
import { ForwardRefRenderFunction, useEffect, useState } from 'react'
import React from 'react'
import Switch from 'react-switch'

import ConfirmDialog from '@/components/atoms/ConfirmDialog'

const MyComponentRenderFn: ForwardRefRenderFunction<any, Props> = (
  props,
  ref,
) => {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState({})
  const [checkedList, setCheckedList] = useState<String[]>([])
  const [allChecked, setAllChecked] = useState(false)
  const clearCheckedList = () => {
    setCheckedList([])
  }
  const onEditClick = (category) => {
    props.onEditClicked(category)
  }
  const onViewClick = (category) => {
    props.onViewClicked(category)
  }
  const onRemoveClick = (category) => {
    setCategoryToDelete(category)
    setConfirmOpen(true)
  }
  const deleteConfirmed = () => {
    props.onRemoveConfirmed(categoryToDelete)
  }
  const onAllCheckClicked = (e) => {
    if (checkedList.length === 0) {
      setCheckedList([
        ...checkedList,
        ...props.growPacks.map((item: { _id: any }) => item._id),
      ])
    } else if (checkedList.length === props.growPacks.length) {
      setCheckedList([])
    } else {
      setCheckedList([])
    }
  }
  const onCheckClicked = (e, category) => {
    if (checkedList.indexOf(category._id) !== -1)
      setCheckedList([...checkedList.filter((item) => item !== category._id)])
    else setCheckedList([...checkedList, category._id])
  }
  const onSwitchChange = async (e, category) => {
    props.onSwitchChanged(e, category)
  }
  useEffect(() => {
    props.onCheckedListUpdated(checkedList)
  }, [checkedList])
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto">
        <div className="py-0 inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-center border-collapse border border-slate-400">
              <thead className="border-b bg-gray-500">
                <tr>
                  <th
                    scope="col"
                    className="w-[20px] text-base font-medium text-white px-6 py-4  border border-slate-400"
                  >
                    <input
                      className="h-4 w-4"
                      type="checkbox"
                      checked={
                        props.growPacks.length === checkedList.length
                          ? true
                          : false
                      }
                      onChange={(e) => onAllCheckClicked(e)}
                    />
                  </th>
                  <th
                    scope="col"
                    className="w-[180px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="w-[240px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[70px] text-base font-medium text-white px-5 py-4 border border-slate-400"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="w-[80px] text-base font-medium text-white px-3 py-4 border border-slate-400"
                  >
                    Discount
                  </th>
                  <th
                    scope="col"
                    className="w-[180px] text-base font-medium whitespace-nowrap text-white px-2 py-4 border border-slate-400"
                  >
                    Updated On
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-white px-3 py-4 border border-slate-400"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.growPacks.map((growPack, id) => {
                  return (
                    <tr
                      key={growPack._id}
                      className="bg-white border-b hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border border-slate-300">
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          checked={
                            checkedList.indexOf(growPack._id) !== -1
                              ? true
                              : false
                          }
                          onChange={(e) => onCheckClicked(e, growPack)}
                        />
                      </td>
                      <td className="text-base text-gray-700 px-1 border border-slate-300">
                        {growPack._id}
                      </td>
                      <td className="text-base text-gray-900 px-1 py-4 border border-slate-300">
                        {growPack.name}
                      </td>
                      <td className="text-base text-gray-900 px-1 py-4 border border-slate-300">
                        {growPack.price}
                      </td>
                      <td className="text-base text-gray-700 px-1 py-4 border border-slate-300">
                        {growPack.coupanDiscount}
                      </td>
                      <td className="text-base text-gray-700 px-1 py-4 border border-slate-300">
                        {moment
                          .utc(growPack.updatedAt)
                          .local()
                          .format('Y-MM-DD hh:mm a')}
                      </td>
                      <td className="text-base text-gray-700 px-1 py-4 whitespace-nowrap border border-slate-300">
                        <Switch
                          height={20}
                          width={50}
                          onChange={(e) => onSwitchChange(e, growPack)}
                          checked={growPack.isActive}
                        />
                      </td>
                      <td className="text-base text-gray-900 whitespace-nowrap border border-slate-300 px-3">
                        <div className="flex flex-row flex-nowrap w-full justify-center items-center">
                          <span
                            onClick={() => onEditClick(growPack)}
                            className="flex w-10 h-full justify-center items-center py-3 border-l-[1px] border-t-[1px] border-b-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white  transition-all duration-500 delay-100"
                          >
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {' '}
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />{' '}
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </span>
                          <span
                            onClick={() => onRemoveClick(growPack)}
                            className="flex w-10 h-full justify-center items-center py-3 border-[1px] border-red-600 hover:cursor-pointer hover:bg-red-600 text-red-600 hover:text-white  transition-all duration-500 delay-100"
                          >
                            <svg
                              className="h-4 w-4"
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
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div>
              <ConfirmDialog
                title="Delete Category?"
                open={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={deleteConfirmed}
              >
                Are you sure you want to delete this category?
              </ConfirmDialog>
              <div
                ref={ref}
                onClick={() => setCheckedList([])}
                className="hidden"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const GrowPackList = React.forwardRef(MyComponentRenderFn)
