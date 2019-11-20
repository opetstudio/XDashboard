// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
import {generateHmac} from '../../Utils/Utils'

export const create = api => ({
  merchantCreateRequest: (data, opt) => {
    // api.setHeader('authorization', opt.session.token)
    const resp = api.post('/dashboard/merchantCreate', data)
    return resp
  },
  merchantReadRequest: (data, opt) => {
    let params = {}
    params.page = (data.page || 0) + 1
    params.pageSize = data.pageSize
    data.filtered.forEach((v, k) => {
      params[v['id']] = v['value']
    })
    data.sorted.forEach((v, k) => {
      params['orderby'] = v['id']
      params['desc'] = v['desc']
    })
    const resp = api.get('/plink/merchant/list', params)
    return resp
  },
  merchantReadOneRequest: (data, {encryptedAccessToken, userMerchantCode, userMerchantId}) => {
    api.setHeader('mac', '6905fad8847d8548e225e1701ada9f502741e0f6c3fd68697017e5c06b7ff733')
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    api.setHeader('mId', userMerchantId)
    let params = {}
    params['id'] = userMerchantId
    return api.get(`/merchant/detail`, params)
  },
  merchantRequestMinMaxLimit: (data, {encryptedAccessToken, userMerchantCode, userMerchantId}) => {
    api.setHeader('mac', '6905fad8847d8548e225e1701ada9f502741e0f6c3fd68697017e5c06b7ff733')
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    let params = {}
    // params['mCd'] = userMerchantCode
    // params['mId'] = userMerchantId
    params['id'] = userMerchantId
    api.setHeader('mId', userMerchantId)
    return api.get(`/merchant/detail-limit`, params)
  },
  merchantUpdateMinMaxLimit: ({merchantLimitMin, merchantLimitMax}, {encryptedAccessToken, userMerchantCode, userMerchantId}) => {
    let body = {merchantLimitMin, merchantLimitMax, merchantId: userMerchantId}
    console.log('body==>', JSON.stringify(body))
    api.setHeader('mac', generateHmac(JSON.stringify(body)))
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    let params = {}
    params['mCd'] = userMerchantCode
    params['mId'] = userMerchantId
    api.setHeader('mId', userMerchantId)

    const resp = api.post(`/plink/merchant/update-limit`,body, params)
    return resp
  },
  merchantGetCredential: (data, {encryptedAccessToken, userMerchantCode, userMerchantId}) => {
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    let params = {}
    params['id'] = userMerchantId
    api.setHeader('mId', userMerchantId)
    const resp = api.get(`/merchant/cred`, params)
    return resp
  }
})
