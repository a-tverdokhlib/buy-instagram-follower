type Props = {
  readonly providers: any
  readonly onRemoveConfirmed: (data) => void
  readonly onEditClicked: (data) => void
  readonly onUpdateBalanceClicked: (data, callback) => void
  readonly onServiceListClicked: (data) => void
  readonly onSwitchChanged: (e, data) => void
  readonly onCheckedListUpdated: (data) => void
}
import { ForwardRefRenderFunction, useEffect, useState } from 'react'
import React from 'react'
import Switch from 'react-switch'

import ConfirmDialog from '@/components/atoms/ConfirmDialog'
import { Loading } from '@/components/atoms/Loading'
import { SmallLoading } from '@/components/atoms/SmallLoading'
import { providerService } from '@/services/provider'
const MyComponentRenderFn: ForwardRefRenderFunction<any, Props> = (
  props,
  ref,
) => {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState({})
  const [checkedList, setCheckedList] = useState<String[]>([])
  const [allChecked, setAllChecked] = useState(false)
  const [updateingBalance, setUpdatingBalance] = useState(false)
  const [updatingBalanceId, setUpdatingBalanceId] = useState('')
  const clearCheckedList = () => {
    setCheckedList([])
  }
  const onEditClick = (category) => {
    props.onEditClicked(category)
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
        ...props.providers.map((item: { _id: any }) => item._id),
      ])
    } else if (checkedList.length === props.providers.length) {
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
  const updateBalance = async (provider) => {
    setUpdatingBalance(true)
    setUpdatingBalanceId(provider._id)
    props.onUpdateBalanceClicked(provider, () => {
      setUpdatingBalance(false)
    })
  }
  const onServiceList = (provider) => {
    props.onServiceListClicked(provider)
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
                        props.providers.length === checkedList.length
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
                    className="w-[150px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Balance
                  </th>
                  <th
                    scope="col"
                    className="w-[20px] text-base font-medium text-white px-6 py-4 border border-slate-400"
                  >
                    Description
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
                {props.providers.map((provider, id) => {
                  return (
                    <tr
                      key={provider._id}
                      className="bg-white border-b hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border border-slate-300">
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          checked={
                            checkedList.indexOf(provider._id) !== -1
                              ? true
                              : false
                          }
                          onChange={(e) => onCheckClicked(e, provider)}
                        />
                      </td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300">
                        {provider.name}
                      </td>
                      <td className="text-base text-gray-900 px-2 border border-slate-300">
                        <div className="flex w-full justify-end items-center">
                          {updateingBalance &&
                          updatingBalanceId === provider._id ? (
                            <SmallLoading />
                          ) : (
                            <></>
                          )}
                          <span className="flex">
                            <span>
                              {provider.balance
                                ? parseFloat(provider.balance).toFixed(2)
                                : ''}{' '}
                              {provider.currency}
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300"></td>
                      <td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap border border-slate-300">
                        <Switch
                          height={20}
                          width={50}
                          onChange={(e) => onSwitchChange(e, provider)}
                          checked={provider.isActive}
                        />
                      </td>
                      <td
                        className={
                          id === props.providers.length - 1
                            ? 'last-row text-base text-gray-900 whitespace-nowrap border border-slate-300 px-3'
                            : 'middle-row text-base text-gray-900 whitespace-nowrap border border-slate-300 px-3'
                        }
                      >
                        <div className="flex flex-row flex-nowrap w-full justify-center items-center">
                          <span
                            onClick={() => onEditClick(provider)}
                            className="tooltip flex w-10 h-full justify-center items-center py-3 border-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white  transition-all duration-500 delay-100"
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
                            <span className="tooltiptext px-3">Edit API</span>
                          </span>
                          <span
                            onClick={() => updateBalance(provider)}
                            className="tooltip flex w-10 h-full justify-center items-center py-3 border-b-[1px] border-t-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-500 delay-100"
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
                              <line x1="12" y1="1" x2="12" y2="23" />{' '}
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                            <span className="tooltiptext">Update Balance</span>
                          </span>
                          <span className="tooltip flex w-10 h-full justify-center items-center py-3 border-b-[1px] border-l-[1px] border-t-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-500 delay-100">
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
                              <polyline points="23 4 23 10 17 10" />{' '}
                              <polyline points="1 20 1 14 7 14" />{' '}
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                            </svg>
                            <span className="tooltiptext">Sync Services</span>
                          </span>
                          <span
                            onClick={() => onServiceList(provider)}
                            className="tooltip flex w-10 h-full justify-center items-center py-3 border-b-[1px] border-l-[1px] border-t-[1px] border-blue-600 hover:cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-500 delay-100"
                          >
                            <svg
                              className="h-4 w-4"
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
                              <line x1="9" y1="6" x2="20" y2="6" />{' '}
                              <line x1="9" y1="12" x2="20" y2="12" />{' '}
                              <line x1="9" y1="18" x2="20" y2="18" />{' '}
                              <line x1="5" y1="6" x2="5" y2="6.01" />{' '}
                              <line x1="5" y1="12" x2="5" y2="12.01" />{' '}
                              <line x1="5" y1="18" x2="5" y2="18.01" />
                            </svg>
                            <span className="tooltiptext">
                              Services list via API
                            </span>
                          </span>
                          <span
                            onClick={() => onRemoveClick(provider)}
                            className="tooltip flex w-10 h-full justify-center items-center py-3 border-[1px] border-red-600 hover:cursor-pointer hover:bg-red-600 text-red-600 hover:text-white  transition-all duration-500 delay-100"
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
                            <span className="tooltiptext">Delete</span>
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
                title="Delete Provider?"
                open={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={deleteConfirmed}
              >
                Are you sure you want to delete this provider?
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
export const ProviderList = React.forwardRef(MyComponentRenderFn)
