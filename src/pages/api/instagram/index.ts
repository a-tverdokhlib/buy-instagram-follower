const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
import axios from 'axios'
import { apiHandler } from 'helpers/api'
import getConfig from 'next/config'
import tunnel from 'tunnel'

import connectDB from '@/helpers/api/lib/mongodb'

const { serverRuntimeConfig } = getConfig()

export default connectDB(
  apiHandler({
    get: getUserInfo,
  }),
)

async function firstWay(username, host, port, auth, callback) {
  const agent = tunnel.httpsOverHttp({
    proxy: {
      host: host,
      port: port,
      proxyAuth: auth,
    },
  })

  const responsePromise = await axios.request({
    url: `https://www.instagram.com/${username}/?__a=1`,
    method: 'get',
    headers: {
      'User-Agent': 'Chrome',
    },
    httpsAgent: agent,
  })

  const respData = responsePromise.data
  if (respData.graphql !== undefined) {
    return respData.graphql
  } else {
    return null
  }
}

async function secondWay(username, host, port, auth, callback) {
  const axiosDefaultConfig = {
    baseURL: `https://www.instagram.com/${username}/?__a=1`,
    proxy: {
      host: host,
      port: port,
      protocol: 'http',
      auth: auth,
    },
  }

  const axiosFixed = require('axios-https-proxy-fix').create(axiosDefaultConfig)
  await axiosFixed
    .get()
    .then(async function (response) {
      console.log(response)
      if (response.data) {
        if (response.data.graphql !== undefined) {
          return response.data.graphql
        } else {
          return null
        }
      }
    })
    .catch(function (error) {
      return null
    })
}

async function getUserInfo(req, res) {
  const { username } = req.query
  if (username === '') {
    throw 'No username given'
  }
  const totalProxyCnt = 6
  let failedProxyCnt = 0

  //1st way
  firstWay(username, '138.68.76.104', 8058, 'admin:p8FNPlwEEh0R', (result) => {
    if (result) {
      return res.status(200).json({
        data: result,
        status: 'success',
      })
    } else {
      failedProxyCnt++
      if (failedProxyCnt === totalProxyCnt) {
        return res.status(200).json({
          data: {},
          status: 'success',
          message: 'All proxies failed',
        })
      }
    }
  })

  //2nd way
  secondWay(
    username,
    's2.airproxy.io',
    31005,
    {
      username: 'sanjananb',
      password: 'sanjananb',
    },
    (result) => {
      if (result) {
        return res.status(200).json({
          data: result,
          status: 'success',
        })
      } else {
        failedProxyCnt++
        if (failedProxyCnt === totalProxyCnt) {
          return res.status(200).json({
            data: {},
            status: 'success',
            message: 'All proxies failed',
          })
        }
      }
    },
  )

  //3rd way
  secondWay(
    username,
    's2.airproxy.io',
    30708,
    {
      username: 'sanjananb',
      password: 'sanjananb',
    },
    (result) => {
      if (result) {
        return res.status(200).json({
          data: result,
          status: 'success',
        })
      } else {
        failedProxyCnt++
        if (failedProxyCnt === totalProxyCnt) {
          return res.status(200).json({
            data: {},
            status: 'success',
            message: 'All proxies failed',
          })
        }
      }
    },
  )

  //4th way
  secondWay(
    username,
    's1.airproxy.io',
    10902,
    {
      username: 'sanjananb',
      password: 'sanjananb',
    },
    (result) => {
      if (result) {
        return res.status(200).json({
          data: result,
          status: 'success',
        })
      } else {
        failedProxyCnt++
        if (failedProxyCnt === totalProxyCnt) {
          return res.status(200).json({
            data: {},
            status: 'success',
            message: 'All proxies failed',
          })
        }
      }
    },
  )

  //5th way
  secondWay(
    username,
    's1.airproxy.io',
    10310,
    {
      username: 'sanjananb',
      password: 'sanjananb',
    },
    (result) => {
      if (result) {
        return res.status(200).json({
          data: result,
          status: 'success',
        })
      } else {
        failedProxyCnt++
        if (failedProxyCnt === totalProxyCnt) {
          return res.status(200).json({
            data: {},
            status: 'success',
            message: 'All proxies failed',
          })
        }
      }
    },
  )

  //6th way
  secondWay(
    username,
    'proxy.froxy.com',
    9000,
    {
      username: 'BBis8yzzuum8tR9n',
      password: 'mobile;;;;',
    },
    (result) => {
      if (result) {
        return res.status(200).json({
          data: result,
          status: 'success',
        })
      } else {
        failedProxyCnt++
        if (failedProxyCnt === totalProxyCnt) {
          return res.status(200).json({
            data: {},
            status: 'success',
            message: 'All proxies failed',
          })
        }
      }
    },
  )
  // data: {
  // 	graphql: {},
  // 	logging_page_id: 'profilePage_20269764',
  // 	seo_category_infos: [],
  // 	show_qr_modal: false,
  // 	show_suggested_profiles: true,
  // 	show_view_shop: false,
  // 	toast_content_on_load: null
  //
}
