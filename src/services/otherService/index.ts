import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const otherServiceService = {
  create,
  update,
  _delete,
  search,
  deleteMany,
  deleteInactive,
  setStatus,
}

function search(keyword) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.apiUrl}/otherService?keyword=${keyword}`)
    .then((services) => {
      return services
    })
}

function create(data) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/otherService`, data)
    .then((service) => {
      return service
    })
}

function update(data) {
  return fetchWrapper
    .put(`${publicRuntimeConfig.apiUrl}/otherService`, data)
    .then((category) => {
      return category
    })
}

function _delete(_id) {
  return fetchWrapper
    .delete(
      `${publicRuntimeConfig.apiUrl}/otherService/delete?_type=one&_id=${_id}`,
    )
    .then((data) => {
      return data
    })
}

function deleteInactive() {
  return fetchWrapper
    .delete(`${publicRuntimeConfig.apiUrl}/otherService/delete?_type=inactive`)
    .then((data) => {
      return data
    })
}

function deleteMany(_ids) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/otherService/delete`, { _ids: _ids })
    .then((data) => {
      return data
    })
}

function setStatus(_ids, status) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/otherService/setStatus`, {
      _ids: _ids,
      status: status,
    })
    .then((data) => {
      return data
    })
}
