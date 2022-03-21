type Props = {
  readonly categories: any
  readonly onRemoveConfirmed: (data) => void
  readonly onEditClicked: (data) => void
  readonly onViewClicked: (data) => void
  readonly onSwitchChanged: (e, data) => void
  readonly onCheckedListUpdated: (data) => void
}
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
        ...props.categories.map((item: { _id: any }) => item._id),
      ])
    } else if (checkedList.length === props.categories.length) {
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
            {/* <Table
              checkable={true}
              headers={['Name', 'Url Slug', 'Sort', 'Status', 'Action']}
              data={props.categories}
            /> */}
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
                        props.categories.length === checkedList.length
                          ? true
                          : false
                      }
                      onChange={(e) => onAllCheckClicked(e)}
                    />
                  </th>
                  <th
                    scope="col"
                    className="w-[280px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[300px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Url Slug
                  </th>
                  <th
                    scope="col"
                    className="w-[20px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Sort
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-white px-6 py-4 border border-slate-400"
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
                {props.categories.map((category, id) => {
                  return (
                    <tr
                      key={category._id}
                      className="bg-white border-b hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border border-slate-300">
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          checked={
                            checkedList.indexOf(category._id) !== -1
                              ? true
                              : false
                          }
                          onChange={(e) => onCheckClicked(e, category)}
                        />
                      </td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.name}
                      </td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.urlSlug}
                      </td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300">
                        {category.defaultSortingNumber}
                      </td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300">
                        <Switch
                          height={20}
                          width={50}
                          onChange={(e) => onSwitchChange(e, category)}
                          checked={category.isActive}
                        />
                      </td>
                      <td className="text-base text-gray-900 whitespace-nowrap border border-slate-300 px-3">
                        <div className="flex flex-row flex-nowrap w-full justify-center items-center">
                          <span
                            onClick={() => onEditClick(category)}
                            className="flex w-10 h-full justify-center items-center py-3 border-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white  transition-all duration-500 delay-100"
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
                            onClick={() => onViewClick(category)}
                            className="flex w-10 h-full justify-center items-center py-3 border-b-[1px] border-t-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-500 delay-100"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </span>
                          <span
                            onClick={() => onRemoveClick(category)}
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
export const CategoryList = React.forwardRef(MyComponentRenderFn)
