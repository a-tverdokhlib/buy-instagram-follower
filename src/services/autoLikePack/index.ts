import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const autoLikePackService = {
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
    .get(`${publicRuntimeConfig.apiUrl}/autoLikePack?keyword=${keyword}`)
    .then((autoLikePacks) => {
      return autoLikePacks
    })
}

function create(data) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/autoLikePack`, data)
    .then((autoLikePack) => {
      return autoLikePack
    })
}

function update(data) {
  return fetchWrapper
    .put(`${publicRuntimeConfig.apiUrl}/autoLikePack`, data)
    .then((autoLikePack) => {
      return autoLikePack
    })
}

function _delete(_id) {
  return fetchWrapper
    .delete(
      `${publicRuntimeConfig.apiUrl}/autoLikePack/delete?_type=one&_id=${_id}`,
    )
    .then((data) => {
      return data
    })
}

function deleteInactive() {
  return fetchWrapper
    .delete(`${publicRuntimeConfig.apiUrl}/autoLikePack/delete?_type=inactive`)
    .then((data) => {
      return data
    })
}

function deleteMany(_ids) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/autoLikePack/delete`, { _ids: _ids })
    .then((data) => {
      return data
    })
}

function setStatus(_ids, status) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/autoLikePack/setStatus`, {
      _ids: _ids,
      status: status,
    })
    .then((data) => {
      return data
    })
}
