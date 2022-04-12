import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

export const cardinityService = {
  sign,
}

function sign(data) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/cardinity/sign`, data)
    .then((response) => {
      return response
    })
}
