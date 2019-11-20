// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
import {generateHmac} from '../../Utils/Utils'

export const create = api => ({
  transactionFetchOne: (data, {encryptedAccessToken, userMerchantCode, userMerchantId}) => {
    console.log('transactionFetchOne userMerchantCode=', userMerchantCode)
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    let params = {}
    params['id'] = data.id
    api.setHeader('mId', userMerchantId)
    const resp = api.get(`/transaction/detail`, params)
    return resp
  },
  transactionRefundFetchOne: (data, {encryptedAccessToken, userMerchantCode, userMerchantId}) => {
    console.log('transactionRefundFetchOne userMerchantCode=', userMerchantCode)
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    let params = {}
    params['id'] = data.id
    api.setHeader('mId', userMerchantId)
    const resp = api.get(`/transaction/refund-detail`, params)
    return resp
  },
  transactionRefundRequest: (data, {encryptedAccessToken, userMerchantId}) => {
    let body = {}
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    api.setHeader('mId', userMerchantId)
    // console.log('body==>', JSON.stringify(body))
    api.setHeader('mac', generateHmac(JSON.stringify(body)))
    return api.post('', body)
  }
})
