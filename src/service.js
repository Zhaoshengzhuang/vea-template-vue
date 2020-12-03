import { createFetch, applyMiddleware, methods, filter, headers, log } from '@aev/http'
import { Message } from 'element-ui'
import createService from './service/index'

const getToken = function () {
  const userInfo = JSON.parse(sessionStorage.getItem('user_info'))
  if (!userInfo) return ''
  return userInfo.token
}

export default Vue => {
  const fetch = createFetch(applyMiddleware(
    methods,
    filter(
      ({ statusCode = 500, message }) => {
        message = message && typeof message === 'string' ? message : '未知错误'
        if (message && message.indexOf('timeout') > -1) {
          message = '请求超时'
        }
        Message.error(message)
      }
    ),
    headers({
      'Authorization': getToken
    })
  ))
  const urls = {
    cloudUrl: CLOUD_URL
  }
  return createService(fetch, urls)
}
