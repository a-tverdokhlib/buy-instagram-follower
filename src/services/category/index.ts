import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const categoryService = {
  create,
  update,
  _delete,
  search,
}

function search(keyword) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.apiUrl}/category?keyword=${keyword}`)
    .then((categories) => {
      return categories
    })
}

function create(data) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/category`, data)
    .then((category) => {
      return category
    })
}

function update(data) {
  return fetchWrapper
    .put(`${publicRuntimeConfig.apiUrl}/category`, {
      data,
    })
    .then((category) => {
      return category
    })
}

function _delete(id) {
  return fetchWrapper
    .delete(`${publicRuntimeConfig.apiUrl}/category/${id}`)
    .then((data) => {
      return data
    })
}
