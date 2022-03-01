import { fetchWrapper } from 'helpers'
import getConfig from 'next/config'
import Router from 'next/router'
import { BehaviorSubject } from 'rxjs'

const { publicRuntimeConfig } = getConfig()

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user')!),
)

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value
  },
  login,
  logout,
}

function login(email, password) {
  return fetchWrapper
    .post(`${publicRuntimeConfig.apiUrl}/users/authenticate`, {
      email,
      password,
    })
    .then((user) => {
      userSubject.next(user)
      localStorage.setItem('user', JSON.stringify(user))
      return user
    })
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user')
  userSubject.next(null)
  Router.push('/admin')
}
