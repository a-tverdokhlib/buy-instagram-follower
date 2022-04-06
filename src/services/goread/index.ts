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
}

function getUserData(username) {
  return fetchWrapper
    .get(`https://goread.io/api/instanew/${username}`)
    .then((data) => {
      return data
    })
}
