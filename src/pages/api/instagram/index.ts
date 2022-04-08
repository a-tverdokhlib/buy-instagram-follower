const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
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

async function getUserInfo(req, res) {
  const { username } = req.query
  if (username === '') {
    throw 'No username given'
  }

  // ********* Attempted **********
  // let httpsProxyAgent = require('https-proxy-agent')
  // var agent = new httpsProxyAgent(
  //   'http://sanjananb:sanjananb@s1.airproxy.io:31005',
  // )

  // var config = {
  //   url: `https://www.instagram.com/${username}/?__a=1`,
  //   httpsAgent: agent,
  // }

  // axios
  //   .request(config)
  //   .then((result) => {
  //     return res.status(200).json({
  //       data: result,
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     return res.status(200).json({
  //       data: {},
  //       error: err,
  //     })
  //   })

  // ********** Attempted ***********
  // axios
  //   .get(`https://www.instagram.com/${username}/?__a=1`, {
  //     proxy: {
  //       host: 's1.airproxy.io',
  //       port: 31005,
  //       auth: { username: 'sanjananb', password: 'sanjananb' },
  //     },
  //   })
  //   .then((result) => {
  //     return res.status(200).json({
  //       data: result,
  //     })
  //   })
  //   .catch((err) => {
  //     return res.status(200).json({
  //       data: {},
  //       error: err,
  //     })
  //   })

  // ********** Attempted *********
  // const url = `https://www.instagram.com/${username}/?__a=1/sanjananb:sanjananb@s2.airproxy.io:31005`

  // fetch(url)
  //   .then((response) => response.text())
  //   .then((response) => {
  //     return res.status(200).json({
  //       data: response,
  //     })
  //   })
  //   .catch((error) => {
  //     return res.status(501).json({
  //       data: {},
  //     })
  //   })

  // ********** Attempted *********
  // const HttpsProxyAgent = require('https-proxy-agent')

  // const axiosDefaultConfig = {
  //   baseURL: `https://www.instagram.com/${username}/?__a=1`,
  //   proxy: false,
  //   httpsAgent: new HttpsProxyAgent(
  //     'http://sanjananb:sanjananb@s2.airproxy.io:31005',
  //   ),
  // }
  // const axios = require('axios').create(axiosDefaultConfig)
  // axios
  //   .get('42')
  //   .then(function (response) {
  //     console.log(`Response with axios was ok: ${response.status}`)
  //     console.log(response)
  //     // return res.status(200).json({
  //     //   data: response,
  //     // })
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //     return res.status(200).json({
  //       data: {},
  //       error: error,
  //     })
  //   })

  // 1st way
  // const agent = tunnel.httpsOverHttp({
  //   proxy: {
  //     host: '138.68.76.104',
  //     port: 8058,
  //     proxyAuth: 'admin:p8FNPlwEEh0R',
  //   },
  // })

  // const responsePromise = await axios.request({
  //   url: `https://www.instagram.com/${username}/?__a=1`,
  //   method: 'get',
  //   headers: {
  //     'User-Agent': 'Chrome',
  //   },
  //   httpsAgent: agent,
  // })

  // console.log('Response =>', responsePromise)
  // const respData = responsePromise.data
  // if (respData.graphql !== undefined) {
  //   console.log('Success!!!')
  //   return res.status(200).json({
  //     data: responsePromise.data,
  //   })
  // }

  //2nd way
  const axiosDefaultConfig = {
    baseURL: `https://www.instagram.com/${username}/?__a=1`,
    proxy: {
      host: 's2.airproxy.io',
      port: 31005,
      protocol: 'http',
      auth: {
        username: 'sanjananb',
        password: 'sanjananb',
      },
    },
  }

  const axiosFixed = require('axios-https-proxy-fix').create(axiosDefaultConfig)
  axiosFixed
    .get()
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })

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
