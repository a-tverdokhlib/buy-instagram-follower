import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const providerService = {
  create,
  update,
  _delete,
  search,
  deleteMany,
  deleteInactive,
  setStatus,
  getBalance,
  getServiceList,
}

function search(keyword) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.apiUrl}/provider?keyword=${keyword}`)
    .then((providers) => {
      return providers
    })
}

function create(data) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/provider`, data)
    .then((provider) => {
      return provider
    })
}

function update(data) {
  return fetchWrapper
    .put(`${publicRuntimeConfig.apiUrl}/provider`, data)
    .then((category) => {
      return category
    })
}

function _delete(_id) {
  return fetchWrapper
    .delete(
      `${publicRuntimeConfig.apiUrl}/provider/delete?_type=one&_id=${_id}`,
    )
    .then((data) => {
      return data
    })
}

function deleteInactive() {
  return fetchWrapper
    .delete(`${publicRuntimeConfig.apiUrl}/provider/delete?_type=inactive`)
    .then((data) => {
      return data
    })
}

function deleteMany(_ids) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/provider/delete`, { _ids: _ids })
    .then((data) => {
      return data
    })
}

function setStatus(_ids, status) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/provider/setStatus`, {
      _ids: _ids,
      status: status,
    })
    .then((data) => {
      return data
    })
}

function getBalance(_id) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.apiUrl}/provider/getBalance?_id=${_id}`)
    .then((data) => {
      return data
    })
}

function getServiceList(_id) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.apiUrl}/provider/getServices?_id=${_id}`)
    .then((data) => {
      return data
    })
}
