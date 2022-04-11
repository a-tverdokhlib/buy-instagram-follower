import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const goreadService = {
  getUserData,
  sendEmail,
}

function getUserData(username) {
  return fetchWrapper
    .get(`${publicRuntimeConfig.apiUrl}/instagram?username=${username}`)
    .then((data) => {
      return data
    })
}

function sendEmail(data) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/checkout/sendemail`, data)
    .then((resp) => {
      return resp
    })
}
