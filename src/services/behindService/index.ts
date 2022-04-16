import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const behindService = {
  getUrlSlugs,
  getCategoryDataBySlug,
  getCategoryDataById,
  getProductDataById,
  getProductDataBySlug,
}

function getUrlSlugs() {
  return fetchWrapper
    .get(`${publicRuntimeConfig.behindApiUrl}/slugs`)
    .then((urlSlugs) => {
      return urlSlugs
    })
}
function getCategoryDataBySlug(slug) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.behindApiUrl}/category?slug=${slug}&type=slug`)
    .then((data) => {
      return data
    })
}
function getCategoryDataById(id) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.behindApiUrl}/category?id=${id}&type=id`)
    .then((data) => {
      return data
    })
}
function getProductDataById(categoryId) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.behindApiUrl}/category/services/${categoryId}`)
    .then((data) => {
      return data
    })
}
function getProductDataBySlug(slug) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.behindApiUrl}/service/${slug}`)
    .then((data) => {
      return data
    })
}
